import { ComponentBase, type ComponentBaseOptions } from "../../componentBases";

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
export class CO2Sensor extends ComponentBase<number, CO2SensorEventMap> {
  constructor(options: CO2SensorOptions) {
    super(options);
    this.componentId = options.rxPin;
    if (this.board) {
      this.board.registerComponent(this.componentId, this);
    }
  }

  handleData(data: unknown): void {
    let ppm: number;

    if (typeof data === "string") {
      ppm = parseInt(data, 10);
    } else if (typeof data === "number") {
      ppm = Math.round(data);
    } else {
      return;
    }

    if (isNaN(ppm)) return;

    this.emitChange(ppm);
  }

  get ppm(): number {
    return this._value ?? 0;
  }
}
