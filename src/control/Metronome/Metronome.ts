import EventEmitter from "events";

export interface MetronomeEventMap {
  start: (state: { timestamp: number; frequency: number }) => void;
  tick: (state: { timestamp: number; frequency: number }) => void;
  stop: () => void;
}

/**
 * Metronome that emits a tick event at a configurable frequency (in milliseconds).
 */
class Metronome extends EventEmitter {
  frequency: number;
  interval?: NodeJS.Timeout;

  constructor(frequency = 1000) {
    super();
    this.frequency = frequency;
  }

  /**
   * Start the tick interval
   */
  private startTickInterval(): void {
    this.interval = setInterval(() => {
      this.emit("tick", {
        timestamp: Date.now(),
        frequency: this.frequency,
      });
    }, this.frequency);
  }

  /** Start the metronome. Emits a `tick` event immediately and then at every interval. */
  start() {
    if (this.interval) {
      return;
    }

    this.emit("start", {
      timestamp: Date.now(),
      frequency: this.frequency,
    });

    this.emit("tick", {
      timestamp: Date.now(),
      frequency: this.frequency,
    });

    this.startTickInterval();
  }

  /** Stop the metronome. */
  stop() {
    clearInterval(this.interval);
    this.interval = undefined;
    this.emit("stop");
  }

  /** Update the tick interval in milliseconds. Takes effect immediately if already running. */
  setFrequency(frequency: number) {
    if (this.frequency !== frequency) {
      this.frequency = frequency;

      // Restart interval with new frequency if running
      if (this.interval) {
        clearInterval(this.interval);
        this.startTickInterval();
      }
    }
  }
}

export default Metronome;
