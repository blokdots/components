import { default as EventEmitter } from 'events';
export interface TimerEventMap {
    start: (seconds: number) => void;
    tick: (seconds: number) => void;
    change: (seconds: number) => void;
    stop: (seconds: number) => void;
    reset: (seconds: number) => void;
    set: (seconds: number) => void;
}
/**
 * Timer that counts elapsed time in seconds and emits tick events at a 50 ms resolution.
 */
declare class Timer extends EventEmitter {
    value: number;
    interval?: NodeJS.Timeout;
    constructor(value?: number);
    startInterval(): void;
    /** Start counting elapsed time. Has no effect if already running. */
    start(): void;
    /** Stop counting elapsed time. */
    stop(): void;
    /** Reset elapsed time to zero. Restarts the interval if the timer was running. */
    reset(): void;
    /** Set elapsed time to a specific value in seconds. */
    setTo(value: number): void;
}
export default Timer;
