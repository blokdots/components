import five from "johnny-five";

class HapticLabs {
  value: number;
  track1: five.Pin;
  track2: five.Pin;

  constructor({
    slot,
    board,
    initialValue = 0,
  }: {
    slot: number;
    board: five.Board;
    initialValue?: number;
  }) {
    this.value = initialValue;

    this.track1 = new five.Pin({
      pin: slot,
      type: "digital",
      // @ts-ignore — There is an issue with the types for the johnny-five library
      board,
    });
    this.track2 = new five.Pin({
      pin: slot + 1,
      type: "digital",
      // @ts-ignore — There is an issue with the types for the johnny-five library
      board,
    });
  }
}

export default HapticLabs;
