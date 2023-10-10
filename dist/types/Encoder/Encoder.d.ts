/// <reference types="node" />
/// <reference types="node" />
import EventEmitter from "events";
import five, { Board } from "johnny-five";
declare class Encoder extends EventEmitter {
    value: number;
    waveform: string;
    waveformTimeout?: NodeJS.Timeout;
    upButton: five.Button;
    downButton: five.Button;
    constructor({ slot, board, initialValue, debounce, }: {
        slot: number;
        board: Board;
        initialValue?: number;
        debounce?: number;
    });
    countUp(): void;
    countDown(): void;
    setCountTo(value: number): void;
    handleWaveform(): void;
    cleanUp(): void;
}
export default Encoder;
