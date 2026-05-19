export declare const OLED_WIDTH = 128;
export declare const OLED_HEIGHT = 64;
/** @internal */
export declare const COMMAND_WRITE = "W";
/** @internal */
export declare const RESPONSE_DATA = "D";
/** @internal */
export declare const RESPONSE_SYSTEM = "S";
/** @internal */
export declare const DELIMITER = ":";
/** @internal */
export declare enum SystemMessage {
    READY = "READY",
    ERROR = "ERROR",
    ACK = "ACK",
    HASH = "HASH"
}
/** @internal */
export declare const SYSTEM_CMD_QUERY_HASH = "S:HASH?";
/** @internal */
export declare const BAUD_RATE = 57600;
/** @internal */
export declare const LIVE_MODE_IDENTIFIER = "BLOKDOTS_LIVE_MODE";
