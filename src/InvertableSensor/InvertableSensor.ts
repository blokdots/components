import EventEmitter from "events";
import five from "johnny-five";

class InvertableSensor extends EventEmitter {
  j5Object: five.Sensor;
  invert: boolean;

  constructor({
    invert = false,
    pin,
    ...componentProps
  }: {
    invert?: boolean;
    pin: string | number;
  }) {
    super();

    this.j5Object = new five.Sensor({ pin, ...componentProps });

    this.invert = invert;

    this.j5Object.on("change", () => {
      this.emit("change", this.transformValue(this.j5Object.value));
    });
  }

  transformValue = (value: number) => {
    if (this.invert) {
      value = 1023 - value;
    }

    return value;
  };

  cleanUp() {
    // if (this.j5Object && this.j5Object._events) {
    //   this.j5Object.removeAllListeners();
    // }
  }
}

export default InvertableSensor;
