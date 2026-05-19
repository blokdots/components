import EventEmitter from "events";

export interface CounterEventMap {
  change: (value: number) => void;
}

/**
 * Counter that tracks an integer value, incremented or decremented by triggers.
 */
class Counter extends EventEmitter {
  value: number;

  constructor(initialValue = 0) {
    super();
    this.value = initialValue;
  }

  /** Increment the counter by 1. */
  countUp() {
    this.value++;
    this.emit("change", this.value);
  }

  /** Decrement the counter by 1. */
  countDown() {
    this.value--;
    this.emit("change", this.value);
  }

  /** Set the counter to a specific value. */
  setCountTo(value: number) {
    this.value = value;
    this.emit("change", this.value);
  }
}

export default Counter;
