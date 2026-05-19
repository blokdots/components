import { I2CPinID } from '@blokdots/board-configurations';
import { ComponentBase, ComponentBaseOptions, ComponentEventMap } from './ComponentBase';
export interface I2cComponentBaseOptions extends ComponentBaseOptions {
    /**
     * Virtual I2C pin ID (e.g. "i2c-0").
     *
     * Must match the ID used in the generated Arduino sketch, where the protocol
     * sends data as `D:i2c-0:...` and routes write commands via `strcmp(pinId, "i2c-0")`.
     * The order of I2C components in the sketch determines the IDs (first = "i2c-0", etc.).
     */
    pin: I2CPinID;
}
/**
 * Base class for all I2C components.
 *
 * Handles the two things every I2C component constructor does identically:
 * 1. Set the component ID from the explicit pin
 * 2. Register with the board
 *
 * Subclasses only need to implement `handleData()` and add their own fields.
 */
export declare abstract class I2cComponentBase<T = unknown, E extends ComponentEventMap<T> = ComponentEventMap<T>> extends ComponentBase<T, E> {
    constructor(options: I2cComponentBaseOptions);
    /**
     * The resolved I2C pin ID (e.g. "i2c-0").
     * Useful for logging or passing back to the Arduino sketch.
     */
    get i2cId(): I2CPinID;
}
