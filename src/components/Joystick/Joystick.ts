import type { AnalogPin } from "@blokdots/board-configurations";

import { ComponentBase, type ComponentBaseOptions } from "../../componentBases";

/**
 * Value structure for joystick (x, y position and button press state).
 */
export interface JoystickValue {
  x: number;
  y: number;
  pressed: boolean;
}

export interface JoystickOptions extends ComponentBaseOptions {
  /**
   * Analog pin for X axis
   */
  pin1: AnalogPin;
  /**
   * Analog pin for Y axis
   */
  pin2: AnalogPin;
  /**
   * Whether to invert the X axis
   */
  invertX?: boolean;
  /**
   * Whether to invert the Y axis
   */
  invertY?: boolean;
  /**
   * Output range for joystick values (default: 50, meaning -50 to +50)
   */
  range?: number;
  /**
   * Minimum change in axis value required to trigger events (default: 6)
   */
  axisThreshold?: number;
  /**
   * Whether to detect button via X-axis saturation (default: true for Grove compatibility)
   */
  detectButton?: boolean;
}

/**
 * Event map for Joystick component.
 */
export interface JoystickEventMap {
  change: (value: JoystickValue) => void;
  down: () => void;
  up: () => void;
  [event: string]: (...args: any[]) => void;
}

/**
 * Joystick component for reading X/Y position and button state.
 * This component reads from two analog pins for X and Y axes, and derives
 * button press state from X axis saturation (Seeed Grove joystick behavior).
 *
 * Events emitted:
 * - 'change' (value: {x: number, y: number, pressed: boolean}) - When position or button state changes
 * - 'down' - When button is pressed
 * - 'up' - When button is released
 */
export class Joystick extends ComponentBase<JoystickValue, JoystickEventMap> {
  protected pin1: AnalogPin;
  protected pin2: AnalogPin;
  public invertX: boolean;
  public invertY: boolean;
  public range: number;
  public axisThreshold: number;
  public detectButton: boolean;

  constructor(options: JoystickOptions) {
    super(options);
    this.pin1 = options.pin1;
    this.pin2 = options.pin2;
    this.invertX = options.invertX ?? false;
    this.invertY = options.invertY ?? false;
    this.range = options.range ?? 50;
    this.axisThreshold = options.axisThreshold ?? 6;
    this.detectButton = options.detectButton ?? true;

    // Use pin1 as the component ID for protocol communication
    this.componentId = this.pin1;

    // Register with board for protocol communication
    if (this.board) {
      this.board.registerComponent(this.componentId, this);
    }
  }

  /**
   * Handle incoming data from Arduino.
   * Expected format: [x, y, pressed] as array or string "x:y:pressed"
   * where x and y are ALREADY TRANSFORMED values (-range to +range), and pressed is 0 or 1.
   * Arduino handles auto-calibration and transformation.
   */
  handleData(data: unknown): void {
    let x: number;
    let y: number;
    let pressed: boolean;

    if (Array.isArray(data) && data.length === 3) {
      // Array format: ["-25", "15", "1"]
      x = parseInt(data[0], 10);
      y = parseInt(data[1], 10);
      pressed = data[2] === "1" || data[2] === 1 || data[2] === true;
    } else if (typeof data === "string" && data.includes(":")) {
      // String format: "-25:15:1"
      const parts = data.split(":");
      x = parseInt(parts[0], 10);
      y = parseInt(parts[1], 10);
      pressed = parts[2] === "1" || parts[2] === "true";
    } else {
      // Invalid format
      return;
    }

    const value: JoystickValue = { x, y, pressed };

    // Emit down/up events when button state changes
    if (this._value && this._value.pressed !== pressed) {
      if (pressed) {
        this.emit("down");
      } else {
        this.emit("up");
      }
    }

    this.emitChange(value);
  }

  /**
   * Get current X position.
   */
  get x(): number {
    return this._value?.x ?? 0;
  }

  /**
   * Get current Y position.
   */
  get y(): number {
    return this._value?.y ?? 0;
  }

  /**
   * Get current button press state.
   */
  get pressed(): boolean {
    return this._value?.pressed ?? false;
  }
}
