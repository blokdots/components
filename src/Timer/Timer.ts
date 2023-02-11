import EventEmitter from "events";

class Timer extends EventEmitter {
  value: number;
  interval?: NodeJS.Timeout;

  constructor(value = 0) {
    super();
    this.value = value;

    this.interval;
  }

  startInterval() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(() => {
      this.value++;
      this.emit("change", this.value);
    }, 1000);
  }

  start() {
    if (this.interval) {
      return;
    }

    this.startInterval();
    this.emit("start");
  }

  stop() {
    clearInterval(this.interval);
    this.interval = undefined;
    this.emit("stop");
  }

  reset() {
    this.startInterval();
    this.value = 0;
    this.emit("change", this.value);
    this.emit("reset");
  }

  setTo(value: number) {
    this.value = value;
    this.emit("change", this.value);
  }
}

export default Timer;
