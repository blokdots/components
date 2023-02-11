import EventEmitter from "events";

class Metronome extends EventEmitter {
  frequency: number;
  interval?: NodeJS.Timeout;

  constructor(frequency = 1000) {
    super();
    this.frequency = frequency;
  }

  start() {
    if (this.interval) {
      return;
    }

    this.emit("start", {
      timestamp: Date.now(),
      frequency: this.frequency,
    });

    this.interval = setInterval(() => {
      this.emit("tick", {
        timestamp: Date.now(),
        frequency: this.frequency,
      });
    }, this.frequency);
  }

  stop() {
    clearInterval(this.interval);
    this.interval = undefined;
    this.emit("stop");
  }

  setFrequency(frequency: number) {
    if (this.frequency !== frequency) {
      this.frequency = frequency;

      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.emit("tick", {
          timestamp: Date.now(),
          frequency: this.frequency,
        });
      }, this.frequency);
    }
  }
}

export default Metronome;
