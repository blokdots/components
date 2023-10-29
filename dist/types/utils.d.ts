declare const utils: {
    rgbToHex: (r: number, g: number, b: number) => string;
    hexToRgb: (hex: string) => [number, number, number] | null;
};
export default utils;
