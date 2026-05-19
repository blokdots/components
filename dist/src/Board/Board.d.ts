import { Pin, I2CPinID } from '@blokdots/board-configurations';
import { default as EventEmitter } from 'events';
import { ComponentBase } from '../componentBases/ComponentBase';
export type BoardOptions = {
    /**
     * Expected config hash (embedded in the generated JS file at export time).
     * If provided, the board queries its hash after connecting and logs a warning
     * when the hash doesn't match — indicating the board may be running a
     * different sketch than expected.
     * The connection always proceeds regardless of the hash result.
     */
    expectedHash?: string;
    /** Auto-detection timeout in milliseconds (default: 5000) */
    autoDetectTimeoutMs?: number;
};
export declare class Board extends EventEmitter {
    private port;
    private protocol;
    private components;
    private isReady;
    private pendingData;
    /**
     * Create a Board instance.
     *
     * @param portPath - Serial port path (e.g. "/dev/tty.usbserial-XXXX" or "COM3").
     *                   Pass `null` or omit to auto-detect the connected blokdots board.
     *                   Example: "/dev/tty.usbserial-XXXX" on Mac, "COM3" on Windows.
     * @param options  - Optional configuration (expectedHash, autoDetectTimeoutMs).
     */
    constructor(portPath?: string | null, options?: BoardOptions);
    /**
     * Open a new serial connection to `portPath` and set up protocol listeners.
     * Used when a port path is provided explicitly.
     */
    private initWithPort;
    /**
     * Take over an already-open connection returned by autoDetectPort.
     * The board is already confirmed ready, so we emit 'ready' immediately
     * after attaching listeners.
     */
    private initWithExistingConnection;
    /**
     * Attach protocol → board event forwarding listeners.
     * Called by both initWithPort and initWithExistingConnection.
     */
    private attachProtocolListeners;
    /**
     * Query the board's config hash and log a warning if it doesn't match
     * `expectedHash`. The connection always proceeds — this is purely diagnostic.
     */
    private checkHashAfterReady;
    /**
     * Register a component with the board.
     * Accepts Pin (number for digital, string for analog), I2CPinID, or any string identifier.
     * Converts to string internally for Map storage.
     */
    registerComponent(id: Pin | I2CPinID | string, component: ComponentBase): void;
    sendCommand(command: string): void;
    /**
     * Query the board's config hash.
     * The board will respond with a 'hash' event containing the hash string.
     */
    queryConfigHash(): void;
    close(callback?: () => void): void;
    isConnected(): boolean;
}
