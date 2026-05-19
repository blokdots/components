import { Pin } from '@blokdots/board-configurations';
import { ComponentBase, ComponentBaseOptions } from '../../componentBases';
import { Note, SongStep } from './notes';
export type { Note, SongStep } from './notes';
export { NOTE_HZ } from './notes';
export interface BuzzerOptions extends ComponentBaseOptions {
    pin: Pin;
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
export declare class Buzzer extends ComponentBase<boolean> {
    protected componentId: string;
    private songTimer;
    constructor(options: BuzzerOptions);
    handleData(_data: unknown): void;
    private send;
    private cancelSong;
    /**
     * Play a specific frequency (Hz) for a duration (ms). Non-blocking – JS timer schedules
     * the silence; the Arduino also enforces the duration via its own tick loop.
     * hz = 0 plays silence for the duration.
     */
    playFrequency(hz: number, durationMs: number): void;
    /**
     * Play a musical note for a duration (ms).
     * null or unknown note is treated as silence.
     */
    playNote(note: Note | null, durationMs: number): void;
    /**
     * Play a song by sequencing notes one at a time from the Node.js side.
     * Each note is sent as a FREQ command; the next note is scheduled after the
     * previous note's duration. Calling stop() at any time cancels pending notes.
     *
     * @param steps - Array of [note|hz|null, wholeNoteFraction]
     * @param bpm - BPM (quarter note = 1 beat)
     * @param onComplete - Optional callback fired when the last note finishes naturally
     */
    playSong(steps: SongStep[], bpm: number, onComplete?: () => void): void;
    /**
     * Stop any playing tone or in-progress song immediately.
     */
    stop(): void;
    cleanup(): void;
    private sequenceSong;
}
