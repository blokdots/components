import EventEmitter from "events";
import five, { type Board } from "johnny-five";

class Encoder extends EventEmitter {
  value: number;
  waveform: string;
  waveformTimeout?: NodeJS.Timeout;
  upButton: five.Button;
  downButton: five.Button;
  invert: boolean;

  constructor({
    pin1,
    pin2,
    board,
    initialValue = 0,
    debounce = 7,
    invert = false,
  }: {
    pin1: number | string;
    pin2: number | string;
    board?: Board;
    initialValue?: number;
    debounce?: number;
    invert?: boolean;
  }) {
    super();
    this.value = initialValue;
    this.invert = invert;

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
    const delta = this.invert ? -1 : 1;
    this.value += delta;
    this.emit("change", this.value);
    this.emit(this.invert ? "down" : "up", this.value);
  }

  countDown() {
    const delta = this.invert ? 1 : -1;
    this.value += delta;
    this.emit("change", this.value);
    this.emit(this.invert ? "up" : "down", this.value);
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
      const delta = this.invert ? -1 : 1;
      this.value = this.value + delta;
      this.emit("change", this.value);
      this.emit(this.invert ? "down" : "up", this.value);
    } else if (this.waveform === "10") {
      const delta = this.invert ? 1 : -1;
      this.value = this.value + delta;
      this.emit("change", this.value);
      this.emit(this.invert ? "up" : "down", this.value);
    }

    this.waveform = "";
  }

  cleanUp() {
    this.upButton.removeAllListeners?.();
    this.downButton.removeAllListeners?.();
  }
}

export default Encoder;
