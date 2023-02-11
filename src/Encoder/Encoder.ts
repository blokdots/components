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
      // @ts-ignore — There is an issue with the types for the johnny-five library
      debounce,
      board,
    });
    this.downButton = new five.Button({
      pin: slot + 1,
      // @ts-ignore — There is an issue with the types for the johnny-five library
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
    // @ts-ignore — There is an issue with the types for the johnny-five library
    if (this.upButton && this.upButton._events) {
      // @ts-ignore — There is an issue with the types for the johnny-five library
      this.upButton.removeAllListeners();
    }

    // @ts-ignore — There is an issue with the types for the johnny-five library
    if (this.downButton && this.downButton._events) {
      // @ts-ignore — There is an issue with the types for the johnny-five library
      this.downButton.removeAllListeners();
    }
  }
}

export default Encoder;
