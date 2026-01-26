import { default as five } from 'johnny-five';
import { default as pixel } from 'node-pixel';
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
