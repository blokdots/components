import {
  I2cComponentBase,
  type I2cComponentBaseOptions,
} from "../../componentBases";

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
export class SunlightSensor extends I2cComponentBase<
  SunlightSensorValue,
  SunlightSensorEventMap
> {
  /**
   * Handle incoming data from Arduino.
   * Expected format: [uv, ir, vis] as string array or string "uv:ir:vis"
   * or object {uv: number, ir: number, vis: number}
   */
  handleData(data: unknown): void {
    let uv: number;
    let ir: number;
    let vis: number;

    if (Array.isArray(data) && data.length === 3) {
      // Array format: ["1.5", "200", "300"]
      uv = parseFloat(data[0]);
      ir = parseFloat(data[1]);
      vis = parseFloat(data[2]);
    } else if (typeof data === "string" && data.includes(":")) {
      // String format: "1.5:200:300"
      const parts = data.split(":");
      if (parts.length < 3) return;
      uv = parseFloat(parts[0]);
      ir = parseFloat(parts[1]);
      vis = parseFloat(parts[2]);
    } else if (
      typeof data === "object" &&
      data !== null &&
      "uv" in data &&
      "ir" in data &&
      "vis" in data
    ) {
      // Object format: {uv: 1.5, ir: 200, vis: 300}
      const sensorData = data as SunlightSensorValue;
      uv = sensorData.uv;
      ir = sensorData.ir;
      vis = sensorData.vis;
    } else {
      // Invalid format
      return;
    }

    const value: SunlightSensorValue = { uv, ir, vis };
    this.emitChange(value);
  }

  /**
   * Get current UV index.
   */
  get uv(): number {
    return this._value?.uv ?? 0;
  }

  /**
   * Get current infrared light level.
   */
  get ir(): number {
    return this._value?.ir ?? 0;
  }

  /**
   * Get current visible light level.
   */
  get vis(): number {
    return this._value?.vis ?? 0;
  }
}
