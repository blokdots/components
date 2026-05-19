import { I2cComponentBase, I2cComponentBaseOptions } from '../../componentBases';
/**
 * Nested value structure for sunlight sensor (UV, infrared, visible).
 */
export interface SunlightSensorValue {
    uv: number;
    ir: number;
    vis: number;
}
export interface SunlightSensorOptions extends I2cComponentBaseOptions {
    /** Sample interval in milliseconds (default: 100). Controls how often Arduino reads the sensor. */
    frequency?: number;
}
/**
 * Event map for SunlightSensor component.
 */
export interface SunlightSensorEventMap {
    change: (value: SunlightSensorValue) => void;
    [event: string]: (...args: any[]) => void;
}
/**
 * SunlightSensor component for reading UV index, infrared, and visible light
 * from SI1145 sensor.
 * This is an I2C component that emits change events when light levels change.
 *
 * Events emitted:
 * - 'change' (value: {uv: number, ir: number, vis: number}) - When any value changes
 */
export declare class SunlightSensor extends I2cComponentBase<SunlightSensorValue, SunlightSensorEventMap> {
    /**
     * Handle incoming data from Arduino.
     * Expected format: [uv, ir, vis] as string array or string "uv:ir:vis"
     * or object {uv: number, ir: number, vis: number}
     */
    handleData(data: unknown): void;
    /**
     * Get current UV index.
     */
    get uv(): number;
    /**
     * Get current infrared light level.
     */
    get ir(): number;
    /**
     * Get current visible light level.
     */
    get vis(): number;
}
