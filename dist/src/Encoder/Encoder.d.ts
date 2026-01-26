import { default as EventEmitter } from 'events';
import { default as five, Board } from 'johnny-five';
declare class Encoder extends EventEmitter {
    value: number;
    waveform: string;
    waveformTimeout?: NodeJS.Timeout;
    upButton: five.Button;
    downButton: five.Button;
    invert: boolean;
    constructor({ pin1, pin2, board, initialValue, debounce, invert, }: {
        pin1: number | string;
        pin2: number | string;
        board?: Board;
        initialValue?: number;
        debounce?: number;
        invert?: boolean;
    });
    countUp(): void;
    countDown(): void;
    setCountTo(value: number): void;
    handleWaveform(): void;
    cleanUp(): void;
}
export default Encoder;
