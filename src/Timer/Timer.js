import EventEmitter from "events";

class Timer extends EventEmitter {
  constructor(value = 0) {
    super();
    this.value = value;

    this.interval = undefined;
  }

  start() {
    if (this.interval) {
      return;
    }

    this.interval = setInterval(() => {
      this.value++;
      this.emit("change", this.value);
    }, 1000);

    this.emit("start");
  }

  stop() {
    clearInterval(this.interval);
    this.interval = undefined;
    this.emit("stop");
  }

  reset() {
    this.value = 0;
    this.emit("change", this.value);
    this.emit("reset");
  }

  setTo(value) {
    this.value = value;
    this.emit("change", this.value);
  }
}

export default Timer;
