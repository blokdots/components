import { type DigitalPin, toDigitalPin } from "@blokdots/board-configurations";
import {
  ComponentBase,
  type ComponentBaseOptions,
  type ComponentEventMap,
} from "../../componentBases";

const DEFAULT_HOLD_TIME = 500;

export interface ButtonOptions extends ComponentBaseOptions {
  invert?: boolean;
  isPullup?: boolean;
  isPulldown?: boolean;
  holdTime?: number;
  pin: number | DigitalPin;
}

/**
 * Event map for Button component.
 * Defines all events that the Button component can emit.
 */
export interface ButtonEventMap extends ComponentEventMap<number> {
  change: (value: number) => void;
  down: () => void;
  press: () => void;
  up: () => void;
  release: () => void;
  held: () => void;
}

/**
 * Base class for button and switch components with software debouncing and hold detection.
 *
 * @privateRemarks
 * Protocol: receives D:D{pin}:1 or D:D{pin}:0 from Arduino.
 * Events: change (0|1), down/press (on press), up/release (on release), held (after holdTime ms).
 */
export class Button extends ComponentBase<number, ButtonEventMap> {
  private pin: DigitalPin;
  protected invert: boolean;
  private holdTime: number;
  private holdTimer: ReturnType<typeof setTimeout> | null = null;
  protected override _value: number = 0;

  constructor(options: ButtonOptions) {
    super(options);
    this.pin = toDigitalPin(options.pin);
    this.invert = options.invert ?? false;
    this.holdTime = options.holdTime ?? DEFAULT_HOLD_TIME;
    this.board.registerComponent(this.pin, this);
  }

  handleData(data: unknown): void {
    const rawValue =
      typeof data === "string" ? parseInt(data, 10) : Number(data);
    const value = this.invert ? 1 - rawValue : rawValue;

    if (value !== this._value) {
      const previousValue = this._value;
      this.emitChange(value);

      // Emit press/release events
      if (value === 1 && previousValue === 0) {
        this.emit("down");
        this.emit("press");
        this.startHoldTimer();
      } else if (value === 0 && previousValue === 1) {
        this.clearHoldTimer();
        this.emit("up");
        this.emit("release");
      }
    }
  }

  private startHoldTimer(): void {
    this.clearHoldTimer();
    this.holdTimer = setTimeout(() => {
      if (this._value === 1) {
        this.emit("held");
      }
    }, this.holdTime);
  }

  private clearHoldTimer(): void {
    if (this.holdTimer) {
      clearTimeout(this.holdTimer);
      this.holdTimer = null;
    }
  }

  override cleanup(): void {
    this.clearHoldTimer();
    super.cleanup();
  }

  /** Update runtime options such as invert direction. */
  updateOptions(options: { invert?: boolean }): void {
    if (options.invert !== undefined) this.invert = options.invert;
  }

  // --- Getters ---

  /**
   * Check if the button is currently pressed
   */
  get isPressed(): boolean {
    return this._value === 1;
  }
}
