import type { Pin } from "@blokdots/board-configurations";
import EventEmitter from "events";
import { ReadlineParser, type SerialPort } from "serialport";

import {
  COMMAND_WRITE,
  DELIMITER,
  RESPONSE_SYSTEM,
  RESPONSE_DATA,
  SystemMessage,
} from "./constants";

/**
 * Serial protocol handler for communication with Arduino.
 *
 * Protocol format: PREFIX:IDENTIFIER:DATA\n
 *
 * Outgoing (Node.js → Arduino):
 * - W:D5:1           - Write value (turn LED on)
 * - W:D5:0           - Write value (turn LED off)
 * - W:D5:BLINK:500   - Component command with args (blink at 500ms interval)
 * - W:D5:STOP        - Stop animation
 * - S:HASH?          - Query config hash
 *
 * Incoming (Arduino → Node.js):
 * - S:READY          - Arduino ready
 * - S:HASH:xxxxxxxx  - Config hash response
 * - S:ERROR:msg      - Error message
 * - S:ACK:id         - Acknowledge command (optional)
 * - D:A0:512         - Data event from analog pin
 * - D:D2:1           - Data event from digital pin (button state)
 *
 * Events emitted:
 * - 'ready'              - Arduino sent READY
 * - 'hash' (hash)        - Config hash received
 * - 'data' (id, value)   - Data received for component
 * - 'error' (message)    - Error from Arduino
 * - 'ack' (id)           - Command acknowledged
 */
export class SerialProtocol extends EventEmitter {
  private port: SerialPort;
  private parser: ReadlineParser;

  // -------------------------------------------------------
  // Universal chunking (UNO-safe)
  // - If a single outgoing W: frame exceeds MAX_LINE_LEN,
  //   we send:
  //     W:id:CMD_BEGIN
  //     W:id:CMD_CHUNK:<chunk>
  //     ...
  //     W:id:CMD_END
  //
  // The Arduino side reassembles args and then calls the write handler once:
  //   writeHandler(pinId, "CMD", "<reassembled args>")
  //
  // IMPORTANT:
  // - We only chunk W:id:cmd:args... frames (parts length >= 4).
  // - We do NOT change OLED / component code. Components still send:
  //     W:i2c-0:DRAWSTRING:<encodedText>
  //   and the protocol splits automatically if needed.
  // -------------------------------------------------------

  // UNO-safe: Arduino RX buffer is 64 bytes, it drops overlong lines completely.
  // Keep a margin for safety (newline, \0, occasional \r, etc.)
  private static readonly MAX_LINE_LEN = 60;

  // Extra headroom so chunk lines stay comfortably below MAX_LINE_LEN
  // even if prefixes are longer than expected.
  private static readonly CHUNK_OVERHEAD = 8; // serialize writes so we never interleave chunk sequences

  private writeChain: Promise<void> = Promise.resolve();

  constructor(port: SerialPort) {
    super();
    this.port = port;
    this.parser = port.pipe(new ReadlineParser({ delimiter: "\n" }));
    this.parser.on("data", (line: string) => this.parseLine(line));
  }

  /**
   * Parse incoming line from Arduino
   */
  parseLine(line: string): void {
    line = line.trim();
    if (!line) return;

    // Log all incoming serial messages
    console.log(`↙ [Serial] ${line}`);

    const parts = line.split(DELIMITER);
    const prefix = parts[0];

    switch (prefix) {
      case RESPONSE_SYSTEM:
        this.handleSystemMessage(parts.slice(1));
        break;

      case RESPONSE_DATA:
        this.handleDataMessage(parts.slice(1));
        break;

      default:
        // Legacy format or unknown - try to parse as ID:VALUE
        if (parts.length >= 2) {
          this.emit("data", parts[0], parts.slice(1).join(DELIMITER));
        }
        break;
    }
  }

  /**
   * Handle system messages (S:...)
   */
  private handleSystemMessage(parts: string[]): void {
    const type = parts[0];

    switch (type) {
      case SystemMessage.READY:
        this.emit("ready");
        break;

      case SystemMessage.ERROR:
        this.emit("error", parts.slice(1).join(DELIMITER));
        break;

      case SystemMessage.ACK:
        this.emit("ack", parts[1]);
        break;

      case SystemMessage.HASH:
        // Config hash response: S:HASH:xxxxxxxx
        this.emit("hash", parts[1] || "");
        break;

      case "CONFIG":
        // Config query responses:
        // S:CONFIG:COUNT:N
        // S:CONFIG:0:D2:Button:{}
        if (parts[1] === "COUNT") {
          this.emit("config-count", parseInt(parts[2] || "0", 10));
        } else {
          // S:CONFIG:index:pin:type:options
          const index = parseInt(parts[1] || "0", 10);
          const pin = parts[2];
          const type = parts[3];
          const optionsJson = parts.slice(4).join(":");
          this.emit("config-component", {
            index,
            pin,
            type,
            options: optionsJson,
          });
        }
        break;

      case "VERSION":
        // Version query response: S:VERSION:app:3.0.0|components:4.0.0|arduino-cpp:1.0.0
        const versionString = parts.slice(1).join(":");
        this.emit("version", versionString);
        break;

      default:
        // Unknown system message
        break;
    }
  }

  /**
   * Handle data messages (D:...)
   * Format: D:ID:VALUE or D:ID:VALUE1:VALUE2:...
   */
  private handleDataMessage(parts: string[]): void {
    if (parts.length < 2) return;

    const id = parts[0];
    const value = parts.length === 2 ? parts[1] : parts.slice(1);

    this.emit("data", id, value);
  }

  /**
   * Send command to Arduino
   */
  send(command: string): void {
    if (!this.port.isOpen) {
      throw new Error("Serial port is not open");
    }

    // Ensure multi-line chunk sequences are sent in order and not interleaved.
    this.writeChain = this.writeChain.then(async () => {
      const lines = this.buildOutgoingLines(command);
      for (const line of lines) {
        await this.writeLine(line);
      }
    });
  }

  private writeLine(line: string): Promise<void> {
    console.log(`↗ [Serial] ${line}`);
    return new Promise((resolve, reject) => {
      this.port.write(`${line}\n`, (err) => {
        if (err) return reject(err);
        this.port.drain((err2) => (err2 ? reject(err2) : resolve()));
      });
    });
  }

  private buildOutgoingLines(command: string): string[] {
    if (command.length <= SerialProtocol.MAX_LINE_LEN) return [command];

    const parts = command.split(DELIMITER);

    // Only chunk W frames that look like: W:<id>:<cmd>:<args...>
    if (parts.length < 4) return [command];
    if (parts[0] !== COMMAND_WRITE) return [command];

    const id = parts[1];
    const cmd = parts[2];
    const args = parts.slice(3).join(DELIMITER);

    if (!args) return [command];

    const begin = `${COMMAND_WRITE}${DELIMITER}${id}${DELIMITER}${cmd}_BEGIN`;
    const end = `${COMMAND_WRITE}${DELIMITER}${id}${DELIMITER}${cmd}_END`;
    const chunkPrefix = `${COMMAND_WRITE}${DELIMITER}${id}${DELIMITER}${cmd}_CHUNK${DELIMITER}`;

    const maxChunkLen = Math.max(
      1,
      SerialProtocol.MAX_LINE_LEN -
        (chunkPrefix.length + SerialProtocol.CHUNK_OVERHEAD)
    );

    const chunks = chunkPercentSafe(args, maxChunkLen);

    return [begin, ...chunks.map((c) => `${chunkPrefix}${c}`), end];
  }

  /**
   * Send write command for digital/analog pin
   */
  writePin(pin: Pin, value: number): void {
    this.send(`${COMMAND_WRITE}${DELIMITER}${pin}${DELIMITER}${value}`);
  }

  /**
   * Send component command (W: protocol)
   */
  sendComponentCommand(
    id: string,
    command: string,
    ...args: (string | number)[]
  ): void {
    const argsStr = args.length > 0 ? DELIMITER + args.join(DELIMITER) : "";
    this.send(
      `${COMMAND_WRITE}${DELIMITER}${id}${DELIMITER}${command}${argsStr}`
    );
  }

  /**
   * Close protocol and cleanup
   */
  close(): void {
    this.parser.removeAllListeners();
    this.removeAllListeners();
  }
}

/**
 * Split a percent-encoded string into chunks without cutting "%AB" sequences
 * or multi-byte UTF-8 characters (which encode as multiple %XX pairs).
 *
 * A UTF-8 2-byte sequence encodes as two %XX pairs, e.g. ö = %C3%B6.
 * The lead byte has its top bit set (≥ 0x80). If a chunk would end on the
 * lead %XX of a multi-byte pair, we back up to keep the full sequence together.
 */
function chunkPercentSafe(s: string, maxLen: number): string[] {
  const out: string[] = [];
  let i = 0;

  while (i < s.length) {
    let end = Math.min(i + maxLen, s.length);

    if (end < s.length) {
      // Don’t end on a partial percent escape: "%" or "%A"
      if (s[end - 1] === "%") end -= 1;
      else if (end - 2 >= i && s[end - 2] === "%") end -= 2;

      // Don’t split a multi-byte UTF-8 sequence across chunks.
      // If the chunk ends with a complete %XX where XX ≥ 0x80, and the next
      // char is also %, back up 3 chars so both %XX pairs stay together.
      if (
        end > i + 2 &&
        end < s.length &&
        s[end - 3] === "%" &&
        parseInt(s.slice(end - 2, end), 16) >= 0x80 &&
        s[end] === "%"
      ) {
        end -= 3;
      }
    }

    // Ensure progress even in degenerate cases
    if (end <= i) end = Math.min(i + maxLen, s.length);

    out.push(s.slice(i, end));
    i = end;
  }

  return out;
}
