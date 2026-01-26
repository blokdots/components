import { default as five } from 'johnny-five';
import { default as EventEmitter } from 'events';
/**
 * Interface that declares the Relay class with proper method overloads
 * Combines five.Relay methods with EventEmitter capabilities
 */
export interface Relay extends five.Relay {
    on(event: string | symbol, listener: (...args: any[]) => void): this;
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
 * Relay class that wraps johnny-five's Relay and adds EventEmitter capabilities.
 * Uses Proxy to automatically forward all method calls and property access
 * to the underlying J5 instance.
 */
export declare class Relay extends EventEmitter {
    private _instance;
    constructor(options: five.RelayOption);
}
