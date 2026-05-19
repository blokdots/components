import type { Pin } from "@blokdots/board-configurations";

import { COMMAND_WRITE } from "../../common";
import { ComponentBase, type ComponentBaseOptions } from "../../componentBases";
import { NOTE_HZ, type Note, type SongStep } from "./notes";

export type { Note, SongStep } from "./notes";
export { NOTE_HZ } from "./notes";

export interface BuzzerOptions extends ComponentBaseOptions {
  pin: Pin;
}

/**
 * Convert a Note string to frequency in Hz.
 * If no octave is specified, defaults to octave 4.
 * Returns 0 for unknown notes (treated as rest).
 */
function noteToHz(note: Note): number {
  const normalized = /\d$/.test(note) ? note : `${note}4`;
  return NOTE_HZ[normalized] ?? 0;
}

/**
 * Convert a whole-note fraction + BPM to duration in milliseconds.
 * Matches the C++ fracToMs formula: whole note = 4 quarter notes.
 */
function fracToMs(fraction: number, bpm: number): number {
  if (bpm === 0) bpm = 60;
  const quarterMs = 60000 / bpm;
  const wholeMs = quarterMs * 4;
  return Math.max(1, Math.round(wholeMs * fraction));
}

/**
 * Compute an inter-note gap (ms) to insert after an audible note so that
 * consecutive identical notes are distinguishable. Matches C++ SONG_GAP_PERCENT.
 * 8% of step duration, clamped to [2..20] ms and never more than half the step.
 */
function clampGapMs(stepMs: number): number {
  let g = Math.floor((stepMs * 8) / 100);
  if (g < 2) g = 2;
  if (g > 20) g = 20;
  if (g * 2 >= stepMs) g = Math.floor(stepMs / 2);
  return g;
}

/**
 * Buzzer / Piezo component for driving a passive piezo buzzer via the serial protocol.
 *
 * Song sequencing is done entirely on the Node.js side (one note per serial command),
 * so playback can be interrupted at any time by calling stop().
 *
 * Protocol commands sent to Arduino:
 *   W:pin:FREQ:hz:durationMs  – play a frequency for a duration (0 hz = rest/silence)
 *   W:pin:STOP                – stop immediately
 */
export class Buzzer extends ComponentBase<boolean> {
  protected componentId: string;
  private songTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(options: BuzzerOptions) {
    super(options);
    this.componentId = String(options.pin);
    this.board.registerComponent(this.componentId, this);
  }

  handleData(_data: unknown): void {
    // Buzzer is output-only
  }

  private send(cmd: string): void {
    this.board.sendCommand(`${COMMAND_WRITE}:${this.componentId}:${cmd}`);
  }

  private cancelSong(): void {
    if (this.songTimer !== null) {
      clearTimeout(this.songTimer);
      this.songTimer = null;
    }
  }

  /**
   * Play a specific frequency (Hz) for a duration (ms). Non-blocking – JS timer schedules
   * the silence; the Arduino also enforces the duration via its own tick loop.
   * hz = 0 plays silence for the duration.
   */
  playFrequency(hz: number, durationMs: number): void {
    this.cancelSong();
    this.send(
      `FREQ:${Math.round(Math.max(0, hz))}:${Math.round(Math.max(1, durationMs))}`
    );
  }

  /**
   * Play a musical note for a duration (ms).
   * null or unknown note is treated as silence.
   */
  playNote(note: Note | null, durationMs: number): void {
    const hz = note ? (noteToHz(note) ?? 0) : 0;
    this.playFrequency(hz, durationMs);
  }

  /**
   * Play a song by sequencing notes one at a time from the Node.js side.
   * Each note is sent as a FREQ command; the next note is scheduled after the
   * previous note's duration. Calling stop() at any time cancels pending notes.
   *
   * @param steps - Array of [note|hz|null, wholeNoteFraction]
   * @param bpm - BPM (quarter note = 1 beat)
   * @param onComplete - Optional callback fired when the last note finishes naturally
   */
  playSong(steps: SongStep[], bpm: number, onComplete?: () => void): void {
    this.cancelSong();
    this.sequenceSong(steps, 0, bpm, onComplete ?? null);
  }

  /**
   * Stop any playing tone or in-progress song immediately.
   */
  stop(): void {
    this.cancelSong();
    this.send("STOP");
  }

  cleanup(): void {
    this.cancelSong();
    super.cleanup();
  }

  private sequenceSong(
    steps: SongStep[],
    index: number,
    bpm: number,
    onComplete: (() => void) | null
  ): void {
    if (index >= steps.length) {
      this.send("STOP");
      onComplete?.();
      return;
    }

    const [note, fraction] = steps[index];
    const durationMs = fracToMs(fraction, bpm);

    let hz: number;
    if (note === null) {
      hz = 0;
    } else if (typeof note === "number") {
      hz = note;
    } else {
      hz = noteToHz(note);
    }

    // For audible notes, shorten the FREQ command by a small gap so that
    // consecutive identical notes are distinguishable. The JS timer still waits
    // the full durationMs so timing is correct.
    const gapMs = hz > 0 ? clampGapMs(durationMs) : 0;
    const playMs = durationMs - gapMs;

    this.send(
      `FREQ:${Math.round(Math.max(0, hz))}:${Math.round(Math.max(1, playMs))}`
    );

    this.songTimer = setTimeout(() => {
      this.songTimer = null;
      this.sequenceSong(steps, index + 1, bpm, onComplete);
    }, durationMs);
  }
}
