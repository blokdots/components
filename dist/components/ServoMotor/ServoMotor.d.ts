import { AnalogActor, AnalogActorOptions } from '../../componentBases';
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
export declare class ServoMotor extends AnalogActor {
    protected startAngle?: number;
    protected minUs: number;
    protected maxUs: number;
    constructor(options: ServoMotorOptions);
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
    /**
     * Override handleData to convert hardware-space angles back to app-space.
     * When invert=true, the Arduino echoes the already-inverted angle.
     * We un-invert it so the component always stores app-space values,
     * preventing a feedback loop when updateHardwareInstanceToValue re-applies invert.
     */
    handleData(data: unknown): void;
    /**
     * Get current angle of the servo.
     * Alias for value getter with servo-specific naming.
     */
    get angle(): number;
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
    /**
     * Stop any current animation after a delay.
     * @param delayMs - Delay in milliseconds (0 disables auto-stop)
     */
    stopAfterMs(delayMs: number): this;
    /**
     * Stop a sweep after N full cycles (low->high->low == 1).
     * @param cycles - Number of cycles (0 disables)
     */
    stopAfterSweepCycles(cycles: number): this;
    /**
     * Detach the servo (stop sending PWM signals).
     */
    detach(): this;
    /**
     * Override write method to use servo-specific command.
     * Maps to the 'to' method for immediate positioning.
     */
    write(angle: number): this;
}
