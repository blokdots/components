import { I2cComponentBase, I2cComponentBaseOptions } from '../../componentBases';
/**
 * Nested value structure for accelerometer (pitch and roll).
 */
export interface AccelerometerValue {
    pitch: number;
    roll: number;
}
export interface AccelerometerOptions extends I2cComponentBaseOptions {
    /**
     * I2C address for LIS3DH (default: 0x19)
     */
    address?: number;
}
/**
 * Event map for Accelerometer component.
 */
export interface AccelerometerEventMap {
    change: (value: AccelerometerValue) => void;
    [event: string]: (...args: any[]) => void;
}
/**
 * Accelerometer component for reading pitch and roll from LIS3DH sensor.
 * This is an I2C component that emits change events when orientation changes.
 *
 * Events emitted:
 * - 'change' (value: {pitch: number, roll: number}) - When pitch or roll changes
 */
export declare class Accelerometer extends I2cComponentBase<AccelerometerValue, AccelerometerEventMap> {
    protected address: number;
    constructor(options: AccelerometerOptions);
    /**
     * Handle incoming data from Arduino.
     * Expected format: [pitch, roll] as string array or string "pitch:roll"
     * or object {pitch: number, roll: number}
     */
    handleData(data: unknown): void;
    /**
     * Get current pitch in degrees.
     */
    get pitch(): number;
    /**
     * Get current roll in degrees.
     */
    get roll(): number;
}
