import { DigitalPin } from '@blokdots/board-configurations';
import { ComponentBase, ComponentBaseOptions } from './ComponentBase';
export interface DigitalActorOptions extends ComponentBaseOptions {
    invert?: boolean;
    pin: number | DigitalPin;
}
/**
 * Base class for digital output components (on/off control, blink, toggle).
 *
 * @privateRemarks
 * Protocol commands (W: = Write):
 * - W:D{pin}:1            - Turn on
 * - W:D{pin}:0            - Turn off
 * - W:D{pin}:TOGGLE       - Toggle state
 * - W:D{pin}:BLINK:ms     - Blink with interval (Arduino-side animation)
 * - W:D{pin}:STOP         - Stop animation
 */
export declare class DigitalActor extends ComponentBase<number> {
    protected pin: DigitalPin;
    protected invert: boolean;
    protected _value: number;
    protected _isAnimating: boolean;
    constructor(options: DigitalActorOptions);
    /**
     * Stop any running animation and reset the animation flag.
     */
    protected stopAnimating(): void;
    protected writeValue(value: number): void;
    handleData(data: unknown): void;
    cleanup(): void;
    /**
     * Turn the component on (no arguments) or register an event listener.
     */
    on(): this;
    on(event: "change", listener: (value: number) => void): this;
    /**
     * Turn the component off
     */
    off(): this;
    /**
     * Toggle the component state
     */
    toggle(): this;
    /**
     * Set the value of the component
     * @param value - 0 (off) or 1 (on)
     */
    set(value: 0 | 1): this;
    /**
     * Blink the component at a given interval (Arduino-side animation)
     * @param interval - Blink interval in milliseconds (default: 500)
     */
    blink(interval?: number): this;
    /**
     * Stop any running animation (blink, pulse)
     */
    stop(): this;
    updateOptions(options: {
        invert?: boolean;
    }): void;
    /**
     * Check if the component is currently on
     */
    get isOn(): boolean;
    /**
     * Check if an animation is running
     */
    get isAnimating(): boolean;
}
