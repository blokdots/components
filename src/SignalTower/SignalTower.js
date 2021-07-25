import EventEmitter from "events";

class SignalTower extends EventEmitter {
  constructor() {
    super();
    this.value = undefined;
  }

  send(message) {
    this.value = message;
    this.emit("send", this.value);
  }
}

export default SignalTower;
