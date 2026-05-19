import type { AnalogPin } from "@blokdots/board-configurations";

import { invertValue } from "../common";

import { ComponentBase, type ComponentBaseOptions } from "./ComponentBase";

export interface AnalogSensorOptions extends ComponentBaseOptions {
  invert?: boolean;
  pin: AnalogPin;
  minValue?: number;
  maxValue?: number;
  threshold?: number;
}

/**
 * Base class for analog input components that read continuous values (e.g. potentiometer, light sensor).
 * Reads analog pins (A0–A5) and emits `change` events when the value shifts beyond a configurable threshold.
 *
 * @privateRemarks
 * Protocol: receives D:A{pin}:{value} from Arduino (typically 0-1023).
 */
export class AnalogSensor extends ComponentBase<number> {
  protected pin: AnalogPin;
  protected invert: boolean;
  protected override _value: number = 0;
  protected minValue: number;
  protected maxValue: number;
  protected threshold: number;

  constructor(options: AnalogSensorOptions) {
    super(options);
    this.pin = options.pin;
    this.invert = options.invert ?? false;
    this.minValue = options?.minValue ?? 0;
    this.maxValue = options?.maxValue ?? 1023;
    this.board.registerComponent(this.pin, this);
    this.threshold = options?.threshold ?? 1;
  }

  handleData(data: unknown): void {
    const rawValue =
      typeof data === "string" ? parseInt(data, 10) : Number(data);
    // Apply inversion if enabled
    const value = this.invert ? invertValue(rawValue, this.maxValue) : rawValue;

    // Only emit if value changed by at least threshold from last emitted value
    if (Math.abs(value - this._value) >= this.threshold) {
      this.emitChange(value);
    }
  }

  updateOptions(
    options: Partial<Pick<AnalogSensorOptions, "threshold" | "invert">>
  ): void {
    if (options.threshold !== undefined) this.threshold = options.threshold;
    if (options.invert !== undefined) this.invert = options.invert;
  }
}
