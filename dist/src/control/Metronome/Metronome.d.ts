import { default as EventEmitter } from 'events';
export interface MetronomeEventMap {
    start: (state: {
        timestamp: number;
        frequency: number;
    }) => void;
    tick: (state: {
        timestamp: number;
        frequency: number;
    }) => void;
    stop: () => void;
}
/**
 * Metronome that emits a tick event at a configurable frequency (in milliseconds).
 */
declare class Metronome extends EventEmitter {
    frequency: number;
    interval?: NodeJS.Timeout;
    constructor(frequency?: number);
    /**
     * Start the tick interval
     */
    private startTickInterval;
    /** Start the metronome. Emits a `tick` event immediately and then at every interval. */
    start(): void;
    /** Stop the metronome. */
    stop(): void;
    /** Update the tick interval in milliseconds. Takes effect immediately if already running. */
    setFrequency(frequency: number): void;
}
export default Metronome;
