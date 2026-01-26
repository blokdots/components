import EventEmitter from "events";

/**
 * EventEmitter method names that should be handled by the EventEmitter instance
 * rather than forwarded to the johnny-five instance
 */
const EMITTER_METHODS = new Set([
  "on",
  "off",
  "once",
  "emit",
  "removeListener",
  "removeAllListeners",
  "setMaxListeners",
  "getMaxListeners",
  "listeners",
  "rawListeners",
  "listenerCount",
  "prependListener",
  "prependOnceListener",
  "eventNames",
  "addListener",
]);

/**
 * Custom handler function that receives the proxy, target, original method,
 * and arguments, and returns the result
 */
type CustomHandler = (
  proxy: any,
  target: EventEmitter,
  originalMethod: Function | undefined,
  args: any[]
) => any;

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
export function createEmitterProxy<T extends EventEmitter, J>(
  target: T,
  j5Instance: J,
  customHandlers?: Map<string | symbol, CustomHandler>
): T & Omit<J, keyof EventEmitter> {
  let proxy: any;

  proxy = new Proxy(target, {
    get(target, prop: string | symbol) {
      // Check if there's a custom handler for this property
      if (customHandlers?.has(prop)) {
        const handler = customHandlers.get(prop)!;
        const originalMethod = (j5Instance as any)[prop];
        return function (...args: any[]) {
          return handler(proxy, target, originalMethod, args);
        };
      }

      // Handle EventEmitter methods from the class instance
      if (EMITTER_METHODS.has(prop as string) && prop in target) {
        const value = (target as any)[prop];
        if (typeof value === "function") {
          return function (...args: any[]) {
            const result = value.apply(target, args);
            return result === target ? proxy : result;
          };
        }
        return value;
      }

      // For all other properties/methods, forward to the J5 instance
      const value = (j5Instance as any)[prop];

      // If it's a function, bind it to the J5 instance
      if (typeof value === "function") {
        return function (...args: any[]) {
          const result = value.apply(j5Instance, args);
          // If the method returns the instance (for chaining), return the proxy instead
          return result === j5Instance ? proxy : result;
        };
      }

      return value;
    },

    set(target, prop: string | symbol, value: any) {
      // If it's an EventEmitter property, set it on the target
      if (prop in target) {
        (target as any)[prop] = value;
      } else {
        // Otherwise set it on the J5 instance
        (j5Instance as any)[prop] = value;
      }
      return true;
    },
  });

  return proxy as T & Omit<J, keyof EventEmitter>;
}
