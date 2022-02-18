import five from "johnny-five";

class HapticLabs {
  constructor({ slot, board, initialValue = 0 }) {
    this.value = initialValue;

    this.track1 = new five.Pin({
      pin: slot,
      type: "digital",
      board,
    });
    this.track2 = new five.Pin({
      pin: slot + 1,
      type: "digital",
      board,
    });
  }
}

export default HapticLabs;
