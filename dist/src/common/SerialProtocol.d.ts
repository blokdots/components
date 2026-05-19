import { Pin } from '@blokdots/board-configurations';
import { default as EventEmitter } from 'events';
import { SerialPort } from 'serialport';
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
export declare class SerialProtocol extends EventEmitter {
    private port;
    private parser;
    private static readonly MAX_LINE_LEN;
    private static readonly CHUNK_OVERHEAD;
    private writeChain;
    constructor(port: SerialPort);
    /**
     * Parse incoming line from Arduino
     */
    parseLine(line: string): void;
    /**
     * Handle system messages (S:...)
     */
    private handleSystemMessage;
    /**
     * Handle data messages (D:...)
     * Format: D:ID:VALUE or D:ID:VALUE1:VALUE2:...
     */
    private handleDataMessage;
    /**
     * Send command to Arduino
     */
    send(command: string): void;
    private writeLine;
    private buildOutgoingLines;
    /**
     * Send write command for digital/analog pin
     */
    writePin(pin: Pin, value: number): void;
    /**
     * Send component command (W: protocol)
     */
    sendComponentCommand(id: string, command: string, ...args: (string | number)[]): void;
    /**
     * Close protocol and cleanup
     */
    close(): void;
}
