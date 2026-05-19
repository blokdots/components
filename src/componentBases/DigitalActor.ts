import { type DigitalPin, toDigitalPin } from "@blokdots/board-configurations";
import { COMMAND_WRITE } from "../common";

import { ComponentBase, type ComponentBaseOptions } from "./ComponentBase";

export interface DigitalActorOptions extends ComponentBaseOptions {
  invert?: boolean;
  pin: number | DigitalPin;
}

/**
 * Base class for digital output components (on/off control, blink, toggle).
 *
 * @privateRemarks
 * Protocol commands (W: = Write):
 * - W:D{pin}:1            - Turn on
 * - W:D{pin}:0            - Turn off
 * - W:D{pin}:TOGGLE       - Toggle state
 * - W:D{pin}:BLINK:ms     - Blink with interval (Arduino-side animation)
 * - W:D{pin}:STOP         - Stop animation
 */
export class DigitalActor extends ComponentBase<number> {
  protected pin: DigitalPin;
  protected invert: boolean;
  protected override _value: number = 0;
  protected _isAnimating: boolean = false;

  constructor(options: DigitalActorOptions) {
    super(options);
    this.pin = toDigitalPin(options.pin);
    this.invert = options.invert ?? false;
    this.board.registerComponent(this.pin, this);
  }

  /**
   * Stop any running animation and reset the animation flag.
   */
  protected stopAnimating(): void {
    this._isAnimating = false;
  }

  protected writeValue(value: number): void {
    this.board?.sendCommand(`${COMMAND_WRITE}:${this.pin}:${value}`);
    this.emitChange(value);
  }

  handleData(data: unknown): void {
    const value = typeof data === "string" ? parseInt(data, 10) : Number(data);
    if (value !== this._value) {
      this.emitChange(value);
    }
  }

  cleanup(): void {
    this.stop();
    super.cleanup();
  }

  // --- Hardware Control Methods ---

  /**
   * Turn the component on (no arguments) or register an event listener.
   */
  on(): this;
  on(event: "change", listener: (value: number) => void): this;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  on(event?: string | symbol, listener?: (...args: any[]) => void): this {
    // If called with arguments, delegate to ComponentBase.on
    if (event !== undefined && listener !== undefined) {
      super.on(event as "change", listener as (value: number) => void);
      return this;
    }
    // Otherwise, turn the LED on
    this.ensureBoardSet();
    const writeValue = this.invert ? 0 : 1;
    this.writeValue(writeValue);
    this.stopAnimating();
    return this;
  }

  /**
   * Turn the component off
   */
  off(): this {
    this.ensureBoardSet();
    const writeValue = this.invert ? 1 : 0;
    this.writeValue(writeValue);
    this.stopAnimating();
    return this;
  }

  /**
   * Toggle the component state
   */
  toggle(): this {
    if (this._value === 0) {
      return this.on();
    } else {
      return this.off();
    }
  }

  /**
   * Set the value of the component
   * @param value - 0 (off) or 1 (on)
   */
  set(value: 0 | 1): this {
    this.ensureBoardSet();
    const writeValue = this.invert ? (value === 0 ? 1 : 0) : value;
    this.writeValue(writeValue);
    this.stopAnimating();
    return this;
  }

  /**
   * Blink the component at a given interval (Arduino-side animation)
   * @param interval - Blink interval in milliseconds (default: 500)
   */
  blink(interval: number = 500): this {
    this.ensureBoardSet();
    this.board.sendCommand(`${COMMAND_WRITE}:${this.pin}:BLINK:${interval}`);
    this._isAnimating = true;
    return this;
  }

  /**
   * Stop any running animation (blink, pulse)
   */
  stop(): this {
    if (!this.board) return this;
    if (this._isAnimating) {
      this.board.sendCommand(`${COMMAND_WRITE}:${this.pin}:STOP`);
      this._isAnimating = false;
    }
    return this;
  }

  updateOptions(options: { invert?: boolean }): void {
    if (options.invert !== undefined) this.invert = options.invert;
  }

  // --- Getters ---

  /**
   * Check if the component is currently on
   */
  get isOn(): boolean {
    return this._value === 1;
  }

  /**
   * Check if an animation is running
   */
  get isAnimating(): boolean {
    return this._isAnimating;
  }
}
