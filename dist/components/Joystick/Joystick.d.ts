import { AnalogPin } from '@blokdots/board-configurations';
import { ComponentBase, ComponentBaseOptions } from '../../componentBases';
/**
 * Value structure for joystick (x, y position and button press state).
 */
export interface JoystickValue {
    x: number;
    y: number;
    pressed: boolean;
}
export interface JoystickOptions extends ComponentBaseOptions {
    /**
     * Analog pin for X axis
     */
    pin1: AnalogPin;
    /**
     * Analog pin for Y axis
     */
    pin2: AnalogPin;
    /**
     * Whether to invert the X axis
     */
    invertX?: boolean;
    /**
     * Whether to invert the Y axis
     */
    invertY?: boolean;
    /**
     * Output range for joystick values (default: 50, meaning -50 to +50)
     */
    range?: number;
    /**
     * Minimum change in axis value required to trigger events (default: 6)
     */
    axisThreshold?: number;
    /**
     * Whether to detect button via X-axis saturation (default: true for Grove compatibility)
     */
    detectButton?: boolean;
}
/**
 * Event map for Joystick component.
 */
export interface JoystickEventMap {
    change: (value: JoystickValue) => void;
    down: () => void;
    up: () => void;
    [event: string]: (...args: any[]) => void;
}
/**
 * Joystick component for reading X/Y position and button state.
 * This component reads from two analog pins for X and Y axes, and derives
 * button press state from X axis saturation (Seeed Grove joystick behavior).
 *
 * Events emitted:
 * - 'change' (value: {x: number, y: number, pressed: boolean}) - When position or button state changes
 * - 'down' - When button is pressed
 * - 'up' - When button is released
 */
export declare class Joystick extends ComponentBase<JoystickValue, JoystickEventMap> {
    protected pin1: AnalogPin;
    protected pin2: AnalogPin;
    invertX: boolean;
    invertY: boolean;
    range: number;
    axisThreshold: number;
    detectButton: boolean;
    constructor(options: JoystickOptions);
    /**
     * Handle incoming data from Arduino.
     * Expected format: [x, y, pressed] as array or string "x:y:pressed"
     * where x and y are ALREADY TRANSFORMED values (-range to +range), and pressed is 0 or 1.
     * Arduino handles auto-calibration and transformation.
     */
    handleData(data: unknown): void;
    /**
     * Get current X position.
     */
    get x(): number;
    /**
     * Get current Y position.
     */
    get y(): number;
    /**
     * Get current button press state.
     */
    get pressed(): boolean;
}
