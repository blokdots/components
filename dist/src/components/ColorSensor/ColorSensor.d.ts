import { I2cComponentBase, I2cComponentBaseOptions } from '../../componentBases';
/**
 * Value structure for color sensor (RGB, each channel 0–255).
 */
export interface ColorSensorValue {
    r: number;
    g: number;
    b: number;
}
export interface ColorSensorOptions extends I2cComponentBaseOptions {
    /** Gain multiplier for TCS34725 (1, 4, 16, or 60). */
    gain?: number;
    /** Integration time in ms for TCS34725 (2.4, 24, 50, 101, 154, or 700). */
    integrationTime?: number;
    /** Sample interval in ms (maps to the Frequency option). */
    sampleInterval?: number;
}
/**
 * Event map for ColorSensor component.
 */
export interface ColorSensorEventMap {
    change: (value: ColorSensorValue) => void;
    [event: string]: (...args: any[]) => void;
}
/**
 * ColorSensor component for reading RGB color values from TCS34725/TCS3472 sensor.
 * This is an I2C component that emits change events when the detected color changes.
 *
 * Arduino sends: D:i2c-0:r:g:b  (three colon-separated integers 0–255)
 *
 * Events emitted:
 * - 'change' (value: {r: number, g: number, b: number}) - When color changes
 */
export declare class ColorSensor extends I2cComponentBase<ColorSensorValue, ColorSensorEventMap> {
    readonly gain: number | undefined;
    readonly integrationTime: number | undefined;
    readonly sampleInterval: number | undefined;
    constructor(options: ColorSensorOptions);
    /**
     * Handle incoming data from Arduino.
     * Expected format: [r, g, b] as string array (from D:i2c-0:r:g:b)
     * or string "r:g:b", or object {r, g, b}.
     */
    handleData(data: unknown): void;
    /**
     * Get current red channel (0–255).
     */
    get r(): number;
    /**
     * Get current green channel (0–255).
     */
    get g(): number;
    /**
     * Get current blue channel (0–255).
     */
    get b(): number;
}
