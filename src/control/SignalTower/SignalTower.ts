import EventEmitter from "events";

export interface SignalTowerEventMap {
  send: (message: string) => void;
}

/**
 * Signal Tower is a software abstraction for broadcasting and receiving named events within a project.
 * Use it to send a message from one part of your project and react to it from another.
 */
class SignalTower extends EventEmitter {
  value?: string;

  constructor() {
    super();
  }

  /** Broadcast a message to any listeners on this Signal Tower. */
  send(message: string) {
    this.value = message;
    this.emit("send", this.value);
  }
}

export default SignalTower;
