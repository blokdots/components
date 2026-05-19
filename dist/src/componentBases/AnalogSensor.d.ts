import { AnalogPin } from '@blokdots/board-configurations';
import { ComponentBase, ComponentBaseOptions } from './ComponentBase';
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
export declare class AnalogSensor extends ComponentBase<number> {
    protected pin: AnalogPin;
    protected invert: boolean;
    protected _value: number;
    protected minValue: number;
    protected maxValue: number;
    protected threshold: number;
    constructor(options: AnalogSensorOptions);
    handleData(data: unknown): void;
    updateOptions(options: Partial<Pick<AnalogSensorOptions, "threshold" | "invert">>): void;
}
