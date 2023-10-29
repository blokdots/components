import pixel from "node-pixel";
declare class LEDStrip extends pixel.Strip {
    constructor({ pin, board, ledCount, }: {
        pin: number;
        board: any;
        ledCount?: number;
    });
}
export default LEDStrip;
