/**
 * Musical note names supported by the Buzzer.
 * Format: note letter + optional sharp + octave number (e.g., "C4", "A#5", "D#3").
 */
export type Note = `${"C" | "D" | "E" | "F" | "G" | "A" | "B"}${"#" | ""}${number | ""}`;
/**
 * A song step: [note or null for rest, duration as fraction of whole note].
 * The note can be a Note string, a frequency in Hz (number), or null (rest).
 */
export type SongStep = [Note | number | null, number];
export declare const NOTE_HZ: Record<string, number>;
