import { I2CPinID } from '@blokdots/board-configurations';
import { ComponentBase, ComponentBaseOptions } from '../../componentBases';
import { MotorChannel } from './MotorChannel';
export interface MotorDriverValue {
    m1: number;
    m2: number;
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
export declare class MotorDriver extends ComponentBase<MotorDriverValue, MotorDriverEventMap> {
    readonly M1: MotorChannel;
    readonly M2: MotorChannel;
    constructor(options: MotorDriverOptions);
    handleData(_data: unknown): void;
    private send;
    /** Stop both motors immediately. */
    stopAll(): void;
}
