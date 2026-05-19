import { type DigitalPin, toDigitalPin } from "@blokdots/board-configurations";
import { COMMAND_WRITE } from "../../common";
import { ComponentBase, type ComponentBaseOptions } from "../../componentBases";

export interface LEDStripValue {
  leds: { color: string }[];
}

export interface LEDStripOptions extends ComponentBaseOptions {
  pin: number | DigitalPin;
  ledCount?: number;
  colorOrder?: string;
  gamma?: number;
}

export interface LEDStripEventMap {
  change: (value: LEDStripValue) => void;
  [event: string]: (...args: any[]) => void;
}

/**
 * LEDStrip component for controlling addressable LED strips (NeoPixel/WS2812).
 * Extends ComponentBase with LED strip-specific commands.
 *
 * Protocol commands (W: = Write):
 * - W:D{pin}:COLOR:{hex}               - Set all LEDs to color
 * - W:D{pin}:PIXEL:{index}:{hex}       - Set pixel at index to color
 * - W:D{pin}:RANGE:{start}:{end}:{hex} - Set range of pixels to color
 * - W:D{pin}:BRIGHTNESS:{value}        - Set brightness (0-255)
 * - W:D{pin}:SHIFT:{direction}:{wrap}  - Shift pixels (direction: 1=forward, 0=backward)
 * - W:D{pin}:OFF                       - Turn all LEDs off
 * - W:D{pin}:SHOW                      - Commit changes to hardware
 *
 * Events emitted:
 * - 'change' (value: LEDStripValue) - When strip state changes
 */
export class LEDStrip extends ComponentBase<LEDStripValue, LEDStripEventMap> {
  protected pin: DigitalPin;
  protected ledCount: number;
  protected colorOrder: string;
  protected gamma: number;

  constructor(options: LEDStripOptions) {
    super(options);
    this.pin = toDigitalPin(options.pin);
    this.ledCount = options.ledCount ?? 30;
    this.colorOrder = options.colorOrder ?? "GRB";
    this.gamma = options.gamma ?? 2.8;

    this._value = {
      leds: Array(this.ledCount).fill({ color: "#FBD841" }),
    };

    this.board.registerComponent(this.pin, this);
  }

  handleData(data: unknown): void {
    // LEDStrip is primarily an output component.
    // If data arrives it could be a change version counter from Arduino triggers.
    // We don't update the LED state from incoming data.
  }

  // --- Hardware Control Methods ---

  /**
   * Set all LEDs to a single color.
   * @param color - Hex color string (e.g., "#ff0000")
   */
  setColor(color: string): void {
    this.ensureBoardSet();
    this.board.sendCommand(`${COMMAND_WRITE}:${this.pin}:COLOR:${color}`);

    this._value = {
      leds: Array(this.ledCount).fill({ color }),
    };
    this.emit("change", this._value);
  }

  /**
   * Set a single pixel to a color.
   * @param index - 0-based pixel index
   * @param color - Hex color string
   */
  setPixel(index: number, color: string): void {
    this.ensureBoardSet();
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.pin}:PIXEL:${index}:${color}`
    );

    if (this._value) {
      const leds = [...this._value.leds];
      if (index >= 0 && index < leds.length) {
        leds[index] = { color };
        this._value = { leds };
        this.emit("change", this._value);
      }
    }
  }

  /**
   * Set a range of pixels to a color.
   * @param start - 0-based start index
   * @param end - 0-based end index (exclusive)
   * @param color - Hex color string
   */
  setRange(start: number, end: number, color: string): void {
    this.ensureBoardSet();
    for (let i = start; i < end; i++) {
      this.board.sendCommand(
        `${COMMAND_WRITE}:${this.pin}:PIXEL:${i}:${color}`
      );
    }
    this.board.sendCommand(`${COMMAND_WRITE}:${this.pin}:SHOW`);

    if (this._value) {
      const leds = [...this._value.leds];
      for (let i = start; i < end && i < leds.length; i++) {
        leds[i] = { color };
      }
      this._value = { leds };
      this.emit("change", this._value);
    }
  }

  /**
   * Set the brightness of the strip.
   * @param value - Brightness value (0-255)
   */
  setBrightness(value: number): void {
    this.ensureBoardSet();
    this.board.sendCommand(`${COMMAND_WRITE}:${this.pin}:BRIGHTNESS:${value}`);
  }

  /**
   * Shift all pixels in a direction.
   * @param forward - true = shift forward (0 → N-1), false = backward
   * @param wrap - true = wrap shifted-out pixel to the other side
   */
  shift(forward: boolean, wrap: boolean): void {
    this.ensureBoardSet();
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.pin}:SHIFT:${forward ? 1 : 0}:${wrap ? 1 : 0}`
    );

    if (this._value) {
      const leds = [...this._value.leds];
      if (leds.length <= 1) return;

      if (forward) {
        const last = leds[leds.length - 1];
        for (let i = leds.length - 1; i > 0; i--) {
          leds[i] = leds[i - 1];
        }
        leds[0] = wrap ? last : { color: "#000000" };
      } else {
        const first = leds[0];
        for (let i = 0; i < leds.length - 1; i++) {
          leds[i] = leds[i + 1];
        }
        leds[leds.length - 1] = wrap ? first : { color: "#000000" };
      }

      this._value = { leds };
      this.emit("change", this._value);
    }
  }

  /**
   * Turn all LEDs off (no arguments) or remove an event listener.
   */
  off(): this;
  off(event: string | symbol, listener: (...args: any[]) => void): this;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  off(event?: string | symbol, listener?: (...args: any[]) => void): this {
    if (event !== undefined && listener !== undefined) {
      super.off(event, listener);
      return this;
    }
    this.ensureBoardSet();
    this.board.sendCommand(`${COMMAND_WRITE}:${this.pin}:OFF`);

    this._value = {
      leds: Array(this.ledCount).fill({ color: "#000000" }),
    };
    this.emit("change", this._value);
    return this;
  }

  /**
   * Commit buffered changes to the hardware.
   */
  show(): void {
    this.ensureBoardSet();
    this.board.sendCommand(`${COMMAND_WRITE}:${this.pin}:SHOW`);
  }

  cleanup(): void {
    this.off();
    super.cleanup();
  }
}
