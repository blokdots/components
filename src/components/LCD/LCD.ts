import { COMMAND_WRITE, encodeProtocolString } from "../../common";
import {
  I2cComponentBase,
  type I2cComponentBaseOptions,
} from "../../componentBases";

export interface LCDValue {
  string: string;
  backgroundColor: string;
}

const DEFAULT_LCD_VALUE: LCDValue = {
  string: "blokdots",
  backgroundColor: "#F39C12",
};

export type LCDOptions = I2cComponentBaseOptions;

export interface LCDEventMap {
  change: (value: LCDValue) => void;
  [event: string]: (...args: any[]) => void;
}

/**
 * LCD component for controlling a 16x2 I2C character display with RGB backlight
 * (Grove LCD RGB Backlight).
 * Extends ComponentBase as a complex output component with custom serial commands.
 *
 * Protocol commands (W: = Write):
 * - W:{id}:PRINT:{text}          - Print text on the display
 * - W:{id}:CLEAR                 - Clear the display
 * - W:{id}:SETCURSOR:{col}:{row} - Set cursor position
 * - W:{id}:SETRGB:{r}:{g}:{b}   - Set backlight color (RGB)
 * - W:{id}:BGCOLOR:{hex}         - Set backlight color (hex string)
 * - W:{id}:BACKLIGHTOFF          - Turn off backlight
 *
 * Events emitted:
 * - 'change' (value: LCDValue) - When display state changes
 */
export class LCD extends I2cComponentBase<LCDValue, LCDEventMap> {
  private get valueSafe(): LCDValue {
    return this._value ?? DEFAULT_LCD_VALUE;
  }

  constructor(options: LCDOptions) {
    super(options);
    this._value = DEFAULT_LCD_VALUE;
  }

  handleData(_data: unknown): void {
    // LCD is an output-only component, no incoming data expected
  }

  // --- Hardware Control Methods ---

  /**
   * Draw text on the display using the shadow-diff streaming protocol.
   * Only changed character cells are rewritten, avoiding flicker.
   * Long text is automatically chunked by the serial protocol layer.
   */
  drawString(text: string): void {
    this.ensureBoardSet();
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.componentId}:DRAWSTRING:${encodeProtocolString(text ?? "")}`
    );

    this._value = { ...this.valueSafe, string: text };
    this.emit("change", this._value);
  }

  /** @deprecated Use drawString() instead. Kept for backwards compatibility. */
  print(text: string): void {
    this.drawString(text);
  }

  /**
   * Clear the display.
   */
  clear(): void {
    this.ensureBoardSet();
    this.board.sendCommand(`${COMMAND_WRITE}:${this.componentId}:CLEAR`);

    this._value = { ...this.valueSafe, string: "" };
    this.emit("change", this._value);
  }

  /**
   * Set the cursor position.
   * @param col - Column (0-based, max 15 for 16-column display)
   * @param row - Row (0 or 1 for 2-row display)
   */
  setCursor(col: number, row: number): void {
    this.ensureBoardSet();
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.componentId}:SETCURSOR:${col}:${row}`
    );
  }

  /**
   * Set backlight color using RGB values.
   */
  setRGB(r: number, g: number, b: number): void {
    this.ensureBoardSet();
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.componentId}:SETRGB:${r}:${g}:${b}`
    );

    const hex =
      "#" +
      [r, g, b]
        .map((v) => Math.max(0, Math.min(255, v)).toString(16).padStart(2, "0"))
        .join("");

    this._value = { ...this.valueSafe, backgroundColor: hex };
    this.emit("change", this._value);
  }

  /**
   * Set backlight color using a hex string.
   * @param hex - Hex color string (e.g., "#F39C12")
   */
  bgColor(hex: string): void {
    this.ensureBoardSet();
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.componentId}:BGCOLOR:${hex}`
    );

    this._value = { ...this.valueSafe, backgroundColor: hex };
    this.emit("change", this._value);
  }

  /**
   * Turn off the backlight.
   */
  backlightOff(): void {
    this.ensureBoardSet();
    this.board.sendCommand(`${COMMAND_WRITE}:${this.componentId}:BACKLIGHTOFF`);

    this._value = { ...this.valueSafe, backgroundColor: "#000000" };
    this.emit("change", this._value);
  }

  cleanup(): void {
    this.clear();
    this.backlightOff();
    super.cleanup();
  }
}
