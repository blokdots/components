export declare const rgbToHex: (r: number, g: number, b: number) => string;
export declare const hexToRgb: (hex: string) => [number, number, number] | null;
/**
 * Clamp a value between min and max bounds.
 * @param value - Value to clamp
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Clamped value
 */
export declare const clamp: (value: number, min: number, max: number) => number;
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
export declare const mapValue: (value: number, inMin: number, inMax: number, outMin: number, outMax: number, constrain?: boolean) => number;
/**
 * Invert a value relative to a maximum.
 * @param value - Value to invert
 * @param max - Maximum value for inversion
 * @returns Inverted value
 */
export declare const invertValue: (value: number, max: number) => number;
/**
 * @internal
 * Percent-encode a string for use in the blokdots serial protocol.
 */
export declare const encodeProtocolString: (input: string) => string;
declare const utils: {
    rgbToHex: (r: number, g: number, b: number) => string;
    hexToRgb: (hex: string) => [number, number, number] | null;
    clamp: (value: number, min: number, max: number) => number;
    invertValue: (value: number, max: number) => number;
    mapValue: (value: number, inMin: number, inMax: number, outMin: number, outMax: number, constrain?: boolean) => number;
    encodeProtocolString: (input: string) => string;
};
export default utils;
