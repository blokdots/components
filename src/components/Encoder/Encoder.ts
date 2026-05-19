import { type DigitalPin, toDigitalPin } from "@blokdots/board-configurations";

import {
  ComponentBase,
  type ComponentBaseOptions,
  type ComponentEventMap,
} from "../../componentBases";

export interface EncoderOptions extends ComponentBaseOptions {
  pin1: number | DigitalPin;
  pin2: number | DigitalPin;
  initialValue?: number;
  invert?: boolean;
}

export interface EncoderEventMap extends ComponentEventMap<number> {
  change: (value: number) => void;
  up: () => void;
  down: () => void;
}

/**
 * Rotary encoder component. Tracks a signed count value and emits directional events on each detent.
 *
 * @privateRemarks
 * Protocol: receives D:D{pin1}:{count} from Arduino.
 * Note: encoders typically produce 2 or 4 pulses per detent; normalised on the C++ side via `step`.
 */
export class Encoder extends ComponentBase<number, EncoderEventMap> {
  private pin1: DigitalPin;
  private pin2: DigitalPin;
  protected invert: boolean;
  protected override _value: number = 0;
  private lastValue: number = 0;

  constructor(options: EncoderOptions) {
    super(options);
    this.pin1 = toDigitalPin(options.pin1);
    this.pin2 = toDigitalPin(options.pin2);
    this.invert = options.invert ?? false;
    this._value = options.initialValue ?? 0;
    this.lastValue = this._value;

    // Register with the first pin as the component ID
    this.board.registerComponent(this.pin1, this);
  }

  handleData(data: unknown): void {
    const rawValue =
      typeof data === "string" ? parseInt(data, 10) : Number(data);
    const value = this.invert ? -rawValue : rawValue;

    if (value !== this._value) {
      const previousValue = this._value;
      this.emitChange(value);

      // Emit directional events
      if (value > previousValue) {
        this.emit("up");
      } else if (value < previousValue) {
        this.emit("down");
      }
    }
  }

  /** Update runtime options such as invert direction. */
  updateOptions(options: { invert?: boolean }): void {
    if (options.invert !== undefined) this.invert = options.invert;
  }

  /**
   * Set the encoder count to a specific value.
   * Note: This updates the local state but does not communicate
   * with the Arduino. For hardware reset, use a serial command.
   */
  setCountTo(value: number): void {
    if (value !== this._value) {
      this.emitChange(value);
    }
  }

  /** Increment the encoder count by 1. */
  countUp(): void {
    this.setCountTo(this._value + 1);
  }

  /** Decrement the encoder count by 1. */
  countDown(): void {
    this.setCountTo(this._value - 1);
  }

  /**
   * Get the current encoder count value
   */
  get count(): number {
    return this._value ?? 0;
  }
}
