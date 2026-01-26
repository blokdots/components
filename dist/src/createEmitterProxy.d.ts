import { default as EventEmitter } from 'events';
/**
 * Custom handler function that receives the proxy, target, original method,
 * and arguments, and returns the result
 */
type CustomHandler = (proxy: any, target: EventEmitter, originalMethod: Function | undefined, args: any[]) => any;
/**
 * Creates a Proxy that combines EventEmitter capabilities with a johnny-five component.
 * The proxy automatically forwards all method calls and property access to the underlying
 * J5 instance, while preserving EventEmitter functionality.
 *
 * @param target - The EventEmitter wrapper instance
 * @param j5Instance - The underlying johnny-five component instance
 * @param customHandlers - Optional map of method names to custom handler functions
 *                         for special cases (e.g., Led's on/off that need to differentiate
 *                         between hardware control and event listening)
 * @returns A proxy that combines both EventEmitter and J5 functionality
 */
export declare function createEmitterProxy<T extends EventEmitter, J>(target: T, j5Instance: J, customHandlers?: Map<string | symbol, CustomHandler>): T & Omit<J, keyof EventEmitter>;
export {};
