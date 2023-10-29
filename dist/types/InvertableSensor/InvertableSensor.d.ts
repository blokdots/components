/// <reference types="node" />
import EventEmitter from "events";
import five from "johnny-five";
declare class InvertableSensor extends EventEmitter {
    j5Object: five.Sensor;
    invert: boolean;
    constructor({ invert, board, ...sensorOptions }: {
        invert?: boolean;
        board: five.Board;
    } & five.SensorOption);
    transformValue: (value: number) => number;
    cleanUp(): void;
}
export default InvertableSensor;
