export const OLED_WIDTH = 128;
export const OLED_HEIGHT = 64;

/** @internal */
export const COMMAND_WRITE = "W";

/** @internal */
export const RESPONSE_DATA = "D";

/** @internal */
export const RESPONSE_SYSTEM = "S";

/** @internal */
export const DELIMITER = ":";

/** @internal */
export enum SystemMessage {
  READY = "READY",
  ERROR = "ERROR",
  ACK = "ACK",
  HASH = "HASH",
}

/** @internal */
export const SYSTEM_CMD_QUERY_HASH = `${RESPONSE_SYSTEM}${DELIMITER}${SystemMessage.HASH}?`;

/** @internal */
export const BAUD_RATE = 57600;

/** @internal */
export const LIVE_MODE_IDENTIFIER = "BLOKDOTS_LIVE_MODE";
