import {
  I2cComponentBase,
  type I2cComponentBaseOptions,
} from "../../componentBases";

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
export class Accelerometer extends I2cComponentBase<
  AccelerometerValue,
  AccelerometerEventMap
> {
  protected address: number;

  constructor(options: AccelerometerOptions) {
    super(options);
    this.address = options.address ?? 0x19;
  }

  /**
   * Handle incoming data from Arduino.
   * Expected format: [pitch, roll] as string array or string "pitch:roll"
   * or object {pitch: number, roll: number}
   */
  handleData(data: unknown): void {
    let pitch: number;
    let roll: number;

    if (Array.isArray(data) && data.length === 2) {
      // Array format: ["45", "-30"]
      pitch = parseInt(data[0], 10);
      roll = parseInt(data[1], 10);
    } else if (typeof data === "string" && data.includes(":")) {
      // String format: "45:-30"
      const parts = data.split(":");
      pitch = parseInt(parts[0], 10);
      roll = parseInt(parts[1], 10);
    } else if (
      typeof data === "object" &&
      data !== null &&
      "pitch" in data &&
      "roll" in data
    ) {
      // Object format: {pitch: 45, roll: -30}
      const accelData = data as { pitch: number; roll: number };
      pitch = accelData.pitch;
      roll = accelData.roll;
    } else {
      // Invalid format
      return;
    }

    const value: AccelerometerValue = { pitch, roll };
    this.emitChange(value);
  }

  /**
   * Get current pitch in degrees.
   */
  get pitch(): number {
    return this._value?.pitch ?? 0;
  }

  /**
   * Get current roll in degrees.
   */
  get roll(): number {
    return this._value?.roll ?? 0;
  }
}
