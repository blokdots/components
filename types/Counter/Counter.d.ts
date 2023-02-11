/// <reference types="node" />
import EventEmitter from "events";
declare class Counter extends EventEmitter {
    value: number;
    constructor(initialValue?: number);
    countUp(): void;
    countDown(): void;
    setCountTo(value: number): void;
}
export default Counter;
