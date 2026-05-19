import {
  I2cComponentBase,
  type I2cComponentBaseOptions,
} from "../../componentBases";

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
export class ColorSensor extends I2cComponentBase<
  ColorSensorValue,
  ColorSensorEventMap
> {
  readonly gain: number | undefined;
  readonly integrationTime: number | undefined;
  readonly sampleInterval: number | undefined;

  constructor(options: ColorSensorOptions) {
    super(options);
    this.gain = options.gain;
    this.integrationTime = options.integrationTime;
    this.sampleInterval = options.sampleInterval;
  }

  /**
   * Handle incoming data from Arduino.
   * Expected format: [r, g, b] as string array (from D:i2c-0:r:g:b)
   * or string "r:g:b", or object {r, g, b}.
   */
  handleData(data: unknown): void {
    let r: number;
    let g: number;
    let b: number;

    if (Array.isArray(data) && data.length === 3) {
      // Array format: ["255", "128", "0"]
      r = parseInt(data[0], 10);
      g = parseInt(data[1], 10);
      b = parseInt(data[2], 10);
    } else if (typeof data === "string" && data.includes(":")) {
      // String format: "255:128:0"
      const parts = data.split(":");
      if (parts.length < 3) return;
      r = parseInt(parts[0], 10);
      g = parseInt(parts[1], 10);
      b = parseInt(parts[2], 10);
    } else if (
      typeof data === "object" &&
      data !== null &&
      "r" in data &&
      "g" in data &&
      "b" in data
    ) {
      // Object format: {r: 255, g: 128, b: 0}
      const colorData = data as ColorSensorValue;
      r = colorData.r;
      g = colorData.g;
      b = colorData.b;
    } else {
      return;
    }

    const value: ColorSensorValue = { r, g, b };
    this.emitChange(value);
  }

  /**
   * Get current red channel (0–255).
   */
  get r(): number {
    return this._value?.r ?? 0;
  }

  /**
   * Get current green channel (0–255).
   */
  get g(): number {
    return this._value?.g ?? 0;
  }

  /**
   * Get current blue channel (0–255).
   */
  get b(): number {
    return this._value?.b ?? 0;
  }
}
