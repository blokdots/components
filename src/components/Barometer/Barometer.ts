import {
  I2cComponentBase,
  type I2cComponentBaseOptions,
} from "../../componentBases";

/**
 * Value structure for barometer (pressure in hPa, temperature in °C, altitude in m).
 */
export interface BarometerValue {
  pressure: number; // in hPa
  temperature: number; // in °C
  altitude: number; // in m
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
export class Barometer extends I2cComponentBase<
  BarometerValue,
  BarometerEventMap
> {
  /**
   * Handle incoming data from Arduino.
   * Expected format: [pressurehPa, temperatureC] as string array (from D:i2c-0:p:t)
   * or string "pressure:temperature", or object {pressure, temperature}.
   */
  handleData(data: unknown): void {
    let pressure: number;
    let temperature: number;
    let altitude: number;

    if (Array.isArray(data) && data.length >= 2) {
      // Array format: ["1013.2", "23.5", "42.3"]
      pressure = parseFloat(data[0]);
      temperature = parseFloat(data[1]);
      altitude = data.length >= 3 ? parseFloat(data[2]) : 0;
    } else if (typeof data === "string" && data.includes(":")) {
      // String format: "1013.2:23.5:42.3"
      const parts = data.split(":");
      if (parts.length < 2) return;
      pressure = parseFloat(parts[0]);
      temperature = parseFloat(parts[1]);
      altitude = parts.length >= 3 ? parseFloat(parts[2]) : 0;
    } else if (
      typeof data === "object" &&
      data !== null &&
      "pressure" in data &&
      "temperature" in data
    ) {
      // Object format: {pressure: 1013.2, temperature: 23.5, altitude: 42.3}
      const barometerData = data as BarometerValue;
      pressure = barometerData.pressure;
      temperature = barometerData.temperature;
      altitude = barometerData.altitude ?? 0;
    } else {
      return;
    }

    if (isNaN(pressure) || isNaN(temperature)) return;

    const value: BarometerValue = {
      pressure,
      temperature,
      altitude: isNaN(altitude) ? 0 : altitude,
    };
    this.emitChange(value);
  }

  /**
   * Get current pressure in hPa.
   */
  get pressure(): number {
    return this._value?.pressure ?? 0;
  }

  /**
   * Get current temperature in °C.
   */
  get temperature(): number {
    return this._value?.temperature ?? 0;
  }

  /**
   * Get current altitude in meters.
   */
  get altitude(): number {
    return this._value?.altitude ?? 0;
  }
}
