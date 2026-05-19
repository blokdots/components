import { I2cComponentBase, I2cComponentBaseOptions } from '../../componentBases';
export interface OLEDValue {
    power: boolean;
    inverted: boolean;
    type: "string" | "bitmap" | "splash";
    string?: string;
    bitmap?: Array<0 | 1>;
}
export interface OLEDOptions extends I2cComponentBaseOptions {
    isRotated?: boolean;
    isMirrored?: boolean;
}
export interface OLEDEventMap {
    change: (value: OLEDValue) => void;
    [event: string]: (...args: any[]) => void;
}
/**
 * OLED display component for drawing text and monochrome graphics on a 128×64 pixel screen.
 */
export declare class OLED extends I2cComponentBase<OLEDValue, OLEDEventMap> {
    isRotated: boolean;
    isMirrored: boolean;
    private previousPacked;
    private drawingIsBlocked;
    private drawingBuffer;
    private get valueSafe();
    constructor(options: OLEDOptions);
    handleData(_data: unknown): void;
    private send;
    private resetBitmapState;
    /** Draw a text string on the display. Clears any active bitmap. */
    drawString(text: string): void;
    /** Draw a label and a value on two lines. Clears any active bitmap. */
    drawValue(label: string, value: string): void;
    /** Draw a 128×64 monochrome bitmap using a diff-based transfer to minimise serial traffic. */
    drawBitmapOptimized(bitmap: Array<0 | 1>): void;
    /** Clear the display. */
    clearDisplay(): void;
    /** Turn the display on. */
    turnOnDisplay(): void;
    /** Turn the display off. */
    turnOffDisplay(): void;
    /** Invert the display colours (white ↔ black). */
    invertDisplay(invert: boolean): void;
    /** Toggle 180° rotation of the display content. */
    rotate(): void;
    /** Toggle horizontal mirroring of the display content. */
    mirror(): void;
    cleanup(): void;
    private redraw;
    private updateBytesBlocking;
    private sendBytes;
}
