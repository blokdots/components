import { COMMAND_WRITE, clamp } from "../common";

import { DigitalActor, type DigitalActorOptions } from "./DigitalActor";

export interface AnalogActorOptions extends DigitalActorOptions {
  minValue?: number;
  maxValue?: number;
}

/**
 * Base class for PWM output components with 0–255 value control (fade, pulse, blink animations).
 *
 * @privateRemarks
 * Protocol commands (W: = Write):
 * - W:D{pin}:SET:{number}     - Set component to value (0-255)
 * - W:D{pin}:TOGGLE           - Toggle between min and max
 * - W:D{pin}:BLINK:ms         - Blink with interval (Arduino-side animation)
 * - W:D{pin}:PULSE:ms         - Pulse with interval (Arduino-side animation)
 * - W:D{pin}:FADETO:value:ms  - Fade to value over time
 * - W:D{pin}:STOP             - Stop animation
 */
export class AnalogActor extends DigitalActor {
  protected minValue: number;
  protected maxValue: number;

  constructor(options: AnalogActorOptions) {
    super(options);
    this.minValue = options?.minValue ?? 0;
    this.maxValue = options?.maxValue ?? 255;
  }

  /**
   * Override to send SET command for analog values
   */
  protected override writeValue(value: number): void {
    // Round to integer since Arduino expects int values
    const intValue = Math.round(value);
    this.board?.sendCommand(`${COMMAND_WRITE}:${this.pin}:SET:${intValue}`);
    this.emitChange(intValue);
  }

  /**
   * Clamp a value between minValue and maxValue.
   */
  protected clampValue(value: number): number {
    return clamp(value, this.minValue, this.maxValue);
  }

  /**
   * Turn the component on to max value (no arguments) or register an event listener.
   */
  override on(): this;
  override on(event: "change", listener: (value: number) => void): this;

  override on(
    event?: string | symbol,
    listener?: (...args: any[]) => void
  ): this {
    // If called with arguments, delegate to parent
    if (event !== undefined && listener !== undefined) {
      return super.on(event as "change", listener as (value: number) => void);
    }
    // Otherwise, turn the component on to max value
    this.ensureBoardSet();
    const writeValue = this.invert ? this.minValue : this.maxValue;
    this.writeValue(writeValue);
    this.stopAnimating();
    return this;
  }

  /**
   * Turn the component off to min value
   */
  override off(): this {
    this.ensureBoardSet();
    const writeValue = this.invert ? this.maxValue : this.minValue;
    this.writeValue(writeValue);
    this.stopAnimating();
    return this;
  }

  /**
   * Toggle the component between min and max values
   */
  override toggle(): this {
    if (this._value <= this.minValue) {
      return this.on();
    } else {
      return this.off();
    }
  }

  /**
   * Set the value of the component
   * @param value - Value between minValue and maxValue (0-255 by default)
   */
  override set(value: number): this {
    this.ensureBoardSet();
    const clampedValue = this.clampValue(value);
    const writeValue = this.invert
      ? this.maxValue - clampedValue
      : clampedValue;
    this.writeValue(writeValue);
    this.stopAnimating();
    return this;
  }

  /**
   * Pulse the component at a given interval (Arduino-side animation)
   * @param interval - Pulse interval in milliseconds (default: 1000)
   */
  pulse(interval: number = 1000): this {
    this.ensureBoardSet();
    this.board.sendCommand(`${COMMAND_WRITE}:${this.pin}:PULSE:${interval}`);
    this._isAnimating = true;
    return this;
  }

  /**
   * Fade to a target value over time (Arduino-side animation)
   * @param targetValue - Target brightness value
   * @param duration - Duration in milliseconds (default: 1000)
   */
  fadeTo(targetValue: number, duration: number = 1000): this {
    this.ensureBoardSet();
    const clampedValue = this.clampValue(targetValue);
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.pin}:FADETO:${clampedValue}:${duration}`
    );
    this._isAnimating = true;
    return this;
  }

  /**
   * Check if the component is currently on (above minimum value)
   */
  override get isOn(): boolean {
    return this._value > this.minValue;
  }
}
