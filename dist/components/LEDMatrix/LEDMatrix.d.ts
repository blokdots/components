import { I2cComponentBase, I2cComponentBaseOptions } from '../../componentBases';
export interface LEDMatrixValue {
    power: boolean;
    type: "bitmap" | "full-color" | "text" | "animation";
    color: string;
    text?: string;
    bitmap?: number[];
    displayDuration?: number;
    animation?: number;
}
export interface LEDMatrixOptions extends I2cComponentBaseOptions {
    orientation?: number;
}
export interface LEDMatrixEventMap {
    change: (value: LEDMatrixValue) => void;
    [event: string]: (...args: any[]) => void;
}
/**
 * LEDMatrix component for controlling Grove RGB LED Matrix w/Driver (8x8 RGB matrix).
 * Uses I2C communication (address 0x65) with built-in STM32F031 controller.
 *
 * Protocol commands (W: = Write):
 * - W:I2C_1:COLOR:{hex}                           - Set entire matrix to color
 * - W:I2C_1:TEXT:{text}:{duration}:{colorName}    - Display scrolling text
 * - W:I2C_1:NUMBER:{num}:{duration}:{colorName}   - Display a number
 * - W:I2C_1:ANIMATION:{id}:{duration}             - Play animation (0-5)
 * - W:I2C_1:WAVE:{colorName}:{duration}           - Color wave animation
 * - W:I2C_1:BAR:{percent}                         - Display color bar
 * - W:I2C_1:EMOJI:{index}                         - Display emoji by index
 * - W:I2C_1:CLEAR                                 - Turn off all LEDs
 * - W:I2C_1:POWEROFF                              - Alias for CLEAR
 *
 * Color names: red, orange, yellow, green, cyan, blue, purple, pink, white, black
 *
 * Animation IDs:
 * - 0: big square
 * - 1: small square
 * - 2: rainbow cycle
 * - 3: fire
 * - 4: walking child
 * - 5: broken heart
 *
 * Events emitted:
 * - 'change' (value: LEDMatrixValue) - When matrix state changes
 */
export declare class LEDMatrix extends I2cComponentBase<LEDMatrixValue, LEDMatrixEventMap> {
    protected orientation: number;
    private get valueSafe();
    constructor(options: LEDMatrixOptions);
    handleData(_data: unknown): void;
    private send;
    /**
     * Set entire matrix to a single RGB color.
     * @param color - Hex color string (e.g., "#ff0000")
     */
    setColor(color: string): void;
    /**
     * Display scrolling text with specified color name and duration.
     * @param text - Text to display (max 28 characters)
     * @param durationMs - Display duration in milliseconds
     * @param colorName - Color name (red, orange, yellow, green, cyan, blue, purple, pink, white, black)
     */
    displayText(text: string, durationMs: number, colorName: string): void;
    /**
     * Display a number with specified color name and duration.
     * @param num - Number to display
     * @param durationMs - Display duration in milliseconds
     * @param colorName - Color name
     */
    displayNumber(num: number, durationMs: number, colorName: string): void;
    /**
     * Play a built-in color animation.
     * @param animationId - Animation ID (0-5)
     * @param durationMs - Animation duration in milliseconds
     */
    displayAnimation(animationId: number, durationMs: number): void;
    /**
     * Display color wave animation.
     * @param colorName - Color name
     * @param durationMs - Animation duration in milliseconds
     */
    displayColorWave(colorName: string, durationMs: number): void;
    /**
     * Display color bar at specified percentage.
     * @param percent - Percentage (0-100)
     */
    displayColorBar(percent: number): void;
    /**
     * Display built-in emoji by index.
     * @param emojiIndex - Emoji index
     */
    displayEmoji(emojiIndex: number): void;
    /**
     * Draw a custom 8x8 bitmap.
     * @param bitmap - Array of 64 RGB values (8x8 pixels, row by row)
     */
    drawBitmap(bitmap: number[]): void;
    /**
     * Turn off all LEDs (clear display).
     */
    clear(): void;
    /**
     * Power off the matrix (alias for clear).
     */
    powerOff(): void;
    cleanup(): void;
}
