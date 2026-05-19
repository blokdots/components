import type { I2CPinID } from "@blokdots/board-configurations";

import { COMMAND_WRITE } from "../../common";
import { ComponentBase, type ComponentBaseOptions } from "../../componentBases";

import { MotorChannel } from "./MotorChannel";

export interface MotorDriverValue {
  m1: number; // signed speed: -255 (full reverse) to 255 (full forward)
  m2: number; // signed speed: -255 (full reverse) to 255 (full forward)
}

export interface MotorDriverOptions extends ComponentBaseOptions {
  pin: I2CPinID;
}

export interface MotorDriverEventMap {
  change: (value: MotorDriverValue) => void;
  [event: string]: (...args: any[]) => void;
}

/**
 * Grove I2C Motor Driver component. Controls two DC motors via `M1` and `M2` channel objects.
 *
 * @privateRemarks
 * Protocol: W:i2c-0:M1:{speed} / W:i2c-0:M2:{speed} / W:i2c-0:STOPALL
 * Speed range: -255 (full reverse) to 255 (full forward).
 */
export class MotorDriver extends ComponentBase<
  MotorDriverValue,
  MotorDriverEventMap
> {
  readonly M1: MotorChannel;
  readonly M2: MotorChannel;

  constructor(options: MotorDriverOptions) {
    super(options);
    this.componentId = options.pin;

    const send = (cmd: string) => this.send(cmd);
    this.M1 = new MotorChannel(send, "M1");
    this.M2 = new MotorChannel(send, "M2");

    this.board.registerComponent(this.componentId, this);
  }

  handleData(_data: unknown): void {
    // Motor driver is output-only; no data comes back from Arduino
  }

  private send(cmd: string): void {
    this.board.sendCommand(`${COMMAND_WRITE}:${this.componentId}:${cmd}`);
  }

  /** Stop both motors immediately. */
  stopAll(): void {
    this.send("STOPALL");
  }
}
