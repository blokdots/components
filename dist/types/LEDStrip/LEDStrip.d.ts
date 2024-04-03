/// <reference path="../../src/@types/decs.d.ts" />
import five from "johnny-five";
import pixel from "node-pixel";
declare class LEDStrip extends pixel.Strip {
    constructor({ pin, board, ledCount, gamma, colorOrder, }: {
        pin: number;
        board: five.Board;
        ledCount?: number;
        gamma?: number;
        colorOrder?: "GRB" | "RGB" | "BRG";
    });
}
export default LEDStrip;
