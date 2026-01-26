import { default as EventEmitter } from 'events';
import { default as five } from 'johnny-five';
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
