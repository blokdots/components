import { I2cComponentBase, I2cComponentBaseOptions } from '../../componentBases';
export interface LCDValue {
    string: string;
    backgroundColor: string;
}
export type LCDOptions = I2cComponentBaseOptions;
export interface LCDEventMap {
    change: (value: LCDValue) => void;
    [event: string]: (...args: any[]) => void;
}
/**
 * LCD component for controlling a 16x2 I2C character display with RGB backlight
 * (Grove LCD RGB Backlight).
 * Extends ComponentBase as a complex output component with custom serial commands.
 *
 * Protocol commands (W: = Write):
 * - W:{id}:PRINT:{text}          - Print text on the display
 * - W:{id}:CLEAR                 - Clear the display
 * - W:{id}:SETCURSOR:{col}:{row} - Set cursor position
 * - W:{id}:SETRGB:{r}:{g}:{b}   - Set backlight color (RGB)
 * - W:{id}:BGCOLOR:{hex}         - Set backlight color (hex string)
 * - W:{id}:BACKLIGHTOFF          - Turn off backlight
 *
 * Events emitted:
 * - 'change' (value: LCDValue) - When display state changes
 */
export declare class LCD extends I2cComponentBase<LCDValue, LCDEventMap> {
    private get valueSafe();
    constructor(options: LCDOptions);
    handleData(_data: unknown): void;
    /**
     * Draw text on the display using the shadow-diff streaming protocol.
     * Only changed character cells are rewritten, avoiding flicker.
     * Long text is automatically chunked by the serial protocol layer.
     */
    drawString(text: string): void;
    /** @deprecated Use drawString() instead. Kept for backwards compatibility. */
    print(text: string): void;
    /**
     * Clear the display.
     */
    clear(): void;
    /**
     * Set the cursor position.
     * @param col - Column (0-based, max 15 for 16-column display)
     * @param row - Row (0 or 1 for 2-row display)
     */
    setCursor(col: number, row: number): void;
    /**
     * Set backlight color using RGB values.
     */
    setRGB(r: number, g: number, b: number): void;
    /**
     * Set backlight color using a hex string.
     * @param hex - Hex color string (e.g., "#F39C12")
     */
    bgColor(hex: string): void;
    /**
     * Turn off the backlight.
     */
    backlightOff(): void;
    cleanup(): void;
}
