import type { Pin, I2CPinID } from "@blokdots/board-configurations";
import EventEmitter from "events";

import type Board from "../Board";

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
export abstract class ComponentBase<
  T = unknown,
  E extends ComponentEventMap<T> = ComponentEventMap<T>,
> extends EventEmitter {
  protected board: Board;
  protected _value: T | undefined;
  protected componentId: Pin | I2CPinID | string;

  constructor(options: ComponentBaseOptions) {
    super();
    this.board = options.board;
    this.componentId = `${options.id}`;
  }

  setBoard(board: Board): void {
    this.board = board;
    // Note: Don't call board.registerComponent here - that creates infinite recursion.
    // The board calls setBoard from registerComponent, so registration is already done.
  }

  /**
   * Handle incoming data from Arduino via serial protocol.
   * Called by Board when data arrives for this component's ID.
   */
  abstract handleData(data: unknown): void;

  /**
   * Get the current value of the component.
   */
  get value(): T | undefined {
    return this._value;
  }

  /**
   * Ensure that the board is set. Throws an error if not.
   * @throws Error if board is not set
   */
  protected ensureBoardSet(): void {
    if (!this.board) throw new Error("Board not set");
  }

  /**
   * Register an event listener with typed events.
   */
  on<K extends keyof E>(event: K, listener: E[K]): this;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  on(event: string | symbol, listener: (...args: any[]) => void): this;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  on(event: string | symbol, listener: (...args: any[]) => void): this {
    return super.on(event, listener);
  }

  /**
   * Register a one-time event listener with typed events.
   */
  once<K extends keyof E>(event: K, listener: E[K]): this;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  once(event: string | symbol, listener: (...args: any[]) => void): this;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  once(event: string | symbol, listener: (...args: any[]) => void): this {
    return super.once(event, listener);
  }

  /**
   * Remove an event listener with typed events.
   */
  removeListener<K extends keyof E>(event: K, listener: E[K]): this;

  removeListener(
    event: string | symbol,
    listener: (...args: any[]) => void
  ): this;

  removeListener(
    event: string | symbol,
    listener: (...args: any[]) => void
  ): this {
    return super.removeListener(event, listener);
  }

  /**
   * Alias for removeListener (Node.js EventEmitter compatibility).
   */
  off<K extends keyof E>(event: K, listener: E[K]): this;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  off(event: string | symbol, listener: (...args: any[]) => void): this;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  off(event: string | symbol, listener: (...args: any[]) => void): this {
    return super.off(event, listener);
  }

  /**
   * Remove all listeners for a specific event, or all events if no event specified.
   */
  removeAllListeners<K extends keyof E>(event?: K): this;
  removeAllListeners(event?: string | symbol): this;
  removeAllListeners(event?: string | symbol): this {
    return super.removeAllListeners(event);
  }

  /**
   * Emit a change event with the new value.
   */
  protected emitChange(value: T): void {
    this._value = value;
    this.emit("change", value);
  }

  /**
   * Cleanup resources when board closes.
   * Override in subclasses to add component-specific cleanup.
   */
  cleanup(): void {
    this.removeAllListeners();
  }
}
