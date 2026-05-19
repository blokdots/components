import EventEmitter from "events";

export interface TimerEventMap {
  start: (seconds: number) => void;
  tick: (seconds: number) => void;
  change: (seconds: number) => void;
  stop: (seconds: number) => void;
  reset: (seconds: number) => void;
  set: (seconds: number) => void;
}

/**
 * Timer that counts elapsed time in seconds and emits tick events at a 50 ms resolution.
 */
class Timer extends EventEmitter {
  value: number;
  interval?: NodeJS.Timeout;

  constructor(value = 0) {
    super();
    // this.value is in milliseconds
    this.value = value * 1000;

    this.interval;
  }

  startInterval() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(() => {
      this.value += 50;
      this.emit("change", this.value / 1000);
      this.emit("tick", this.value / 1000);
    }, 50);
  }

  /** Start counting elapsed time. Has no effect if already running. */
  start() {
    this.emit("start", this.value / 1000);

    if (this.interval) {
      return;
    }

    this.startInterval();
  }

  /** Stop counting elapsed time. */
  stop() {
    clearInterval(this.interval);
    this.interval = undefined;
    this.emit("stop", this.value / 1000);
  }

  /** Reset elapsed time to zero. Restarts the interval if the timer was running. */
  reset() {
    this.value = 0;
    this.emit("change", this.value / 1000);
    this.emit("reset", 0);
    // Only restart interval if it was already running
    if (this.interval) {
      this.startInterval();
    }
  }

  /** Set elapsed time to a specific value in seconds. */
  setTo(value: number) {
    this.value = value * 1000;
    this.emit("change", this.value / 1000);
    this.emit("set", this.value / 1000);
  }
}

export default Timer;
