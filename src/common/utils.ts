// Color utilities
export const rgbToHex = (r: number, g: number, b: number) => {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

export const hexToRgb = (hex: string): [number, number, number] | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
};

// Value utilities
/**
 * Clamp a value between min and max bounds.
 * @param value - Value to clamp
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Clamped value
 */
export const clamp = (value: number, min: number, max: number): number => {
  return Math.max(min, Math.min(max, value));
};

/**
 * Map a value between from one value to the other.
 * @param value - Value to clamp
 * @param inMin - Minimum value in
 * @param inMax - Maximum value in
 * @param outMin - Minimum value out
 * @param outMax - Maximum value out
 * @param constrain - if the value should be constrained (default = true)
 * @returns Mapped value
 */
export const mapValue = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
  constrain: boolean = true
): number => {
  const mappedValue =
    ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  if (constrain) {
    return clamp(
      mappedValue,
      Math.min(outMin, outMax),
      Math.max(outMin, outMax)
    );
  }
  return mappedValue;
};

/**
 * Invert a value relative to a maximum.
 * @param value - Value to invert
 * @param max - Maximum value for inversion
 * @returns Inverted value
 */
export const invertValue = (value: number, max: number): number => {
  return max - value;
};

/**
 * @internal
 * Percent-encode a string for use in the blokdots serial protocol.
 */
export const encodeProtocolString = (input: string): string => {
  const s = input ?? "";

  // Encode as UTF-8 bytes
  const utf8 = new TextEncoder().encode(s);
  let out = "";

  for (const b of utf8) {
    const ch = String.fromCharCode(b);

    const isAZ = b >= 0x41 && b <= 0x5a;
    const isaz = b >= 0x61 && b <= 0x7a;
    const is09 = b >= 0x30 && b <= 0x39;
    const isUnreserved =
      isAZ ||
      isaz ||
      is09 ||
      ch === "-" ||
      ch === "_" ||
      ch === "." ||
      ch === "~";

    if (isUnreserved) {
      out += ch;
    } else {
      out += "%" + b.toString(16).toUpperCase().padStart(2, "0");
    }
  }

  return out;
};

const utils = {
  rgbToHex,
  hexToRgb,
  clamp,
  invertValue,
  mapValue,
  encodeProtocolString,
};

export default utils;
