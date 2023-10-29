import EventEmitter from "events";

class Counter extends EventEmitter {
  value: number;

  constructor(initialValue = 0) {
    super();
    this.value = initialValue;
  }

  countUp() {
    this.value++;
    this.emit("change", this.value);
  }

  countDown() {
    this.value--;
    this.emit("change", this.value);
  }

  setCountTo(value: number) {
    this.value = value;
    this.emit("change", this.value);
  }
}

export default Counter;
