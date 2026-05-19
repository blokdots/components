import { SerialPort } from 'serialport';
import { SerialProtocol } from '../common/SerialProtocol';
export type ProbeResult = {
    portPath: string;
    port: SerialPort;
    protocol: SerialProtocol;
};
/**
 * Auto-detect a connected blokdots Arduino board by probing all available
 * serial/USB ports in parallel.
 *
 * The first port that completes the blokdots two-step handshake (S:READY →
 * S:HASH?) wins. All other probe connections are cleaned up automatically.
 *
 * @param timeoutMs - Per-port probe timeout in ms (default: 5000)
 * @returns Open ProbeResult that Board can inherit
 * @throws If no blokdots board is found within the timeout
 */
export declare const autoDetectPort: (timeoutMs?: number) => Promise<ProbeResult>;
