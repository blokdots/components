import EventEmitter from "events";
import five from "johnny-five";

type JoystickValue = {
  x: number;
  y: number;
  pressed: boolean;
};

class Joystick extends EventEmitter {
  j5Object: five.Joystick;
  invertX: boolean;
  invertY: boolean;
  previousX?: number;

  constructor({
    slot,
    board,
    invertX = false,
    invertY = false,
  }: {
    slot: string;
    board: five.Board;
    invertX?: boolean;
    invertY?: boolean;
  }) {
    super();

    this.j5Object = new five.Joystick({
      pins: [slot, `A${parseInt(slot.substring(1)) + 1}`],
      board: board,
    });

    this.invertX = invertX;
    this.invertY = invertY;

    this.previousX;

    this.j5Object.on("change", (v: { x: number; y: number }) => {
      this.emit("change", this.transformValue(v));
    });
  }

  transformValue = (value: { x: number; y: number }): JoystickValue => {
    let pressed = false;

    let x = Math.round(value.x * 100);
    let y = Math.round(value.y * 100);

    x = five.Fn.constrain(x, -50, 50);
    y = five.Fn.constrain(y, -50, 50);

    if (this.invertX) x *= -1;
    if (this.invertY) y *= -1;

    if (value.x === 1) {
      pressed = true;
      x = this.previousX || 0;
    } else {
      this.previousX = x;
    }

    return { x, y, pressed };
  };

  cleanUp() {
    this.j5Object.removeAllListeners?.();
  }
}

export default Joystick;
