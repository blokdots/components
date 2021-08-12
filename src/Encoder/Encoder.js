import EventEmitter from "events";
import five from "johnny-five";

class Encoder extends EventEmitter {
  constructor({ slot, board, initialValue = 0 }) {
    super();
    this.value = initialValue;

    this.waveform = "";
    this.waveformTimeout;

    this.upButton = new five.Button({
      pin: slot,
      holdtime: 500,
      board,
    });
    this.downButton = new five.Button({
      pin: slot + 1,
      holdtime: 500,
      board,
    });

    this.upButton.on("up", () => {
      this.waveform += "1";
      this.handleWaveform();
    });

    this.downButton.on("up", () => {
      this.waveform += "0";
      this.handleWaveform();
    });
  }

  handleWaveform() {
    if (this.waveform.length < 2) {
      this.waveformTimeout = setTimeout(() => {
        this.waveform = "";
      }, 100);
      return;
    }

    if (this.waveformTimeout) {
      clearTimeout(this.waveformTimeout);
    }

    if (this.waveform === "01") {
      this.value = this.value + 1;
      this.emit("change", this.value);
      this.emit("up", this.value);
    } else if (this.waveform === "10") {
      this.value = this.value - 1;
      this.emit("change", this.value);
      this.emit("down", this.value);
    }

    this.waveform = "";
  }
}

export default Encoder;
