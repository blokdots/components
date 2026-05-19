import { default as EventEmitter } from 'events';
export interface CounterEventMap {
    change: (value: number) => void;
}
/**
 * Counter that tracks an integer value, incremented or decremented by triggers.
 */
declare class Counter extends EventEmitter {
    value: number;
    constructor(initialValue?: number);
    /** Increment the counter by 1. */
    countUp(): void;
    /** Decrement the counter by 1. */
    countDown(): void;
    /** Set the counter to a specific value. */
    setCountTo(value: number): void;
}
export default Counter;
