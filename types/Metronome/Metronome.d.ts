/// <reference types="node" />
/// <reference types="node" />
import EventEmitter from "events";
declare class Metronome extends EventEmitter {
    frequency: number;
    interval?: NodeJS.Timeout;
    constructor(frequency?: number);
    start(): void;
    stop(): void;
    setFrequency(frequency: number): void;
}
export default Metronome;
