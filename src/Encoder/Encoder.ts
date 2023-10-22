import EventEmitter from "events";
import five, { Board } from "johnny-five";

class Encoder extends EventEmitter {
  value: number;
  waveform: string;
  waveformTimeout?: NodeJS.Timeout;
  upButton: five.Button;
  downButton: five.Button;

  constructor({
    pin1,
    pin2,
    board,
    initialValue = 0,
    debounce = 7,
  }: {
    pin1: number | string;
    pin2: number | string;
    board?: Board;
    initialValue?: number;
    debounce?: number;
  }) {
    super();
    this.value = initialValue;

    this.waveform = "";
    this.waveformTimeout;

    this.upButton = new five.Button({
      pin: pin1,
      debounce,
      board,
    });
    this.downButton = new five.Button({
      pin: pin2,
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

  countUp() {
    this.value++;
    this.emit("change", this.value);
    this.emit("up", this.value);
  }

  countDown() {
    this.value--;
    this.emit("change", this.value);
    this.emit("down", this.value);
  }

  setCountTo(value: number) {
    this.value = value;
    this.emit("change", this.value);
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
