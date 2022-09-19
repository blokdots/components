import EventEmitter from "events";
import five from "johnny-five";

class InvertableSensor extends EventEmitter {
  constructor({ invert = false, ...componentProps }) {
    super();

    this.j5Object = new five.Sensor(componentProps);

    this.invert = invert;

    this.j5Object.on("change", (v) => {
      this.emit("change", this.transformValue(v));
    });
  }

  transformValue = (value) => {
    if (this.invert) {
      value = 1023 - value;
    }

    return value;
  };

  cleanUp() {
    if (this.j5Object && this.j5Object._events) {
      this.j5Object.removeAllListeners();
    }
  }
}

export default InvertableSensor;
