import { I2cComponentBase, I2cComponentBaseOptions } from '../../componentBases';
/**
 * Value structure for barometer (pressure in hPa, temperature in °C, altitude in m).
 */
export interface BarometerValue {
    pressure: number;
    temperature: number;
    altitude: number;
}
export interface BarometerOptions extends I2cComponentBaseOptions {
    /** Sample interval in milliseconds (default: 1000). Controls how often Arduino reads the sensor. */
    frequency?: number;
}
/**
 * Event map for Barometer component.
 */
export interface BarometerEventMap {
    change: (value: BarometerValue) => void;
    [event: string]: (...args: any[]) => void;
}
/**
 * Barometer component for reading pressure and temperature from BMP280 sensor.
 * This is an I2C component that emits change events when values change.
 *
 * Arduino sends: D:i2c-0:pressurehPa:temperatureC:altitudeM  (three colon-separated floats)
 * Example:       D:i2c-0:1013.2:23.5:42.3
 *
 * Events emitted:
 * - 'change' (value: {pressure: number, temperature: number}) - When values change
 */
export declare class Barometer extends I2cComponentBase<BarometerValue, BarometerEventMap> {
    /**
     * Handle incoming data from Arduino.
     * Expected format: [pressurehPa, temperatureC] as string array (from D:i2c-0:p:t)
     * or string "pressure:temperature", or object {pressure, temperature}.
     */
    handleData(data: unknown): void;
    /**
     * Get current pressure in hPa.
     */
    get pressure(): number;
    /**
     * Get current temperature in °C.
     */
    get temperature(): number;
    /**
     * Get current altitude in meters.
     */
    get altitude(): number;
}
