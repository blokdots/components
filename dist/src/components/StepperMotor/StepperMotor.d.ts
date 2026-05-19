import { DigitalPin } from '@blokdots/board-configurations';
import { ComponentBase, ComponentBaseOptions } from '../../componentBases';
export interface StepperMotorOptions extends ComponentBaseOptions {
    /**
     * Step pin (digital pin number or DigitalPin string)
     */
    pin: number | DigitalPin;
    /**
     * Direction pin (digital pin number or DigitalPin string)
     */
    dirPin: number | DigitalPin;
    /**
     * Steps per revolution (default: 200)
     */
    stepsPerRevolution?: number;
    /**
     * Swap STEP and DIR pin assignment (default: false)
     */
    flipPins?: boolean;
}
/**
 * StepperMotor component for controlling stepper motors via AccelStepper (STEP/DIR driver).
 * Extends ComponentBase directly as a complex output component with custom serial commands.
 *
 * Protocol commands (W: = Write):
 * - W:D{pin}:MOVETO:{steps}               - Move to absolute position
 * - W:D{pin}:MOVE:{steps}                 - Move relative steps
 * - W:D{pin}:SETSPEED:{stepsPerSec}       - Set constant speed (no acceleration)
 * - W:D{pin}:SETMAXSPEED:{stepsPerSec}    - Set maximum speed
 * - W:D{pin}:SETACCELERATION:{stepsPerSec2} - Set acceleration
 * - W:D{pin}:SETDECELERATION:{stepsPerSec2} - Set deceleration
 * - W:D{pin}:SETCURRENTPOSITION:{pos}     - Reset current position
 * - W:D{pin}:STOP                         - Decelerate to stop
 * - W:D{pin}:STOPNOW                      - Stop immediately
 *
 * Events emitted:
 * - 'change' (position: number) - When stepper position changes
 */
export declare class StepperMotor extends ComponentBase<number> {
    protected pin: DigitalPin;
    protected dirPin: DigitalPin;
    readonly stepsPerRevolution: number;
    protected _value: number;
    private _speed;
    private _maxSpeed;
    private _acceleration;
    private _deceleration;
    constructor(options: StepperMotorOptions);
    handleData(data: unknown): void;
    /**
     * Move to an absolute position in steps.
     */
    moveTo(absoluteSteps: number): this;
    /**
     * Move a relative number of steps from current position.
     */
    move(relativeSteps: number): this;
    /**
     * Set constant speed in steps per second (bypasses acceleration).
     */
    setSpeed(stepsPerSecond: number): this;
    /**
     * Set maximum speed in steps per second.
     */
    setMaxSpeed(stepsPerSecond: number): this;
    /**
     * Set acceleration in steps per second squared.
     */
    setAcceleration(stepsPerSecondSquared: number): this;
    /**
     * Set deceleration in steps per second squared.
     * When set to a value > 0, the motor uses this rate when slowing down
     * instead of the acceleration rate.
     */
    setDeceleration(stepsPerSecondSquared: number): this;
    /**
     * Reset the current position counter without moving.
     */
    setCurrentPosition(position: number): this;
    /**
     * Decelerate to a stop.
     */
    stop(): this;
    /**
     * Stop immediately (no deceleration).
     */
    stopNow(): this;
    /**
     * Get the current position in steps.
     */
    get position(): number;
    get speed(): number;
    get maxSpeed(): number;
    get acceleration(): number;
    get deceleration(): number;
    cleanup(): void;
}
