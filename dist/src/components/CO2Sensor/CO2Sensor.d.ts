import { ComponentBase, ComponentBaseOptions } from '../../componentBases';
export interface CO2SensorOptions extends ComponentBaseOptions {
    rxPin: string;
    txPin: string;
}
export interface CO2SensorEventMap {
    change: (ppm: number) => void;
    [event: string]: (...args: any[]) => void;
}
/**
 * CO2 Sensor component for reading CO2 concentration from Grove MH-Z16 sensor.
 * This is a UART component that communicates via SoftwareSerial (RX/TX pins).
 *
 * Arduino sends: D:rxPin:ppm  (single integer, CO2 parts per million)
 * Example:       D:D3:412
 *
 * Events emitted:
 * - 'change' (ppm: number) - When CO2 concentration changes
 */
export declare class CO2Sensor extends ComponentBase<number, CO2SensorEventMap> {
    constructor(options: CO2SensorOptions);
    handleData(data: unknown): void;
    get ppm(): number;
}
