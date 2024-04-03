import EventEmitter from "events";

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

  start() {
    this.emit("start", this.value / 1000);

    if (this.interval) {
      return;
    }

    this.startInterval();
  }

  stop() {
    clearInterval(this.interval);
    this.interval = undefined;
    this.emit("stop", this.value / 1000);
  }

  reset() {
    this.startInterval();
    this.value = 0;
    this.emit("change", this.value / 1000);
    this.emit("reset", 0);
  }

  setTo(value: number) {
    this.value = value * 1000;
    this.emit("change", this.value / 1000);
    this.emit("set", this.value / 1000);
  }
}

export default Timer;
