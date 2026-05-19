import { DigitalPin } from '@blokdots/board-configurations';
import { ComponentBase, ComponentBaseOptions, ComponentEventMap } from '../../componentBases';
export interface ButtonOptions extends ComponentBaseOptions {
    invert?: boolean;
    isPullup?: boolean;
    isPulldown?: boolean;
    holdTime?: number;
    pin: number | DigitalPin;
}
/**
 * Event map for Button component.
 * Defines all events that the Button component can emit.
 */
export interface ButtonEventMap extends ComponentEventMap<number> {
    change: (value: number) => void;
    down: () => void;
    press: () => void;
    up: () => void;
    release: () => void;
    held: () => void;
}
/**
 * Base class for button and switch components with software debouncing and hold detection.
 *
 * @privateRemarks
 * Protocol: receives D:D{pin}:1 or D:D{pin}:0 from Arduino.
 * Events: change (0|1), down/press (on press), up/release (on release), held (after holdTime ms).
 */
export declare class Button extends ComponentBase<number, ButtonEventMap> {
    private pin;
    protected invert: boolean;
    private holdTime;
    private holdTimer;
    protected _value: number;
    constructor(options: ButtonOptions);
    handleData(data: unknown): void;
    private startHoldTimer;
    private clearHoldTimer;
    cleanup(): void;
    /** Update runtime options such as invert direction. */
    updateOptions(options: {
        invert?: boolean;
    }): void;
    /**
     * Check if the button is currently pressed
     */
    get isPressed(): boolean;
}
