import five from "johnny-five";
import EventEmitter from "events";
import { createEmitterProxy } from "../createEmitterProxy";

/**
 * Interface that declares the Relay class with proper method overloads
 * Combines five.Relay methods with EventEmitter capabilities
 */
export interface Relay extends five.Relay {
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
 * Relay class that wraps johnny-five's Relay and adds EventEmitter capabilities.
 * Uses Proxy to automatically forward all method calls and property access
 * to the underlying J5 instance.
 */
export class Relay extends EventEmitter {
  private _instance: five.Relay;

  constructor(options: five.RelayOption) {
    super();
    this._instance = new five.Relay(options);

    // Patch open method to emit change events
    const originalOpen = this._instance.open.bind(this._instance);
    const emitter = this;
    this._instance.open = function () {
      originalOpen();
      emitter.emit("change", 1);
      return this;
    };

    // Patch close method to emit change events
    const originalClose = this._instance.close.bind(this._instance);
    this._instance.close = function () {
      originalClose();
      emitter.emit("change", 0);
      return this;
    };

    return createEmitterProxy(this, this._instance);
  }
}
