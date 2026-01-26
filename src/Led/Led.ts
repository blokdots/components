import five from "johnny-five";
import EventEmitter from "events";
import { createEmitterProxy } from "../createEmitterProxy";

/**
 * Interface that declares the Led class with proper method overloads
 * Combines five.Led methods with EventEmitter capabilities
 */
export interface Led extends Omit<five.Led, "on" | "off"> {
  // Hardware control (0 arguments)
  on(): this;
  // Event listening (2 arguments)
  on(event: string | symbol, listener: (...args: any[]) => void): this;

  // Hardware control (0 arguments)
  off(): this;
  // Event listening (2 arguments)
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
 * Led class that wraps johnny-five's LED and adds EventEmitter capabilities.
 * Uses Proxy to automatically forward all method calls and property access
 * to the underlying J5 instance.
 *
 * We need to do some special handling, because both johnny-five and EventEmitter
 * define methods with the same names (e.g., on, off) for the LED. We differentiate based on
 * the number of arguments passed to these methods.
 */
export class Led extends EventEmitter {
  private _instance: five.Led;

  constructor(options: five.LedOption) {
    super();
    this._instance = new five.Led(options);

    // Patch the update method to emit change events automatically
    const originalUpdate = (this._instance as any).update.bind(this._instance);
    const instance = this._instance;
    const emitter = this;
    (this._instance as any).update = () => {
      originalUpdate();
      const value = instance.value;
      emitter.emit("change", value);
    };

    // Custom handlers for 'on' and 'off' that differentiate between
    // hardware control and event listening based on argument count
    const customHandlers = new Map<string | symbol, any>();

    // Special handling for 'on' - detect if it's hardware control or event listening
    customHandlers.set(
      "on",
      (
        proxy: any,
        target: EventEmitter,
        originalMethod: Function | undefined,
        args: any[]
      ) => {
        // If called with < 2 arguments and original method exists, it's hardware control
        if (
          args.length < 2 &&
          originalMethod &&
          typeof originalMethod === "function"
        ) {
          originalMethod.apply(this._instance, args);
          return proxy;
        }
        // Otherwise, it's EventEmitter.on(event, listener)
        if (args.length >= 2 && typeof args[1] === "function") {
          EventEmitter.prototype.on.call(target, args[0], args[1]);
        }
        return proxy;
      }
    );

    // Special handling for 'off' - detect if it's hardware control or event removal
    customHandlers.set(
      "off",
      (
        proxy: any,
        target: EventEmitter,
        originalMethod: Function | undefined,
        args: any[]
      ) => {
        // If called with 0 arguments and original method exists, it's hardware control
        if (
          args.length === 0 &&
          originalMethod &&
          typeof originalMethod === "function"
        ) {
          originalMethod.apply(this._instance, args);
          return proxy;
        }
        // Otherwise, it's EventEmitter.off(event, listener)
        if (args.length >= 2 && typeof args[1] === "function") {
          EventEmitter.prototype.off.call(target, args[0], args[1]);
        }
        return proxy;
      }
    );

    return createEmitterProxy(this, this._instance, customHandlers);
  }
}
