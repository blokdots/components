import { COMMAND_WRITE } from "../../common";
import { AnalogActor, type AnalogActorOptions } from "../../componentBases";

/**
 * Sweep options for the servo motor (Johnny-Five compatible naming).
 */
export interface SweepOptions {
  /**
   * Range of motion [low, high] in degrees (default: [0, 180])
   */
  range?: [number, number];

  /**
   * Time for a HALF sweep (low->high or high->low) in milliseconds (default: 1000)
   */
  interval?: number;

  /**
   * Step size in degrees (default: 1)
   */
  step?: number;
}

export interface ServoMotorOptions extends AnalogActorOptions {
  /**
   * Starting angle in degrees (optional - if not set, servo won't move on init)
   */
  startAngle?: number;

  /**
   * Minimum pulse width in microseconds (default: 544)
   */
  minUs?: number;

  /**
   * Maximum pulse width in microseconds (default: 2400)
   */
  maxUs?: number;
}

/**
 * ServoMotor component for controlling servo motors.
 * Extends AnalogActor with servo-specific functionality (0-180 degrees).
 *
 * Protocol commands (W: = Write):
 * - W:D{pin}:TO:{angle} - Move to angle immediately
 * - W:D{pin}:TO:{angle}:{ms} - Move to angle over time
 * - W:D{pin}:TO:{angle}:{ms}:{rate} - Move to angle over time with rate control
 * - W:D{pin}:SWEEP - Sweep between 0 and 180 degrees
 * - W:D{pin}:SWEEP:{low}:{high} - Sweep between low and high
 * - W:D{pin}:SWEEP:{low}:{high}:{interval}:{step} - Sweep with options
 * - W:D{pin}:STOP - Stop any animation
 * - W:D{pin}:STOP_AFTER:{ms} - Stop after delay in milliseconds
 * - W:D{pin}:STOP_AFTER_CYCLES:{cycles} - Stop after N sweep cycles
 * - W:D{pin}:DETACH - Detach servo (stop sending PWM)
 *
 * Events emitted:
 * - 'change' (angle: number) - When servo angle changes (0-180)
 */
export class ServoMotor extends AnalogActor {
  protected startAngle?: number;
  protected minUs: number;
  protected maxUs: number;

  constructor(options: ServoMotorOptions) {
    super({
      ...options,
      minValue: 0,
      maxValue: 180,
    });
    this.startAngle = options.startAngle;
    this.minUs = options.minUs ?? 544;
    this.maxUs = options.maxUs ?? 2400;
    // Don't set _value - let servo stay at current position on init
  }

  /**
   * Move servo to a specific angle (in degrees).
   * Overloads:
   * - to(angle) - Immediate move
   * - to(angle, ms) - Timed move over ms
   * - to(angle, ms, rate) - Timed move with rate control
   *
   * @param degrees - Target angle (0-180)
   * @param ms - Optional duration in milliseconds
   * @param rate - Optional rate (number of steps)
   */
  to(degrees: number): this;
  to(degrees: number, ms: number): this;
  to(degrees: number, ms: number, rate: number): this;

  to(degrees: number, ms?: number, rate?: number): this {
    this.ensureBoardSet();

    const clampedDegrees = this.clampValue(degrees);
    const finalDegrees = this.invert
      ? this.maxValue - clampedDegrees
      : clampedDegrees;

    if (ms === undefined) {
      // Immediate move
      this.board.sendCommand(
        `${COMMAND_WRITE}:${this.pin}:TO:${finalDegrees}`
      );
    } else if (rate === undefined) {
      // Timed move
      this.board.sendCommand(
        `${COMMAND_WRITE}:${this.pin}:TO:${finalDegrees}:${ms}`
      );
    } else {
      // Timed move with rate
      this.board.sendCommand(
        `${COMMAND_WRITE}:${this.pin}:TO:${finalDegrees}:${ms}:${rate}`
      );
    }

    this.stopAnimating();
    return this;
  }

  /**
   * Override handleData to convert hardware-space angles back to app-space.
   * When invert=true, the Arduino echoes the already-inverted angle.
   * We un-invert it so the component always stores app-space values,
   * preventing a feedback loop when updateHardwareInstanceToValue re-applies invert.
   */
  override handleData(data: unknown): void {
    const rawAngle =
      typeof data === "string" ? parseInt(data, 10) : Number(data);
    const appAngle = this.invert ? this.maxValue - rawAngle : rawAngle;
    if (appAngle !== this._value) {
      this.emitChange(appAngle);
    }
  }

  /**
   * Get current angle of the servo.
   * Alias for value getter with servo-specific naming.
   */
  get angle(): number {
    return this._value ?? this.startAngle ?? 90;
  }

  /**
   * Sweep the servo back and forth.
   * Overloads:
   * - sweep() - Sweep full range (0-180)
   * - sweep(low, high) - Sweep between low and high
   * - sweep(options) - Sweep with full options
   *
   * @param lowOrOptions - Low angle or full options object
   * @param high - High angle (if first param is number)
   */
  sweep(): this;
  sweep(low: number, high: number): this;
  sweep(options: SweepOptions): this;

  sweep(lowOrOptions?: number | SweepOptions, high?: number): this {
    this.ensureBoardSet();

    if (lowOrOptions === undefined) {
      // sweep() - Full range with defaults
      this.board.sendCommand(`${COMMAND_WRITE}:${this.pin}:SWEEP:0:180:1000:1`);
    } else if (typeof lowOrOptions === "number" && high !== undefined) {
      // sweep(low, high) - Use default interval and step
      const interval = 1000; // Default: 1 second for half sweep
      const step = 1; // Default: 1 degree per step
      this.board.sendCommand(
        `${COMMAND_WRITE}:${this.pin}:SWEEP:${lowOrOptions}:${high}:${interval}:${step}`
      );
    } else if (typeof lowOrOptions === "object") {
      // sweep(options)
      const options = lowOrOptions;
      const [low, hi] = options.range ?? [0, 180];
      const interval = options.interval ?? 1000;
      const step = options.step ?? 1;
      this.board.sendCommand(
        `${COMMAND_WRITE}:${this.pin}:SWEEP:${low}:${hi}:${interval}:${step}`
      );
    }

    this._isAnimating = true;
    return this;
  }

  /**
   * Stop any current animation after a delay.
   * @param delayMs - Delay in milliseconds (0 disables auto-stop)
   */
  stopAfterMs(delayMs: number): this {
    this.ensureBoardSet();
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.pin}:STOP_AFTER:${delayMs}`
    );
    return this;
  }

  /**
   * Stop a sweep after N full cycles (low->high->low == 1).
   * @param cycles - Number of cycles (0 disables)
   */
  stopAfterSweepCycles(cycles: number): this {
    this.ensureBoardSet();
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.pin}:STOP_AFTER_CYCLES:${cycles}`
    );
    return this;
  }

  /**
   * Detach the servo (stop sending PWM signals).
   */
  detach(): this {
    this.ensureBoardSet();
    this.board.sendCommand(`${COMMAND_WRITE}:${this.pin}:DETACH`);
    this.stopAnimating();
    return this;
  }

  /**
   * Override write method to use servo-specific command.
   * Maps to the 'to' method for immediate positioning.
   */
  write(angle: number): this {
    return this.to(angle);
  }
}
