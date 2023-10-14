import Oled, { Pixel, Color } from "oled-js";
export declare const OLED_WIDTH = 128;
export declare const OLED_HEIGHT = 64;
export declare const dataToQRCodeBuffer: (data: string) => Color[];
declare class OLED extends Oled {
    previousBitmap: Color[] | null;
    drawingIsBlocked: boolean;
    drawingBuffer: Array<Color | null>;
    constructor({ board, five }: {
        board: any;
        five: any;
    });
    drawString(string: string): void;
    drawQRCodeNew(data: string): void;
    drawValue(label: string, value: string, apply?: boolean): Color[];
    drawBitmapOptimized(bitmap: Color[]): void;
    updatePixelsBlocking(pixels: Pixel[]): void;
}
/**
 * Returns a clear buffer the size of the OLED Screen
 */
export declare const getClearBuffer: () => Color[];
/**
 * Adds a QR code to the buffer given, if none is given a clear one is created
 */
export declare const addQrCodeToBuffer: (x: number, y: number, data: string, margin?: number, size?: number, buffer?: Color[]) => Color[];
/**
 * Adds a string of characters to the buffer given, if none is given a clear one is created
 * */
export declare const addStringToBuffer: (x: number, y: number, string: string, size?: number, buffer?: Color[]) => Color[];
/**
 * Adds the text to the buffer given, if none is given a clear one is created
 */
export declare const addTextToBuffer: (text: {
    x: number;
    y: number;
    size: number;
    string: string;
}[], buffer?: Color[]) => Color[];
export default OLED;
