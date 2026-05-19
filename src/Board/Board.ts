import type { Pin, I2CPinID } from "@blokdots/board-configurations";
import EventEmitter from "events";
import { SerialPort } from "serialport";

import { BAUD_RATE, SYSTEM_CMD_QUERY_HASH } from "../common/constants";
import { SerialProtocol } from "../common/SerialProtocol";
import type { ComponentBase } from "../componentBases/ComponentBase";

import { autoDetectPort } from "./autoDetectPort";
import type { ProbeResult } from "./autoDetectPort";

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

export class Board extends EventEmitter {
  // Initialized in initWithPort / initWithExistingConnection.
  // All public methods check isReady before use, so these are guaranteed to
  // exist by the time any caller can interact with the board.
  private port!: SerialPort;
  private protocol!: SerialProtocol;
  private components: Map<string, ComponentBase> = new Map();
  private isReady: boolean = false;
  // Buffer the last received value per pin ID for components that register after the initial data arrives.
  // This handles the race condition where sensors emit their initial value in Arduino setup()
  // before the Node.js component instance has been registered with the board.
  private pendingData: Map<string, unknown> = new Map();

  /**
   * Create a Board instance.
   *
   * @param portPath - Serial port path (e.g. "/dev/tty.usbserial-XXXX" or "COM3").
   *                   Pass `null` or omit to auto-detect the connected blokdots board.
   *                   Example: "/dev/tty.usbserial-XXXX" on Mac, "COM3" on Windows.
   * @param options  - Optional configuration (expectedHash, autoDetectTimeoutMs).
   */
  constructor(portPath?: string | null, options?: BoardOptions) {
    super();

    if (portPath) {
      this.initWithPort(portPath, options?.expectedHash);
    } else {
      autoDetectPort(options?.autoDetectTimeoutMs)
        .then((probe: ProbeResult) => {
          this.initWithExistingConnection(probe, options?.expectedHash);
        })
        .catch((err: Error) => {
          this.emit("error", err);
        });
    }
  }

  /**
   * Open a new serial connection to `portPath` and set up protocol listeners.
   * Used when a port path is provided explicitly.
   */
  private initWithPort(portPath: string, expectedHash?: string) {
    this.port = new SerialPort({ path: portPath, baudRate: BAUD_RATE });
    this.protocol = new SerialProtocol(this.port);

    this.protocol.on("ready", () => {
      this.isReady = true;
      if (expectedHash) this.checkHashAfterReady(expectedHash);
      this.emit("ready");
    });

    this.attachProtocolListeners();
  }

  /**
   * Take over an already-open connection returned by autoDetectPort.
   * The board is already confirmed ready, so we emit 'ready' immediately
   * after attaching listeners.
   */
  private initWithExistingConnection(
    probe: ProbeResult,
    expectedHash?: string
  ) {
    this.port = probe.port;
    this.protocol = probe.protocol;

    this.attachProtocolListeners();

    this.isReady = true;
    if (expectedHash) this.checkHashAfterReady(expectedHash);
    this.emit("ready");
  }

  /**
   * Attach protocol → board event forwarding listeners.
   * Called by both initWithPort and initWithExistingConnection.
   */
  private attachProtocolListeners() {
    this.protocol.on("data", (id: string, value: unknown) => {
      const component = this.components.get(id);
      if (component) {
        component.handleData(value);
      } else {
        // Component not registered yet — keep the latest value so it can be
        // replayed when the component registers (e.g. barometer initial value).
        this.pendingData.set(id, value);
      }
    });

    this.protocol.on("hash", (hash: string) => {
      this.emit("hash", hash);
    });

    // Forward config query events
    this.protocol.on("config-count", (count: number) => {
      this.emit("config-count", count);
    });

    this.protocol.on("config-component", (data: unknown) => {
      this.emit("config-component", data);
    });

    this.protocol.on("version", (versionString: string) => {
      this.emit("version", versionString);
    });
  }

  /**
   * Query the board's config hash and log a warning if it doesn't match
   * `expectedHash`. The connection always proceeds — this is purely diagnostic.
   */
  private checkHashAfterReady(expectedHash: string) {
    const hashTimeout = setTimeout(() => {
      // No hash response within timeout — can't verify, proceed silently
    }, 3000);

    this.once("hash", (receivedHash: string) => {
      clearTimeout(hashTimeout);
      if (receivedHash !== expectedHash) {
        console.warn(
          "⚠️  Warning: The connected board appears to be running a different sketch.\n" +
            "   Some components may not work as expected.\n" +
            "   Make sure you've uploaded the correct code to your board."
        );
      }
    });

    this.queryConfigHash();
  }

  /**
   * Register a component with the board.
   * Accepts Pin (number for digital, string for analog), I2CPinID, or any string identifier.
   * Converts to string internally for Map storage.
   */
  registerComponent(id: Pin | I2CPinID | string, component: ComponentBase) {
    const stringId = String(id);
    this.components.set(stringId, component);
    component.setBoard(this);

    // Replay any data that arrived before this component was registered.
    // Use setImmediate so that Promise microtasks (e.g. setupValueChangeObserver)
    // run first — the 'change' listener must be registered before we emit.
    const pending = this.pendingData.get(stringId);
    if (pending !== undefined) {
      this.pendingData.delete(stringId);
      setImmediate(() => component.handleData(pending));
    }
  }

  sendCommand(command: string) {
    if (!this.isReady) throw new Error("Board not ready");
    this.protocol.send(command);
  }

  /**
   * Query the board's config hash.
   * The board will respond with a 'hash' event containing the hash string.
   */
  queryConfigHash() {
    if (!this.isReady) throw new Error("Board not ready");
    this.protocol.send(SYSTEM_CMD_QUERY_HASH);
  }

  close(callback?: () => void) {
    // Guard against calling close before auto-detection completes
    if (!this.port) {
      callback?.();
      return;
    }

    // Cleanup all components first
    this.components.forEach((component) => {
      component.cleanup();
    });
    this.components.clear();
    this.pendingData.clear();

    // Close protocol (stops listeners)
    this.protocol.close();

    // Close serial port only if it's open
    if (this.port.isOpen) {
      this.port.close(callback);
    } else {
      callback?.();
    }
  }

  isConnected(): boolean {
    return this.isReady && !!this.port?.isOpen;
  }
}
