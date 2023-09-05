/// <reference types="node" />
/// <reference types="node" />
import EventEmitter from "events";
declare class Timer extends EventEmitter {
    value: number;
    interval?: NodeJS.Timeout;
    constructor(value?: number);
    startInterval(): void;
    start(): void;
    stop(): void;
    reset(): void;
    setTo(value: number): void;
}
export default Timer;
