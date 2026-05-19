import { DigitalActor, DigitalActorOptions } from './DigitalActor';
export interface AnalogActorOptions extends DigitalActorOptions {
    minValue?: number;
    maxValue?: number;
}
/**
 * Base class for PWM output components with 0–255 value control (fade, pulse, blink animations).
 *
 * @privateRemarks
 * Protocol commands (W: = Write):
 * - W:D{pin}:SET:{number}     - Set component to value (0-255)
 * - W:D{pin}:TOGGLE           - Toggle between min and max
 * - W:D{pin}:BLINK:ms         - Blink with interval (Arduino-side animation)
 * - W:D{pin}:PULSE:ms         - Pulse with interval (Arduino-side animation)
 * - W:D{pin}:FADETO:value:ms  - Fade to value over time
 * - W:D{pin}:STOP             - Stop animation
 */
export declare class AnalogActor extends DigitalActor {
    protected minValue: number;
    protected maxValue: number;
    constructor(options: AnalogActorOptions);
    /**
     * Override to send SET command for analog values
     */
    protected writeValue(value: number): void;
    /**
     * Clamp a value between minValue and maxValue.
     */
    protected clampValue(value: number): number;
    /**
     * Turn the component on to max value (no arguments) or register an event listener.
     */
    on(): this;
    on(event: "change", listener: (value: number) => void): this;
    /**
     * Turn the component off to min value
     */
    off(): this;
    /**
     * Toggle the component between min and max values
     */
    toggle(): this;
    /**
     * Set the value of the component
     * @param value - Value between minValue and maxValue (0-255 by default)
     */
    set(value: number): this;
    /**
     * Pulse the component at a given interval (Arduino-side animation)
     * @param interval - Pulse interval in milliseconds (default: 1000)
     */
    pulse(interval?: number): this;
    /**
     * Fade to a target value over time (Arduino-side animation)
     * @param targetValue - Target brightness value
     * @param duration - Duration in milliseconds (default: 1000)
     */
    fadeTo(targetValue: number, duration?: number): this;
    /**
     * Check if the component is currently on (above minimum value)
     */
    get isOn(): boolean;
}
