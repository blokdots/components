import five from "johnny-five";

class HapticLabs {
  value: {
    pin1: 1 | 0;
    pin2: 1 | 0;
  };
  pin1: five.Pin;
  pin2: five.Pin;

  constructor({
    slot,
    board,
    initialValue = {
      pin1: 0,
      pin2: 0,
    },
  }: {
    slot: number;
    board: five.Board;
    initialValue?: {
      pin1: 1 | 0;
      pin2: 1 | 0;
    };
  }) {
    this.value = initialValue;

    this.pin1 = new five.Pin({
      pin: slot,
      type: "digital",
      // @ts-ignore — There is an issue with the types for the johnny-five library
      board,
    });
    this.pin2 = new five.Pin({
      pin: slot + 1,
      type: "digital",
      // @ts-ignore — There is an issue with the types for the johnny-five library
      board,
    });
  }

  playTrack1() {
    this.pin1.high();
    this.value.pin1 = 1;
  }

  stopTrack1() {
    this.pin1.low();
    this.value.pin1 = 0;
  }

  playTrack2() {
    this.pin2.high();
    this.value.pin2 = 1;
  }

  stopTrack2() {
    this.pin2.low();
    this.value.pin2 = 0;
  }
}

export default HapticLabs;
