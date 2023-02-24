import EventEmitter from "events";
import five, { Board } from "johnny-five";

class Encoder extends EventEmitter {
  value: number;
  waveform: string;
  waveformTimeout?: NodeJS.Timeout;
  upButton: five.Button;
  downButton: five.Button;

  constructor({
    slot,
    board,
    initialValue = 0,
    debounce = 7,
  }: {
    slot: number;
    board: Board;
    initialValue?: number;
    debounce?: number;
  }) {
    super();
    this.value = initialValue;

    this.waveform = "";
    this.waveformTimeout;

    this.upButton = new five.Button({
      pin: slot,
      debounce,
      board,
    });
    this.downButton = new five.Button({
      pin: slot + 1,
      debounce,
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

  cleanUp() {
    this.upButton.removeAllListeners?.();
    this.downButton.removeAllListeners?.();
  }
}

export default Encoder;
