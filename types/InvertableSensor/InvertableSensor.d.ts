/// <reference types="node" />
import EventEmitter from "events";
import five from "johnny-five";
declare class InvertableSensor extends EventEmitter {
    j5Object: five.Sensor;
    invert: boolean;
    constructor({ invert, pin, board, threshold, ...componentProps }: {
        invert?: boolean;
        threshold?: number;
        pin: string | number;
        board: five.Board;
    });
    transformValue: (value: number) => number;
    cleanUp(): void;
}
export default InvertableSensor;