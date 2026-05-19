import {
  BAUD_RATE,
  COMMAND_WRITE,
  OLED_HEIGHT,
  OLED_WIDTH,
  encodeProtocolString,
} from "../../common";
import {
  I2cComponentBase,
  type I2cComponentBaseOptions,
} from "../../componentBases";

const OLED_PIXELS = OLED_WIDTH * OLED_HEIGHT;
const OLED_PACKED_BYTES = (OLED_WIDTH * OLED_HEIGHT) / 8; // 1024

// ~25 chars per BYTE command, 10 bits per char at BAUD_RATE
const MS_PER_BYTE_CMD = Math.ceil((25 * 10 * 1000) / BAUD_RATE);

export interface OLEDValue {
  power: boolean;
  inverted: boolean;
  type: "string" | "bitmap" | "splash";
  string?: string;
  bitmap?: Array<0 | 1>;
}

const DEFAULT_OLED_VALUE: OLEDValue = {
  power: true,
  inverted: false,
  type: "string",
  string: "blokdots",
};

export interface OLEDOptions extends I2cComponentBaseOptions {
  isRotated?: boolean;
  isMirrored?: boolean;
}

export interface OLEDEventMap {
  change: (value: OLEDValue) => void;
  [event: string]: (...args: any[]) => void;
}

/**
 * OLED display component for drawing text and monochrome graphics on a 128×64 pixel screen.
 */
export class OLED extends I2cComponentBase<OLEDValue, OLEDEventMap> {
  isRotated: boolean;
  isMirrored: boolean;

  private previousPacked: Uint8Array | null = null;

  private drawingIsBlocked = false;
  private drawingBuffer: Array<number | null>;

  private get valueSafe(): OLEDValue {
    return this._value ?? DEFAULT_OLED_VALUE;
  }

  constructor(options: OLEDOptions) {
    super(options);
    this.isRotated = options.isRotated ?? false;
    this.isMirrored = options.isMirrored ?? false;

    this._value = DEFAULT_OLED_VALUE;
    this.drawingBuffer = new Array(OLED_PACKED_BYTES).fill(null);
  }

  handleData(_data: unknown): void {
    // OLED is output-only
  }

  private send(cmd: string) {
    // One command per serial line (SerialProtocol expects line-based frames)
    this.board.sendCommand(`${COMMAND_WRITE}:${this.componentId}:${cmd}`);
  }

  private resetBitmapState() {
    // Reset bitmap drawing state so a subsequent bitmap draw starts fresh
    this.drawingIsBlocked = false;
    this.drawingBuffer = new Array(OLED_PACKED_BYTES).fill(null);
  }

  /** Draw a text string on the display. Clears any active bitmap. */
  drawString(text: string): void {
    this.ensureBoardSet();
    this.resetBitmapState();

    // Encode string param
    this.send(`DRAWSTRING:${encodeProtocolString(text ?? "")}`);

    this.previousPacked = null;
    this._value = {
      ...this.valueSafe,
      type: "string",
      string: text,
      bitmap: undefined,
    };
    this.emit("change", this._value);
  }

  /** Draw a label and a value on two lines. Clears any active bitmap. */
  drawValue(label: string, value: string): void {
    this.ensureBoardSet();
    this.resetBitmapState();

    // Encode each string param independently
    this.send(
      `DRAWVALUE:${encodeProtocolString(label ?? "")}:${encodeProtocolString(value ?? "")}`
    );

    this.previousPacked = null;
    this._value = {
      ...this.valueSafe,
      type: "string",
      string: `${label}\n${value}`,
      bitmap: undefined,
    };
    this.emit("change", this._value);
  }

  /** Draw a 128×64 monochrome bitmap using a diff-based transfer to minimise serial traffic. */
  drawBitmapOptimized(bitmap: Array<0 | 1>): void {
    this.ensureBoardSet();
    if (!Array.isArray(bitmap) || bitmap.length < OLED_PIXELS) {
      // Can happen during transitional states (e.g., empty bitmap before asset loads)
      return;
    }

    const packed = packBitmapToPages(bitmap);

    if (!this.previousPacked) {
      // Optimized initial draw: clear display, then send only non-zero bytes
      // This is much faster than sending all 1024 bytes
      this.send("CLEAR_BITMAP");

      // Small delay to allow clear to complete before sending pixels
      setTimeout(() => {
        const nonZeroBytes: Array<{ idx: number; value: number }> = [];
        for (let i = 0; i < OLED_PACKED_BYTES; i++) {
          if (packed[i] !== 0) {
            nonZeroBytes.push({ idx: i, value: packed[i] });
          }
        }

        this.updateBytesBlocking(nonZeroBytes);
        this.previousPacked = packed;
      }, 30); // 30ms delay for I2C clear operation
    } else {
      const prev = this.previousPacked;
      const changed: Array<{ idx: number; value: number }> = [];

      for (let i = 0; i < OLED_PACKED_BYTES; i++) {
        const v = packed[i];
        if (v !== prev[i]) changed.push({ idx: i, value: v });
      }

      this.updateBytesBlocking(changed);
      this.previousPacked = packed;
    }

    this._value = {
      ...this.valueSafe,
      type: "bitmap",
      bitmap,
      string: undefined,
    };
    this.emit("change", this._value);
  }

  /** Clear the display. */
  clearDisplay(): void {
    this.ensureBoardSet();
    this.send("CLEAR");

    this.previousPacked = null;
    this._value = {
      ...this.valueSafe,
      type: "bitmap",
      bitmap: undefined,
      string: undefined,
    };
    this.emit("change", this._value);
  }

  /** Turn the display on. */
  turnOnDisplay(): void {
    this.ensureBoardSet();
    this.send("POWERON");
    this._value = { ...this.valueSafe, power: true };
    this.emit("change", this._value);
  }

  /** Turn the display off. */
  turnOffDisplay(): void {
    this.ensureBoardSet();
    this.send("POWEROFF");
    this._value = { ...this.valueSafe, power: false };
    this.emit("change", this._value);
  }

  /** Invert the display colours (white ↔ black). */
  invertDisplay(invert: boolean): void {
    this.ensureBoardSet();
    this.send(`INVERT:${invert ? 1 : 0}`);
    this._value = { ...this.valueSafe, inverted: invert };
    this.emit("change", this._value);
  }

  /** Toggle 180° rotation of the display content. */
  rotate(): void {
    this.isRotated = !this.isRotated;
    this.redraw();
  }

  /** Toggle horizontal mirroring of the display content. */
  mirror(): void {
    this.isMirrored = !this.isMirrored;
    this.redraw();
  }

  cleanup(): void {
    this.clearDisplay();
    this.previousPacked = null;
    this.drawingIsBlocked = false;
    this.drawingBuffer = new Array(OLED_PACKED_BYTES).fill(null);
    super.cleanup();
  }

  private redraw(): void {
    if (this._value?.type === "bitmap" && this._value.bitmap) {
      const bmp = this._value.bitmap;
      this.previousPacked = null;
      this.drawBitmapOptimized(bmp);
      return;
    }

    if (this._value?.type === "string") {
      this.previousPacked = null;
      this.drawString(this._value.string ?? "");
      return;
    }

    this.previousPacked = null;
  }

  private updateBytesBlocking(
    bytes: Array<{ idx: number; value: number }>
  ): void {
    if (bytes.length === 0) return;

    if (this.drawingIsBlocked) {
      for (const { idx, value } of bytes) this.drawingBuffer[idx] = value;
      return;
    }

    // ~4ms per BYTE command at 57600 baud (~25 chars/line * 10 bits / 57600)
    const blockingTime = 50 + MS_PER_BYTE_CMD * bytes.length;
    this.drawingIsBlocked = true;

    setTimeout(() => {
      this.drawingIsBlocked = false;

      const queued: Array<{ idx: number; value: number }> = [];
      for (let i = 0; i < this.drawingBuffer.length; i++) {
        const v = this.drawingBuffer[i];
        if (v !== null) queued.push({ idx: i, value: v });
      }

      this.drawingBuffer = new Array(OLED_PACKED_BYTES).fill(null);

      if (queued.length > 0) this.updateBytesBlocking(queued);
    }, blockingTime);

    this.sendBytes(bytes);
  }

  private sendBytes(bytes: Array<{ idx: number; value: number }>): void {
    for (const { idx, value } of bytes) {
      const page = Math.floor(idx / OLED_WIDTH);
      const col = idx % OLED_WIDTH;

      this.send(`BYTE:${page}:${col}:${value}`);
    }
  }
}

function packBitmapToPages(bitmap: Array<0 | 1>): Uint8Array {
  const out = new Uint8Array(OLED_PACKED_BYTES);

  for (let y = 0; y < OLED_HEIGHT; y++) {
    const page = y >> 3;
    const bit = 1 << (y & 7);
    const rowOffset = y * OLED_WIDTH;

    for (let x = 0; x < OLED_WIDTH; x++) {
      if (bitmap[rowOffset + x]) out[page * OLED_WIDTH + x] |= bit;
    }
  }

  return out;
}
