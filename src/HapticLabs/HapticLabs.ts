import five from "johnny-five";

class HapticLabs {
  value: {
    track1: 1 | 0;
    track2: 1 | 0;
  };
  track1: five.Pin;
  track2: five.Pin;

  constructor({
    slot,
    board,
    initialValue = {
      track1: 0,
      track2: 0,
    },
  }: {
    slot: number;
    board: five.Board;
    initialValue?: {
      track1: 1 | 0;
      track2: 1 | 0;
    };
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

  playTrack1() {
    this.track1.high();
    this.value.track1 = 1;
  }

  stopTrack1() {
    this.track1.low();
    this.value.track1 = 0;
  }

  playTrack2() {
    this.track2.high();
    this.value.track2 = 1;
  }

  stopTrack2() {
    this.track2.low();
    this.value.track2 = 0;
  }
}

export default HapticLabs;
