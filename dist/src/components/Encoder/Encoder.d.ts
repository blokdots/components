import { DigitalPin } from '@blokdots/board-configurations';
import { ComponentBase, ComponentBaseOptions, ComponentEventMap } from '../../componentBases';
export interface EncoderOptions extends ComponentBaseOptions {
    pin1: number | DigitalPin;
    pin2: number | DigitalPin;
    initialValue?: number;
    invert?: boolean;
}
export interface EncoderEventMap extends ComponentEventMap<number> {
    change: (value: number) => void;
    up: () => void;
    down: () => void;
}
/**
 * Rotary encoder component. Tracks a signed count value and emits directional events on each detent.
 *
 * @privateRemarks
 * Protocol: receives D:D{pin1}:{count} from Arduino.
 * Note: encoders typically produce 2 or 4 pulses per detent; normalised on the C++ side via `step`.
 */
export declare class Encoder extends ComponentBase<number, EncoderEventMap> {
    private pin1;
    private pin2;
    protected invert: boolean;
    protected _value: number;
    private lastValue;
    constructor(options: EncoderOptions);
    handleData(data: unknown): void;
    /** Update runtime options such as invert direction. */
    updateOptions(options: {
        invert?: boolean;
    }): void;
    /**
     * Set the encoder count to a specific value.
     * Note: This updates the local state but does not communicate
     * with the Arduino. For hardware reset, use a serial command.
     */
    setCountTo(value: number): void;
    /** Increment the encoder count by 1. */
    countUp(): void;
    /** Decrement the encoder count by 1. */
    countDown(): void;
    /**
     * Get the current encoder count value
     */
    get count(): number;
}
