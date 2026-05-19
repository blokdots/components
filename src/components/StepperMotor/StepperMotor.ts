import { type DigitalPin, toDigitalPin } from "@blokdots/board-configurations";
import { COMMAND_WRITE } from "../../common";
import { ComponentBase, type ComponentBaseOptions } from "../../componentBases";

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
export class StepperMotor extends ComponentBase<number> {
  protected pin: DigitalPin;
  protected dirPin: DigitalPin;
  readonly stepsPerRevolution: number;
  protected override _value: number = 0;

  private _speed: number = 0;
  private _maxSpeed: number = 0;
  private _acceleration: number = 0;
  private _deceleration: number = 0;

  constructor(options: StepperMotorOptions) {
    super(options);

    if (options.flipPins) {
      this.dirPin = toDigitalPin(options.pin);
      this.pin = toDigitalPin(options.dirPin);
    } else {
      this.pin = toDigitalPin(options.pin);
      this.dirPin = toDigitalPin(options.dirPin);
    }

    this.stepsPerRevolution = options.stepsPerRevolution ?? 200;
    this.board.registerComponent(this.pin, this);
  }

  handleData(data: unknown): void {
    const value = typeof data === "string" ? parseInt(data, 10) : Number(data);
    if (!isNaN(value) && value !== this._value) {
      this.emitChange(value);
    }
  }

  /**
   * Move to an absolute position in steps.
   */
  moveTo(absoluteSteps: number): this {
    this.ensureBoardSet();
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.pin}:MOVETO:${Math.round(absoluteSteps)}`
    );
    return this;
  }

  /**
   * Move a relative number of steps from current position.
   */
  move(relativeSteps: number): this {
    this.ensureBoardSet();
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.pin}:MOVE:${Math.round(relativeSteps)}`
    );
    return this;
  }

  /**
   * Set constant speed in steps per second (bypasses acceleration).
   */
  setSpeed(stepsPerSecond: number): this {
    this.ensureBoardSet();
    this._speed = stepsPerSecond;
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.pin}:SETSPEED:${stepsPerSecond}`
    );
    return this;
  }

  /**
   * Set maximum speed in steps per second.
   */
  setMaxSpeed(stepsPerSecond: number): this {
    this.ensureBoardSet();
    this._maxSpeed = stepsPerSecond;
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.pin}:SETMAXSPEED:${stepsPerSecond}`
    );
    return this;
  }

  /**
   * Set acceleration in steps per second squared.
   */
  setAcceleration(stepsPerSecondSquared: number): this {
    this.ensureBoardSet();
    this._acceleration = stepsPerSecondSquared;
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.pin}:SETACCELERATION:${stepsPerSecondSquared}`
    );
    return this;
  }

  /**
   * Set deceleration in steps per second squared.
   * When set to a value > 0, the motor uses this rate when slowing down
   * instead of the acceleration rate.
   */
  setDeceleration(stepsPerSecondSquared: number): this {
    this.ensureBoardSet();
    this._deceleration = stepsPerSecondSquared;
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.pin}:SETDECELERATION:${stepsPerSecondSquared}`
    );
    return this;
  }

  /**
   * Reset the current position counter without moving.
   */
  setCurrentPosition(position: number): this {
    this.ensureBoardSet();
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.pin}:SETCURRENTPOSITION:${Math.round(position)}`
    );
    this._value = position;
    return this;
  }

  /**
   * Decelerate to a stop.
   */
  stop(): this {
    this.ensureBoardSet();
    this.board.sendCommand(`${COMMAND_WRITE}:${this.pin}:STOP`);
    return this;
  }

  /**
   * Stop immediately (no deceleration).
   */
  stopNow(): this {
    this.ensureBoardSet();
    this.board.sendCommand(`${COMMAND_WRITE}:${this.pin}:STOPNOW`);
    return this;
  }

  /**
   * Get the current position in steps.
   */
  get position(): number {
    return this._value ?? 0;
  }

  get speed(): number {
    return this._speed;
  }

  get maxSpeed(): number {
    return this._maxSpeed;
  }

  get acceleration(): number {
    return this._acceleration;
  }

  get deceleration(): number {
    return this._deceleration;
  }

  cleanup(): void {
    this.stop();
    super.cleanup();
  }
}
