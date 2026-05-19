import { DigitalPin } from '@blokdots/board-configurations';
import { ComponentBase, ComponentBaseOptions } from '../../componentBases';
export interface LEDStripValue {
    leds: {
        color: string;
    }[];
}
export interface LEDStripOptions extends ComponentBaseOptions {
    pin: number | DigitalPin;
    ledCount?: number;
    colorOrder?: string;
    gamma?: number;
}
export interface LEDStripEventMap {
    change: (value: LEDStripValue) => void;
    [event: string]: (...args: any[]) => void;
}
/**
 * LEDStrip component for controlling addressable LED strips (NeoPixel/WS2812).
 * Extends ComponentBase with LED strip-specific commands.
 *
 * Protocol commands (W: = Write):
 * - W:D{pin}:COLOR:{hex}               - Set all LEDs to color
 * - W:D{pin}:PIXEL:{index}:{hex}       - Set pixel at index to color
 * - W:D{pin}:RANGE:{start}:{end}:{hex} - Set range of pixels to color
 * - W:D{pin}:BRIGHTNESS:{value}        - Set brightness (0-255)
 * - W:D{pin}:SHIFT:{direction}:{wrap}  - Shift pixels (direction: 1=forward, 0=backward)
 * - W:D{pin}:OFF                       - Turn all LEDs off
 * - W:D{pin}:SHOW                      - Commit changes to hardware
 *
 * Events emitted:
 * - 'change' (value: LEDStripValue) - When strip state changes
 */
export declare class LEDStrip extends ComponentBase<LEDStripValue, LEDStripEventMap> {
    protected pin: DigitalPin;
    protected ledCount: number;
    protected colorOrder: string;
    protected gamma: number;
    constructor(options: LEDStripOptions);
    handleData(data: unknown): void;
    /**
     * Set all LEDs to a single color.
     * @param color - Hex color string (e.g., "#ff0000")
     */
    setColor(color: string): void;
    /**
     * Set a single pixel to a color.
     * @param index - 0-based pixel index
     * @param color - Hex color string
     */
    setPixel(index: number, color: string): void;
    /**
     * Set a range of pixels to a color.
     * @param start - 0-based start index
     * @param end - 0-based end index (exclusive)
     * @param color - Hex color string
     */
    setRange(start: number, end: number, color: string): void;
    /**
     * Set the brightness of the strip.
     * @param value - Brightness value (0-255)
     */
    setBrightness(value: number): void;
    /**
     * Shift all pixels in a direction.
     * @param forward - true = shift forward (0 → N-1), false = backward
     * @param wrap - true = wrap shifted-out pixel to the other side
     */
    shift(forward: boolean, wrap: boolean): void;
    /**
     * Turn all LEDs off (no arguments) or remove an event listener.
     */
    off(): this;
    off(event: string | symbol, listener: (...args: any[]) => void): this;
    /**
     * Commit buffered changes to the hardware.
     */
    show(): void;
    cleanup(): void;
}
