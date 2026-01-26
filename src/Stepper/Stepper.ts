import five from "johnny-five";
import EventEmitter from "events";
import { createEmitterProxy } from "../createEmitterProxy";

/**
 * Interface that declares the Stepper class with proper method overloads
 * Combines five.Stepper methods with EventEmitter capabilities
 */
export interface Stepper extends five.Stepper {
  // Event listening (EventEmitter methods)
  on(event: string | symbol, listener: (...args: any[]) => void): this;
  off(event: string | symbol, listener: (...args: any[]) => void): this;

  // EventEmitter methods
  emit(event: string | symbol, ...args: any[]): boolean;
  once(event: string | symbol, listener: (...args: any[]) => void): this;
  removeListener(
    event: string | symbol,
    listener: (...args: any[]) => void
  ): this;
  removeAllListeners(event?: string | symbol): this;
  setMaxListeners(n: number): this;
  getMaxListeners(): number;
  listeners(event: string | symbol): Function[];
  rawListeners(event: string | symbol): Function[];
  listenerCount(event: string | symbol): number;
  prependListener(
    event: string | symbol,
    listener: (...args: any[]) => void
  ): this;
  prependOnceListener(
    event: string | symbol,
    listener: (...args: any[]) => void
  ): this;
  eventNames(): (string | symbol)[];
  addListener(event: string | symbol, listener: (...args: any[]) => void): this;
}

/**
 * Stepper class that wraps johnny-five's Stepper and adds EventEmitter capabilities.
 * Uses Proxy to automatically forward all method calls and property access
 * to the underlying J5 instance.
 */
export class Stepper extends EventEmitter {
  private _instance: five.Stepper;

  constructor(options: five.StepperOption) {
    super();
    this._instance = new five.Stepper(options);

    // Patch step method to wrap callback and emit change events
    const originalStep = this._instance.step.bind(this._instance);
    const instance = this._instance;
    const emitter = this;
    (this._instance as any).step = function (
      stepsOrOptions: number | object,
      callback?: () => void
    ) {
      const wrappedCallback = () => {
        emitter.emit("change", stepsOrOptions);
        if (callback) callback();
      };
      return originalStep(stepsOrOptions, wrappedCallback);
    };

    return createEmitterProxy(this, this._instance);
  }
}
