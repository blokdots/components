import five from "johnny-five";
import pixel from "node-pixel";

class LEDStrip extends pixel.Strip {
  constructor({
    pin,
    board,
    ledCount = 30,
    gamma = 2.8,
    colorOrder = "GRB",
  }: {
    pin: number;
    board: five.Board;
    ledCount?: number;
    gamma?: number;
    colorOrder?: "GRB" | "RGB" | "BRG";
  }) {
    super({
      board: board,
      controller: "FIRMATA",
      strips: [{ pin: pin, length: ledCount }], // this is preferred form for definition
      gamma: gamma, // set to a gamma that works nicely for WS2812
      color_order: pixel.COLOR_ORDER[colorOrder],
    });
  }
}

export default LEDStrip;
