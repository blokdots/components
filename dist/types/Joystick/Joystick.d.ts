/// <reference types="node" />
import EventEmitter from "events";
import five from "johnny-five";
type JoystickValue = {
    x: number;
    y: number;
    pressed: boolean;
};
declare class Joystick extends EventEmitter {
    j5Object: five.Joystick;
    invertX: boolean;
    invertY: boolean;
    previousX?: number;
    constructor({ pin1, pin2, board, invertX, invertY, }: {
        pin1: `A${number}`;
        pin2: `A${number}`;
        board?: five.Board;
        invertX?: boolean;
        invertY?: boolean;
    });
    transformValue: (value: {
        x: number;
        y: number;
    }) => JoystickValue;
    cleanUp(): void;
}
export default Joystick;
