import font from "oled-font-5x7";
import Oled, { Pixel, Color } from "oled-js";
import qr from "qr-image";

export const OLED_WIDTH = 128;
export const OLED_HEIGHT = 64;

class OLED extends Oled {
  previousBitmap: Color[] | null;
  drawingIsBlocked: boolean;
  drawingBuffer: Array<Color | null>;

  constructor({ board, five }: { board: any; five: any }) {
    super(board, five, {
      width: 128,
      height: 64,
      address: 0x3c,
      resetPin: null,
    });

    this.previousBitmap = null;
    this.drawingIsBlocked = false;
    this.drawingBuffer = Array(OLED_WIDTH * OLED_HEIGHT).fill(null);

    this.clearDisplay = () => {
      this.drawBitmapOptimized(Array(OLED_WIDTH * OLED_HEIGHT).fill(0));
    };
  }

  drawString(string: string) {
    const buffer = addStringToBuffer(1, 1, string, 1);
    this.drawBitmapOptimized(buffer);
  }

  drawQRCodeNew(data: string, apply: boolean = true) {
    const buffer = addQrCodeToBuffer(1, 1, data, 4);

    if (apply) {
      this.drawBitmapOptimized(buffer);
    }

    return buffer;
  }

  drawValue(label: string, value: string, apply: boolean = true) {
    const buffer = addTextToBuffer([
      { x: 1, y: 1, string: label, size: 1 },
      { x: 1, y: 24, string: value, size: 2 },
    ]);

    if (apply) {
      this.drawBitmapOptimized(buffer);
    }

    return buffer;
  }

  drawBitmapOptimized(bitmap: Color[]) {
    if (this.previousBitmap) {
      // get all the pixels that changed
      const updatePixels: Pixel[] = [];
      for (let i = 0; i < bitmap.length; i++) {
        if (this.previousBitmap[i] !== bitmap[i]) {
          const [col, row] = indexToCoords(i);

          // x, y, color
          updatePixels.push([col, row, bitmap[i]]);
        }
      }

      // update them on the OLED
      this.updatePixelsBlocking(updatePixels);
      this.previousBitmap = bitmap;
    } else {
      this.drawBitmap(bitmap);
      this.previousBitmap = bitmap;
    }
  }

  updatePixelsBlocking(pixels: Pixel[]) {
    if (this.drawingIsBlocked) {
      pixels.forEach(([col, row, color]) => {
        const index = coordsToIndex(col, row);
        this.drawingBuffer[index] = color;
      });
      return;
    }

    let blockingTime = 50 + (2000 / 8096) * pixels.length;
    this.drawingIsBlocked = true;

    // console.log("blocking for", blockingTime, "ms, drawing", pixels.length);

    setTimeout(() => {
      this.drawingIsBlocked = false;

      const pixels: Pixel[] = [];
      this.drawingBuffer.forEach((color, i) => {
        if (color !== null) {
          const [col, row] = indexToCoords(i);
          pixels.push([col, row, color]);
        }
      });

      // console.log(
      //   "unbocking after",
      //   blockingTime,
      //   "ms, updating",
      //   pixels.length,
      //   "pixels"
      // );

      this.drawingBuffer = Array(OLED_WIDTH * OLED_HEIGHT).fill(null);
      if (pixels.length > 0) {
        this.updatePixelsBlocking(pixels);
      }
    }, blockingTime);

    this.drawPixel(pixels);
  }
}

/**
 * Returns a clear buffer the size of the OLED Screen
 */
export const getClearBuffer = (): Color[] =>
  Array(OLED_WIDTH * OLED_HEIGHT).fill(0);

/**
 * Adds a QR code to the buffer given, if none is given a clear one is created
 */
export const addQrCodeToBuffer = (
  x: number,
  y: number,
  data: string,
  margin = 2,
  size = 2,
  buffer: Color[] = getClearBuffer()
) => {
  const matrix = qr.matrix(data);
  const pixels = matrix.flat();
  const width = Math.sqrt(pixels.length);

  for (let xi = x; xi < x + width * size + 2 * margin; xi++) {
    for (let yi = y; yi < y + width * size + 2 * margin; yi++) {
      const index = coordsToIndex(xi, yi);
      buffer[index] = 1;
    }
  }

  for (let i = 0; i < pixels.length; i++) {
    let px = Math.floor(i % width) * size;
    let py = Math.floor(i / width) * size;

    // add margin and offset from top-left
    px += margin + x;
    py += margin + y;

    for (let xi = px; xi < px + size; xi++) {
      for (let yi = py; yi < py + size; yi++) {
        const index = coordsToIndex(xi, yi);
        buffer[index] = pixels[i] ? 0 : 1;
      }
    }
  }

  return buffer;
};

/**
 * Adds an individual character to the buffer given, if none is given a clear one is created
 */
const addCharToBuffer = (
  x: number,
  y: number,
  byteArray: number[][],
  size: number,
  buffer: Color[] = getClearBuffer()
): Color[] => {
  // loop through the byte array containing the hexes for the char
  for (let i = 0; i < byteArray.length; i += 1) {
    for (let j = 0; j < 8; j += 1) {
      // pull color out (invert the color if user chose black)
      const pixelState = byteArray[i][j];
      let xpos;
      let ypos;
      // standard font size
      if (size === 1) {
        xpos = x + i;
        ypos = y + j;
        const index = coordsToIndex(xpos, ypos);
        buffer[index] = pixelState ? 1 : 0;
      } else {
        xpos = x + i * size;
        ypos = y + j * size;

        for (let xi = 0; xi < size; xi++) {
          for (let yi = 0; yi < size; yi++) {
            const index = coordsToIndex(xpos + xi, ypos + yi);
            buffer[index] = pixelState ? 1 : 0;
          }
        }
      }
    }
  }

  return buffer;
};

// https://github.com/baltazorr/oled-i2c-bus/blob/master/oled.js

/**
 * Gets the bytes for a character from the font object
 */
const findCharBuf = (c: string) => {
  // use the lookup array as a ref to find where the current char bytes start
  let cBufPos = font.lookup.indexOf(c) * font.width;
  // slice just the current char's bytes out of the fontData array and return
  let cBuf = font.fontData.slice(
    cBufPos,
    cBufPos + font.width
  ) as Array<number>;
  return cBuf;
};

/**
 * Reads the bytes for a character and returns a 2D array of bits
 */
const readCharBytes = (byteArray: Array<number>, charHeight: number) => {
  let bitArr: number[] = [],
    bitCharArr: number[][] = [];
  // loop through each byte supplied for a char
  for (let i = 0; i < byteArray.length; i += 1) {
    // set current byte
    let byte = byteArray[i];
    // read each byte
    for (let j = 0; j < charHeight; j += 1) {
      // shift bits right until all are read
      let bit = (byte >> j) & 1;
      bitArr.push(bit);
    }
    // push to array containing flattened bit sequence
    bitCharArr.push(bitArr);
    // clear bits for next byte
    bitArr = [];
  }
  return bitCharArr;
};

const LETTER_SPACING = 2;
const LINE_SPACING = 3;

/**
 * Adds a string of characters to the buffer given, if none is given a clear one is created
 * */
export const addStringToBuffer = (
  x: number,
  y: number,
  string: string,
  size: number = 1,
  buffer: Color[] = getClearBuffer()
) => {
  const charsPerRow = Math.floor(
    ((OLED_WIDTH - x) / (font.width + LETTER_SPACING)) * size
  );

  let wordArr = string.split(" ");

  let acc = "";

  while (wordArr.length > 0) {
    let word = wordArr[0];
    let hasLinebreak = false;

    // If the word contains a newline, split it and only take the first part
    // the rest of the word gets inserted back into the array, no matter if
    // it contains more newlines — they will be handled in the next iteration
    if (word.includes("\n")) {
      const s = word.split("\n");
      hasLinebreak = true;
      word = s.shift() as string;
      wordArr.splice(1, 0, s.join("\n"));
    }

    const wordLength = word.length;

    let charsTillEndOfRow = charsPerRow - (acc.length % charsPerRow);

    if (wordLength + 1 > charsTillEndOfRow) {
      for (let j = 0; j < charsTillEndOfRow; j++) {
        acc += " ";
      }
    } else if (acc.length % charsPerRow !== 0) {
      // This word did not break into a new line and it is not the first word
      // of the line, so we need to add a space in front of it
      word = " " + word;
    }

    acc += word;

    // If this word contained a newline, we need to add spaces to the end of the line,
    // unless the word ended exactly at the end of the line (and its not a newline character itself)
    if (hasLinebreak && (word.length === 0 || acc.length % charsPerRow !== 0)) {
      charsTillEndOfRow = charsPerRow - (acc.length % charsPerRow);
      for (let j = 0; j < charsTillEndOfRow; j++) {
        acc += " ";
      }
    }

    wordArr.shift();
  }

  acc.split("").forEach((char, char_index) => {
    const charBuf = findCharBuf(char);
    const bytes = readCharBytes(charBuf, font.height);

    const lineY = Math.floor(char_index / charsPerRow);
    const charX = char_index - lineY * charsPerRow;

    let xpos = x + charX * ((font.width + LETTER_SPACING) * size);
    let ypos = y + lineY * ((font.height + LINE_SPACING) * size);

    buffer = addCharToBuffer(xpos, ypos, bytes, size, buffer);
  });

  return buffer;
};

/**
 * Adds the text to the buffer given, if none is given a clear one is created
 */
export const addTextToBuffer = (
  text: { x: number; y: number; size: number; string: string }[],
  buffer: Color[] = getClearBuffer()
) => {
  text.forEach((t) => {
    buffer = addStringToBuffer(t.x, t.y, t.string, t.size, buffer);
  });

  return buffer;
};

const indexToCoords = (i: number) => {
  const row = Math.floor(i / OLED_WIDTH);
  const col = i - OLED_WIDTH * row; // i % OLED_WIDTH?

  return [col, row];
};

const coordsToIndex = (col: number, row: number) => {
  return col + row * OLED_WIDTH;
};

export default OLED;
