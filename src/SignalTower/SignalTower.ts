import EventEmitter from "events";

class SignalTower extends EventEmitter {
  value?: string;

  constructor() {
    super();
    this.value = undefined;
  }

  send(message: string) {
    this.value = message;
    this.emit("send", this.value);
  }
}

export default SignalTower;
