import { default as five } from 'johnny-five';
import { default as EventEmitter } from 'events';
/**
 * Interface that declares the Led class with proper method overloads
 * Combines five.Led methods with EventEmitter capabilities
 */
export interface Led extends Omit<five.Led, "on" | "off"> {
    on(): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
    off(): this;
    off(event: string | symbol, listener: (...args: any[]) => void): this;
    emit(event: string | symbol, ...args: any[]): boolean;
    once(event: string | symbol, listener: (...args: any[]) => void): this;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
    removeAllListeners(event?: string | symbol): this;
    setMaxListeners(n: number): this;
    getMaxListeners(): number;
    listeners(event: string | symbol): Function[];
    rawListeners(event: string | symbol): Function[];
    listenerCount(event: string | symbol): number;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
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
export declare class Led extends EventEmitter {
    private _instance;
    constructor(options: five.LedOption);
}
