import { SerialPort } from "serialport";

import { BAUD_RATE, SYSTEM_CMD_QUERY_HASH } from "../common/constants";
import { SerialProtocol } from "../common/SerialProtocol";

// Filter regex for likely Arduino/serial ports — same heuristic as Johnny-Five
const PORT_FILTER = /usb|acm|^com/i;

// Total time to wait for S:READY + S:HASH response from a single port
const PROBE_TIMEOUT_MS = 5000;

export type ProbeResult = {
  portPath: string;
  port: SerialPort;
  protocol: SerialProtocol;
};

/**
 * Probe a single serial port to check if it's a blokdots board.
 *
 * Two-step handshake:
 * 1. Wait for S:READY (Arduino startup signal)
 * 2. Send S:HASH? and wait for S:HASH:xxx (blokdots-specific — random Arduino
 *    sketches don't respond to S:HASH?, so this uniquely identifies blokdots boards)
 *
 * On success the port and protocol are left open so Board can take over the
 * existing connection without losing the S:READY signal.
 */
const probePort = (portPath: string): Promise<ProbeResult> =>
  new Promise((resolve, reject) => {
    let settled = false;

    const fail = (err: Error) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      protocol.close();
      if (port.isOpen) {
        port.close(() => {});
      } else {
        port.destroy();
      }
      reject(err);
    };

    const timer = setTimeout(() => {
      fail(new Error(`No blokdots response from ${portPath}`));
    }, PROBE_TIMEOUT_MS);

    const port = new SerialPort({ path: portPath, baudRate: BAUD_RATE });
    const protocol = new SerialProtocol(port);

    port.on("error", fail);

    protocol.on("ready", () => {
      if (settled) return;
      try {
        protocol.send(SYSTEM_CMD_QUERY_HASH);
      } catch {
        fail(new Error(`Failed to send hash query to ${portPath}`));
      }
    });

    protocol.on("hash", () => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      // Remove probe-specific listeners — Board will attach its own
      port.removeAllListeners("error");
      protocol.removeAllListeners("ready");
      protocol.removeAllListeners("hash");
      // Leave port + protocol open; Board inherits the connection
      resolve({ portPath, port, protocol });
    });
  });

/**
 * Resolves with the first promise that resolves (equivalent to Promise.any(),
 * which requires ES2021 — not available at the es2016 target used here).
 * Rejects only if every promise rejects.
 */
const raceToResolve = <T>(promises: Promise<T>[]): Promise<T> =>
  new Promise((resolve, reject) => {
    let rejectedCount = 0;
    promises.forEach((p) => {
      p.then(resolve).catch(() => {
        rejectedCount++;
        if (rejectedCount === promises.length) {
          reject(new Error("All promises rejected"));
        }
      });
    });
  });

/**
 * Wraps probePort with a custom timeout, overriding PROBE_TIMEOUT_MS.
 */
const probePortWithTimeout = (
  portPath: string,
  timeoutMs: number
): Promise<ProbeResult> => {
  if (timeoutMs === PROBE_TIMEOUT_MS) {
    return probePort(portPath);
  }

  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(`No blokdots response from ${portPath} (timeout)`));
    }, timeoutMs);

    probePort(portPath)
      .then((result) => {
        clearTimeout(timer);
        resolve(result);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
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
export const autoDetectPort = async (
  timeoutMs = PROBE_TIMEOUT_MS
): Promise<ProbeResult> => {
  const allPorts = await SerialPort.list();
  const candidates = allPorts.filter((p) => PORT_FILTER.test(p.path));

  if (candidates.length === 0) {
    throw new Error(
      "No Arduino board found. Make sure your board is connected and running the correct sketch.\n" +
        'If auto-detection fails, pass a port path directly (e.g. new blokdots.Board("/dev/tty.usbserial-XXXX")).'
    );
  }

  const probes = candidates.map((p) => probePortWithTimeout(p.path, timeoutMs));

  return raceToResolve(probes).catch(() => {
    throw new Error(
      "No blokdots board found. Make sure your board is connected and running the correct sketch.\n" +
        'If auto-detection fails, pass a port path directly (e.g. new blokdots.Board("/dev/tty.usbserial-XXXX")).'
    );
  });
};
