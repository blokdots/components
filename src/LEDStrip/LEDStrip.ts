import pixel from "node-pixel";

class LEDStrip extends pixel.Strip {
  constructor({
    pin,
    board,
    ledCount = 30,
  }: {
    pin: number;
    board: any;
    ledCount?: number;
  }) {
    super({
      board: board,
      controller: "FIRMATA",
      strips: [{ pin: pin, length: ledCount }], // this is preferred form for definition
      gamma: 2.8, // set to a gamma that works nicely for WS2812
    });
  }
}

export default LEDStrip;
