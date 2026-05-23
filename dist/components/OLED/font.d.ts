export declare const GLYPH_WIDTH = 6;
export declare const GLYPH_HEIGHT = 8;
/**
 * Render text into a 128×64 flat pixel array (row-major, index = y*128+x).
 *
 * @param text   The string to render.
 * @param startY The top pixel row where drawing begins (0–63).
 * @param scale  1 = normal 6×8 glyphs; 2 = glyphs scaled to 12×16.
 * @param bitmap The target array (must be 128*64 entries, values 0|1).
 * @param maxY   Pixel row at which to stop drawing (exclusive). Defaults to 64.
 */
export declare function renderTextToBitmap(text: string, startY: number, scale: 1 | 2, bitmap: Array<0 | 1>, maxY?: number): void;
