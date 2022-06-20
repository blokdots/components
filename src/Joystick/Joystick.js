import EventEmitter from "events";
import five from "johnny-five";

class Joystick extends EventEmitter {
  constructor({ slot, board, invertX = false, invertY = false }) {
    super();

    this.j5Object = new five.Joystick({
      pins: [slot, `A${parseInt(slot.substring(1)) + 1}`],
      board: board,
    });

    this.invertX = invertX;
    this.invertY = invertY;

    this.previousX;

    this.j5Object.on("change", (v) => {
      this.emit("change", this.transformValue(v));
    });
  }

  transformValue = (value) => {
    let pressed = 0;

    let x = Math.round(value.x * 100);
    let y = Math.round(value.y * 100);

    x = five.Fn.constrain(x, -50, 50);
    y = five.Fn.constrain(y, -50, 50);

    if (this.invertX) x *= -1;
    if (this.invertY) y *= -1;

    if (value.x === 1) {
      pressed = true;
      x = this.previousX;
    } else {
      this.previousX = x;
    }

    return { x, y, pressed };
  };

  cleanUp() {
    if (this.j5Object && this.j5Object._events) {
      this.j5Object.removeAllListeners();
    }
  }
}

export default Joystick;
