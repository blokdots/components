import EventEmitter from "events";

class SignalTower extends EventEmitter {
  value: any;

  constructor() {
    super();
    this.value = undefined;
  }

  send(message: any) {
    this.value = message;
    this.emit("send", this.value);
  }
}

export default SignalTower;
