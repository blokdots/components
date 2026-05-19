import { Pin, I2CPinID } from '@blokdots/board-configurations';
import { default as EventEmitter } from 'events';
import { default as Board } from '../Board';
/**
 * Base options for all hardware components.
 * Components should extend this interface with their specific options.
 */
export interface ComponentBaseOptions {
    board: Board;
    id?: string;
}
/**
 * Base event map that all component events must include.
 * Each component defines its complete event map with specific event signatures.
 *
 * @typeParam T - The type of the component's value (used for 'change' event)
 *
 * @example
 * interface ButtonEventMap {
 *   change: (value: number) => void;
 *   down: () => void;
 *   up: () => void;
 *   held: () => void;
 * }
 */
export interface ComponentEventMap<T = unknown> {
    change: (value: T) => void;
    [event: string]: (...args: any[]) => void;
}
/**
 * Base class for all hardware components.
 *
 * @typeParam T - The type of the component's value
 * @typeParam E - The complete event map for this component (optional, defaults to only 'change' event)
 *
 * By default, components only emit the 'change' event. If your component emits additional
 * events, define a custom event map that extends ComponentEventMap<T>.
 *
 * Subclasses must implement:
 * - handleData(data): Process incoming data from Arduino
 *
 * @example
 * // Simple component with only 'change' event
 * class Led extends ComponentBase<number> {
 *   // No event map needed, defaults to just 'change'
 * }
 *
 * @example
 * // Component with custom events
 * interface ButtonEventMap extends ComponentEventMap<number> {
 *   change: (value: number) => void;
 *   down: () => void;
 *   up: () => void;
 *   held: () => void;
 * }
 * class Button extends ComponentBase<number, ButtonEventMap> { ... }
 */
export declare abstract class ComponentBase<T = unknown, E extends ComponentEventMap<T> = ComponentEventMap<T>> extends EventEmitter {
    protected board: Board;
    protected _value: T | undefined;
    protected componentId: Pin | I2CPinID | string;
    constructor(options: ComponentBaseOptions);
    setBoard(board: Board): void;
    /**
     * Handle incoming data from Arduino via serial protocol.
     * Called by Board when data arrives for this component's ID.
     */
    abstract handleData(data: unknown): void;
    /**
     * Get the current value of the component.
     */
    get value(): T | undefined;
    /**
     * Ensure that the board is set. Throws an error if not.
     * @throws Error if board is not set
     */
    protected ensureBoardSet(): void;
    /**
     * Register an event listener with typed events.
     */
    on<K extends keyof E>(event: K, listener: E[K]): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
    /**
     * Register a one-time event listener with typed events.
     */
    once<K extends keyof E>(event: K, listener: E[K]): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;
    /**
     * Remove an event listener with typed events.
     */
    removeListener<K extends keyof E>(event: K, listener: E[K]): this;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
    /**
     * Alias for removeListener (Node.js EventEmitter compatibility).
     */
    off<K extends keyof E>(event: K, listener: E[K]): this;
    off(event: string | symbol, listener: (...args: any[]) => void): this;
    /**
     * Remove all listeners for a specific event, or all events if no event specified.
     */
    removeAllListeners<K extends keyof E>(event?: K): this;
    removeAllListeners(event?: string | symbol): this;
    /**
     * Emit a change event with the new value.
     */
    protected emitChange(value: T): void;
    /**
     * Cleanup resources when board closes.
     * Override in subclasses to add component-specific cleanup.
     */
    cleanup(): void;
}
