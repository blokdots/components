import { networkInterfaces } from "os";
import { Server } from "socket.io";
import http from "http";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import EventEmitter from "events";
import { ReadlineParser, SerialPort } from "serialport";
const getWebRoot = () => {
  let webRoot;
  const isDev = process.env.NODE_ENV === "development";
  console.log("[BlokdotsSocketIOServer] Environment info:");
  console.log("  - NODE_ENV:", process.env.NODE_ENV);
  console.log("  - process.cwd():", process.cwd());
  console.log("  - process.argv[0]:", process.argv[0]);
  if (process.resourcesPath) {
    console.log("  - process.resourcesPath:", process.resourcesPath);
  }
  try {
    const packageJsonPath = require.resolve("@blokdots/components/package.json");
    const packageRoot = path.dirname(packageJsonPath);
    if (isDev) {
      console.log(
        "[BlokdotsSocketIOServer] Found package via require.resolve:",
        packageRoot
      );
    }
    let resolvedPackageRoot = packageRoot;
    if (packageRoot.includes(".asar")) {
      resolvedPackageRoot = packageRoot.replace(
        /\.asar([\/\\])/,
        ".asar.unpacked$1"
      );
      if (isDev) {
        console.log(
          "[BlokdotsSocketIOServer] Adjusted for asar unpacked:",
          resolvedPackageRoot
        );
      }
    }
    const distWebRoot = path.join(resolvedPackageRoot, "dist/webserver");
    if (isDev) {
      console.log(
        "[BlokdotsSocketIOServer] Checking dist path:",
        distWebRoot,
        "exists:",
        existsSync(distWebRoot)
      );
    }
    if (existsSync(distWebRoot)) {
      webRoot = distWebRoot;
      if (isDev) {
        console.log(
          "[BlokdotsSocketIOServer] ✅ Found webserver via require.resolve (dist):",
          webRoot
        );
      }
    } else {
      const srcWebRoot = path.join(
        resolvedPackageRoot,
        "src/BlokdotsSocketIOServer/webserver"
      );
      if (isDev) {
        console.log(
          "[BlokdotsSocketIOServer] Checking src path:",
          srcWebRoot,
          "exists:",
          existsSync(srcWebRoot)
        );
      }
      if (existsSync(srcWebRoot)) {
        webRoot = srcWebRoot;
        if (isDev) {
          console.log(
            "[BlokdotsSocketIOServer] ✅ Found webserver via require.resolve (src):",
            webRoot
          );
        }
      }
    }
  } catch (e) {
    if (isDev) {
      console.log("[BlokdotsSocketIOServer] require.resolve failed:", e);
    }
  }
  if (!webRoot) {
    if (typeof __dirname !== "undefined") {
      const dirname = __dirname;
      if (dirname.includes(".asar")) {
        if (dirname.includes("electron.asar")) {
          const electronIndex = dirname.search(/node_modules[\\/]electron/);
          if (electronIndex > 0) {
            const appRoot = dirname.substring(0, electronIndex);
            const possiblePaths = [
              path.join(
                appRoot,
                "node_modules/@blokdots/components/dist/webserver"
              ),
              path.join(appRoot, "components/dist/webserver"),
              path.join(
                appRoot,
                "components/src/BlokdotsSocketIOServer/webserver"
              ),
              path.join(appRoot, "../components/dist/webserver"),
              path.join(
                appRoot,
                "../components/src/BlokdotsSocketIOServer/webserver"
              )
            ];
            for (const possiblePath of possiblePaths) {
              if (existsSync(possiblePath)) {
                webRoot = possiblePath;
                break;
              }
            }
          }
          console.log(
            "[BlokdotsSocketIOServer] Could not find webserver in electron.asar mode. Tried app root:",
            electronIndex > 0 ? dirname.substring(0, electronIndex) : "N/A"
          );
        } else if (dirname.includes("app.asar")) {
          const asarMatch = dirname.match(/(.*app\.asar)/);
          if (asarMatch) {
            const asarPath = asarMatch[1];
            const unpackedPath = asarPath.replace(/\.asar$/, ".asar.unpacked");
            const candidatePath = path.join(
              unpackedPath,
              "node_modules/@blokdots/components/dist/webserver"
            );
            if (existsSync(candidatePath)) {
              webRoot = candidatePath;
              console.log(
                "[BlokdotsSocketIOServer] Found webserver in app.asar.unpacked:",
                webRoot
              );
            }
          }
        }
      } else {
        const candidatePath = path.join(dirname, "webserver");
        if (existsSync(candidatePath)) {
          webRoot = candidatePath;
          console.log(
            "[BlokdotsSocketIOServer] Found webserver relative to __dirname:",
            webRoot
          );
        }
      }
    } else {
      const __filename = fileURLToPath(import.meta.url);
      const dirName = path.dirname(__filename);
      const candidatePath = path.join(dirName, "webserver");
      if (existsSync(candidatePath)) {
        webRoot = candidatePath;
        console.log(
          "[BlokdotsSocketIOServer] Found webserver via import.meta.url:",
          webRoot
        );
      }
    }
  }
  if (!webRoot && process.resourcesPath) {
    console.log(
      "[BlokdotsSocketIOServer] Trying Electron resourcesPath:",
      process.resourcesPath
    );
    const electronPaths = [
      // Standard Electron packaged app structure
      path.join(
        process.resourcesPath,
        "app.asar.unpacked/node_modules/@blokdots/components/dist/webserver"
      ),
      path.join(
        process.resourcesPath,
        "app.asar/node_modules/@blokdots/components/dist/webserver"
      ),
      // Alternative locations
      path.join(
        process.resourcesPath,
        "../app.asar.unpacked/node_modules/@blokdots/components/dist/webserver"
      )
    ];
    for (const electronPath of electronPaths) {
      console.log(
        "[BlokdotsSocketIOServer] Checking Electron path:",
        electronPath,
        "exists:",
        existsSync(electronPath)
      );
      if (existsSync(electronPath)) {
        webRoot = electronPath;
        console.log(
          "[BlokdotsSocketIOServer] ✅ Found webserver via Electron resourcesPath:",
          webRoot
        );
        break;
      }
    }
  }
  if (!webRoot) {
    console.log(
      "[BlokdotsSocketIOServer] Trying workspace monorepo paths from cwd:",
      process.cwd()
    );
    const workspacePaths = [
      path.join(process.cwd(), "components/dist/webserver"),
      path.join(
        process.cwd(),
        "components/src/BlokdotsSocketIOServer/webserver"
      ),
      path.join(process.cwd(), "../components/dist/webserver"),
      path.join(
        process.cwd(),
        "../components/src/BlokdotsSocketIOServer/webserver"
      )
    ];
    for (const workspacePath of workspacePaths) {
      console.log(
        "[BlokdotsSocketIOServer] Checking workspace path:",
        workspacePath,
        "exists:",
        existsSync(workspacePath)
      );
      if (existsSync(workspacePath)) {
        webRoot = workspacePath;
        console.log(
          "[BlokdotsSocketIOServer] ✅ Found webserver via workspace path:",
          webRoot
        );
        break;
      }
    }
  }
  if (!webRoot) {
    console.error(
      "[BlokdotsSocketIOServer] ❌ FAILED to find webserver directory. Debug info:"
    );
    console.error("  - NODE_ENV:", process.env.NODE_ENV);
    console.error("  - typeof __dirname:", typeof global.__dirname);
    console.error("  - process.cwd():", process.cwd());
    console.error("  - __filename (ESM):", import.meta.url);
    console.error("  - process.resourcesPath:", process.resourcesPath);
  }
  return webRoot;
};
let WEB_ROOT = void 0;
let files = void 0;
const memo = (fn) => {
  let v;
  return () => {
    if (v === void 0) {
      try {
        v = fn();
      } catch (error) {
        console.error("[BlokdotsSocketIOServer] Error reading file:", error);
        throw error;
      }
    }
    return v;
  };
};
const initializeWebRoot = () => {
  if (WEB_ROOT !== void 0) return;
  WEB_ROOT = getWebRoot();
  if (!WEB_ROOT) {
    console.error(
      "[BlokdotsSocketIOServer] ❌ CRITICAL: WEB_ROOT is null/undefined"
    );
    console.error("[BlokdotsSocketIOServer] process.cwd():", process.cwd());
    console.error("[BlokdotsSocketIOServer] NODE_ENV:", process.env.NODE_ENV);
    throw new Error(
      "[BlokdotsSocketIOServer] Could not find webserver directory. This is likely a packaging issue."
    );
  }
  console.log("[BlokdotsSocketIOServer] ✅ WEB_ROOT resolved to:", WEB_ROOT);
  files = {
    "favicon.ico": memo(
      () => readFileSync(path.join(WEB_ROOT, "favicon.ico"))
    ),
    // Buffer
    "style.css": memo(
      () => readFileSync(path.join(WEB_ROOT, "style.css"), "utf8")
    ),
    // string
    "socket-io.min.js": memo(
      () => readFileSync(path.join(WEB_ROOT, "socket-io.min.js"), "utf8")
    ),
    "log-arrow-in.svg": memo(
      () => readFileSync(path.join(WEB_ROOT, "log-arrow-in.svg"), "utf8")
    ),
    "log-arrow-out.svg": memo(
      () => readFileSync(path.join(WEB_ROOT, "log-arrow-out.svg"), "utf8")
    ),
    "index.html": memo(
      () => readFileSync(path.join(WEB_ROOT, "index.html"), "utf8")
    )
  };
};
const setupHttpServer = () => {
  initializeWebRoot();
  const httpServer = http.createServer((req, res) => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
      "Access-Control-Max-Age": 2592e3,
      // 30 days
      "Cache-Control": "max-age=86400"
    };
    if (req.method === "OPTIONS") {
      res.writeHead(204, headers);
      res.end();
      return;
    }
    let contentType = "text/html";
    let body;
    switch (req.url) {
      case "/favicon.ico":
        contentType = "image/x-icon";
        body = files["favicon.ico"]();
        break;
      case "/style.css":
        contentType = "text/css; charset=utf-8";
        body = files["style.css"]();
        break;
      case "/socket-io.min.js":
        contentType = "text/javascript; charset=utf-8";
        body = files["socket-io.min.js"]();
        break;
      case "/log-arrow-out.svg":
        contentType = "image/svg+xml; charset=utf-8";
        body = files["log-arrow-out.svg"]();
        break;
      case "/log-arrow-in.svg":
        contentType = "image/svg+xml; charset=utf-8";
        body = files["log-arrow-in.svg"]();
        break;
      default:
        delete headers["Cache-Control"];
        contentType = "text/html; charset=utf-8";
        body = files["index.html"]();
    }
    res.writeHead(200, { ...headers, "Content-Type": contentType });
    res.end(body);
  });
  return httpServer;
};
const BLOKDOTS_SOCKET_IO_SERVER_DEFAULT_PORT = 8777;
const getBlokdotsSocketIOServerAddress = () => {
  const currentIP = Object.values(networkInterfaces()).flat().find((i) => i?.family === "IPv4" && !i.internal)?.address;
  if (!currentIP) return null;
  return `http://${currentIP}:${BLOKDOTS_SOCKET_IO_SERVER_DEFAULT_PORT}`;
};
class BlokdotsSocketIOServer {
  constructor() {
    this.activeIntegrations = {};
    this.io = null;
  }
  // Init is a separate function, because the constructor can
  // not be async
  async init() {
    return new Promise((resolve) => {
      this.start();
      resolve(null);
    });
  }
  start() {
    const httpServer = setupHttpServer();
    this.io = new Server(httpServer, {
      pingInterval: 5e3,
      pingTimeout: 5e3,
      allowEIO3: true,
      // support older websocket clients
      cors: {
        origin: "*",
        methods: ["GET", "POST"]
      }
    });
    httpServer.listen(BLOKDOTS_SOCKET_IO_SERVER_DEFAULT_PORT, "0.0.0.0");
    this.io.on("connection", (socket) => {
      socket.on("requestInfo", () => {
        this.emitInfo(socket);
      });
      this.emitInfo(socket);
    });
  }
  emitInfo(socket) {
    if (!this.io) return;
    let socketsToEmitTo;
    if (!socket) {
      socketsToEmitTo = this.io.sockets;
    } else {
      socketsToEmitTo = socket;
    }
    socketsToEmitTo.emit("info", {
      url: getBlokdotsSocketIOServerAddress(),
      integrations: Object.values(this.activeIntegrations).map((i) => ({
        id: i.id,
        url: i.url,
        connections: i.ioNamespace.sockets.size
      }))
    });
  }
  stop(callback) {
    if (!this.io) return;
    this.io.close(callback);
  }
  registerIntegration({
    integrationName,
    handlers = [],
    onClientConnect,
    onClientDisconnect
  }) {
    if (!this.io) return;
    let integration = this.activeIntegrations[integrationName];
    if (integration) {
      integration.handlers = integration.handlers.concat(handlers);
      onClientConnect && integration.onClientConnect.push(onClientConnect);
      onClientDisconnect && integration.onClientDisconnect.push(onClientDisconnect);
      for (const [, socket] of integration.ioNamespace.sockets) {
        handlers.forEach(({ eventName, callback }) => {
          socket.on(eventName, callback);
        });
      }
    } else {
      this.activeIntegrations[integrationName] = {
        id: integrationName,
        url: `${getBlokdotsSocketIOServerAddress()}/${integrationName}`,
        handlers: [...handlers],
        ioNamespace: this.io.of("/" + integrationName),
        emit: (event, data) => {
          this.io?.of("/" + integrationName).emit(event, data);
          this.activeIntegrations[integrationName].handlers.forEach(
            ({ eventName, callback }) => {
              if (eventName === event) {
                callback(data);
              }
            }
          );
        },
        onClientConnect: onClientConnect ? [onClientConnect] : [],
        onClientDisconnect: onClientDisconnect ? [onClientDisconnect] : [],
        connections: 0
      };
      integration = this.activeIntegrations[integrationName];
      integration.ioNamespace.on("connection", (socket) => {
        integration.handlers.forEach(({ eventName, callback }) => {
          socket.on(eventName, callback);
        });
        integration.ioNamespace.emit("client-connect", {
          integration: integrationName,
          connections: integration.ioNamespace.sockets.size
        });
        integration.onClientConnect.forEach((h) => {
          h({
            integration: integrationName,
            connections: integration.ioNamespace.sockets.size
          });
        });
        this.emitInfo();
        socket.on("disconnect", (reason) => {
          integration.ioNamespace.emit("client-disconnect", {
            reason,
            integration: integrationName,
            connections: integration.ioNamespace.sockets.size
          });
          integration.onClientDisconnect.forEach((h) => {
            h({
              reason,
              integration: integrationName,
              connections: integration.ioNamespace.sockets.size
            });
          });
          this.emitInfo();
        });
      });
      this.emitInfo();
    }
    return {
      ...integration,
      connections: integration.ioNamespace.sockets.size
    };
  }
  unregisterIntegration({
    integrationName,
    handlers = [],
    onClientConnect,
    onClientDisconnect
  }) {
    const integration = this.activeIntegrations[integrationName];
    if (!integration) {
      return;
    }
    integration.handlers = integration.handlers.filter(
      (h) => handlers.some(
        (hU) => hU.eventName === h.eventName && hU.callback === h.callback
      )
    );
    integration.onClientConnect = integration.onClientConnect.filter(
      (h) => h !== onClientConnect
    );
    integration.onClientDisconnect = integration.onClientDisconnect.filter(
      (h) => h !== onClientDisconnect
    );
    for (const [, socket] of integration.ioNamespace.sockets) {
      handlers.forEach(({ eventName, callback }) => {
        socket.off(eventName, callback);
      });
    }
    if (integration.handlers.length === 0) {
      integration.ioNamespace.disconnectSockets();
      this.io?._nsps.delete("/" + integrationName);
      delete this.activeIntegrations[integrationName];
      this.emitInfo();
    }
  }
}
let blokdotsSocketIOServer = null;
const getBlokdotsSocketIOServer = async () => {
  return new Promise((resolve) => {
    if (blokdotsSocketIOServer === null) {
      blokdotsSocketIOServer = new BlokdotsSocketIOServer();
      blokdotsSocketIOServer.init().then(() => {
        resolve(blokdotsSocketIOServer);
      });
    } else {
      resolve(blokdotsSocketIOServer);
    }
  });
};
const INTEGRATION_NAME = "figma";
class FigmaIntegration extends EventEmitter {
  constructor() {
    super();
    this.server;
    this.integration;
    getBlokdotsSocketIOServer().then((server) => {
      this.server = server;
      this.integration = server.registerIntegration({
        integrationName: INTEGRATION_NAME
      });
    });
  }
  /** Send a reaction command to the connected Figma prototype. */
  sendReaction(message) {
    console.log("sendReaction", message);
    this.emit("reaction", message);
    if (!this.integration) {
      console.error("Integration not initialized");
      return;
    }
    this.integration.emit("reaction", message);
  }
  /** Disconnect from the Figma integration server and release resources. */
  cleanUp() {
    this.server?.unregisterIntegration({
      integrationName: INTEGRATION_NAME
    });
  }
  /** Rotate a Figma layer by or to a given angle. */
  rotate(parameters) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "rotate",
      parameters: {
        value: parameters.value,
        relation: parameters.relation,
        origin: parameters.origin
      },
      timestamp: Date.now()
    });
  }
  /** Set the text content of a Figma layer. */
  setText(parameters) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "setText",
      parameters: { string: parameters.string },
      timestamp: Date.now()
    });
  }
  /** Move a Figma layer to or by a given x/y position. */
  setPosition(parameters) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "setPosition",
      parameters: {
        x: parameters.x,
        y: parameters.y,
        relation: parameters.relation
      },
      timestamp: Date.now()
    });
  }
  /** Set the opacity (0–100) of a Figma layer. */
  setOpacity(parameters) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "setOpacity",
      parameters: { value: parameters.value / 100 },
      timestamp: Date.now()
    });
  }
  /** Resize a Figma layer to or by a given width/height. */
  setSize(parameters) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "setSize",
      parameters: {
        width: parameters.width,
        height: parameters.height,
        relation: parameters.relation
      },
      timestamp: Date.now()
    });
  }
  /** Set the fill colour of a Figma layer. */
  setColor(parameters) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "setColor",
      parameters: { value: parameters.value },
      timestamp: Date.now()
    });
  }
}
class SocketIOIntegration extends EventEmitter {
  constructor(integrationName = "blokdots", messageEventName = "blokdots", format = { message: "msg", value: "val" }) {
    super();
    this.integrationName = integrationName;
    this.messageEventName = messageEventName;
    this.format = format;
    this.server;
    this.integration;
    this.onMessage = this.onMessage.bind(this);
    getBlokdotsSocketIOServer().then((server) => {
      this.server = server;
      this.integration = server.registerIntegration({
        integrationName: this.integrationName,
        handlers: [
          {
            eventName: this.messageEventName,
            callback: this.onMessage
          }
        ]
      });
    });
  }
  onMessage(data) {
    const message = {
      message: data[this.format.message],
      value: data[this.format.value] === void 0 || data[this.format.value] === null || data[this.format.value] === "" ? void 0 : !isNaN(+data[this.format.value]) ? +data[this.format.value] : data[this.format.value]
    };
    this.emit("received", message);
  }
  /** Send a message with an optional value to all connected Socket.IO clients. */
  send(message) {
    this.emit("send", message);
    this.integration?.ioNamespace.emit(this.messageEventName, {
      [this.format.message]: message.message,
      [this.format.value]: message.value
    });
  }
  /** Disconnect from the Socket.IO server and release all event handlers. */
  cleanUp() {
    this.server?.unregisterIntegration({
      integrationName: this.integrationName,
      handlers: [
        {
          eventName: this.messageEventName,
          callback: this.onMessage
        }
      ]
    });
  }
}
class Counter extends EventEmitter {
  constructor(initialValue = 0) {
    super();
    this.value = initialValue;
  }
  /** Increment the counter by 1. */
  countUp() {
    this.value++;
    this.emit("change", this.value);
  }
  /** Decrement the counter by 1. */
  countDown() {
    this.value--;
    this.emit("change", this.value);
  }
  /** Set the counter to a specific value. */
  setCountTo(value) {
    this.value = value;
    this.emit("change", this.value);
  }
}
class SignalTower extends EventEmitter {
  constructor() {
    super();
  }
  /** Broadcast a message to any listeners on this Signal Tower. */
  send(message) {
    this.value = message;
    this.emit("send", this.value);
  }
}
class Timer extends EventEmitter {
  constructor(value = 0) {
    super();
    this.value = value * 1e3;
    this.interval;
  }
  startInterval() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(() => {
      this.value += 50;
      this.emit("change", this.value / 1e3);
      this.emit("tick", this.value / 1e3);
    }, 50);
  }
  /** Start counting elapsed time. Has no effect if already running. */
  start() {
    this.emit("start", this.value / 1e3);
    if (this.interval) {
      return;
    }
    this.startInterval();
  }
  /** Stop counting elapsed time. */
  stop() {
    clearInterval(this.interval);
    this.interval = void 0;
    this.emit("stop", this.value / 1e3);
  }
  /** Reset elapsed time to zero. Restarts the interval if the timer was running. */
  reset() {
    this.value = 0;
    this.emit("change", this.value / 1e3);
    this.emit("reset", 0);
    if (this.interval) {
      this.startInterval();
    }
  }
  /** Set elapsed time to a specific value in seconds. */
  setTo(value) {
    this.value = value * 1e3;
    this.emit("change", this.value / 1e3);
    this.emit("set", this.value / 1e3);
  }
}
class Metronome extends EventEmitter {
  constructor(frequency = 1e3) {
    super();
    this.frequency = frequency;
  }
  /**
   * Start the tick interval
   */
  startTickInterval() {
    this.interval = setInterval(() => {
      this.emit("tick", {
        timestamp: Date.now(),
        frequency: this.frequency
      });
    }, this.frequency);
  }
  /** Start the metronome. Emits a `tick` event immediately and then at every interval. */
  start() {
    if (this.interval) {
      return;
    }
    this.emit("start", {
      timestamp: Date.now(),
      frequency: this.frequency
    });
    this.emit("tick", {
      timestamp: Date.now(),
      frequency: this.frequency
    });
    this.startTickInterval();
  }
  /** Stop the metronome. */
  stop() {
    clearInterval(this.interval);
    this.interval = void 0;
    this.emit("stop");
  }
  /** Update the tick interval in milliseconds. Takes effect immediately if already running. */
  setFrequency(frequency) {
    if (this.frequency !== frequency) {
      this.frequency = frequency;
      if (this.interval) {
        clearInterval(this.interval);
        this.startTickInterval();
      }
    }
  }
}
class ComponentBase extends EventEmitter {
  constructor(options) {
    super();
    this.board = options.board;
    this.componentId = `${options.id}`;
  }
  setBoard(board) {
    this.board = board;
  }
  /**
   * Get the current value of the component.
   */
  get value() {
    return this._value;
  }
  /**
   * Ensure that the board is set. Throws an error if not.
   * @throws Error if board is not set
   */
  ensureBoardSet() {
    if (!this.board) throw new Error("Board not set");
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  on(event, listener) {
    return super.on(event, listener);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  once(event, listener) {
    return super.once(event, listener);
  }
  removeListener(event, listener) {
    return super.removeListener(event, listener);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  off(event, listener) {
    return super.off(event, listener);
  }
  removeAllListeners(event) {
    return super.removeAllListeners(event);
  }
  /**
   * Emit a change event with the new value.
   */
  emitChange(value) {
    this._value = value;
    this.emit("change", value);
  }
  /**
   * Cleanup resources when board closes.
   * Override in subclasses to add component-specific cleanup.
   */
  cleanup() {
    this.removeAllListeners();
  }
}
const positionSlots = ({
  p,
  i,
  type,
  angle,
  offsetX = 0,
  gapX = 0,
  offsetY = 0,
  gapY = 0
}) => {
  let pins = [];
  let isDoubleSlot = false;
  if (p === "I2C") {
    pins = ["SCL", "SDA"];
  } else {
    isDoubleSlot = p.length === 2;
    pins = [...p];
  }
  return {
    pins,
    doubleSlot: isDoubleSlot,
    x: offsetX + i * gapX,
    y: offsetY + i * gapY,
    type,
    angle
  };
};
({
  slots: [
    ...[
      [4, 5],
      [3, 4],
      [2, 3]
    ].map(
      (p, i) => positionSlots({
        p,
        i,
        offsetX: 15,
        gapX: 12,
        offsetY: 5,
        type: "upright",
        angle: "vertical"
      })
    ),
    ...[
      [8, 9],
      [7, 8],
      [6, 7],
      [5, 6]
    ].map(
      (p, i) => positionSlots({
        p,
        i,
        offsetX: 15,
        gapX: 12,
        offsetY: 19,
        type: "upright",
        angle: "vertical"
      })
    ),
    ...["I2C", "I2C", "I2C", "I2C"].map(
      (p, i) => positionSlots({
        p,
        i,
        offsetX: 15,
        gapX: 12,
        offsetY: 33,
        type: "upright",
        angle: "vertical"
      })
    ),
    ...[
      ["A3", "A4"],
      ["A2", "A3"],
      ["A1", "A2"],
      ["A0", "A1"]
    ].map(
      (p, i) => positionSlots({
        p,
        i,
        offsetX: 3,
        offsetY: 1,
        gapY: 11,
        type: "flat",
        angle: "vertical"
      })
    )
  ]
});
({
  slots: [
    ...[
      [4, 5],
      [3, 4],
      [2, 3]
    ].map(
      (p, i) => positionSlots({
        p,
        i,
        offsetX: 17,
        gapX: 12,
        offsetY: 8,
        type: "upright",
        angle: "vertical"
      })
    ),
    ...[
      ["A6", "A7"],
      [7, 8],
      [6, 7],
      [5, 6]
    ].map(
      (p, i) => positionSlots({
        p,
        i,
        offsetX: 17,
        gapX: 12,
        offsetY: 21,
        type: "upright",
        angle: "vertical"
      })
    ),
    ...[["A2", "A3"], ["A0", "A1"], "I2C", "I2C"].map(
      (p, i) => positionSlots({
        p,
        i,
        offsetX: 17,
        gapX: 12,
        offsetY: 34,
        type: "upright",
        angle: "vertical"
      })
    )
  ]
});
({
  slots: [
    ...["I2C", "I2C", [12, 13], [10, 11], [8, 9], [6, 7], [4, 5], [2, 3]].map(
      (p, i) => positionSlots({
        p,
        i,
        offsetX: 19,
        gapX: 9,
        offsetY: 10,
        type: "upright",
        angle: "vertical"
      })
    ),
    ...[
      ["A0", "A1"],
      ["A2", "A3"],
      ["A4", "A5"],
      ["A6", "A7"],
      ["A8", "A9"],
      ["A10", "A11"],
      ["A12", "A13"],
      ["A14", "A15"]
    ].map(
      (p, i) => positionSlots({
        p,
        i,
        offsetX: 19,
        gapX: 9,
        offsetY: 34,
        type: "upright",
        angle: "vertical"
      })
    ),
    ...["I2C", [14, 15], [16, 17], [18, 19]].map(
      (p, i) => positionSlots({
        p,
        i,
        offsetX: 5,
        gapY: 11,
        offsetY: 1,
        type: "flat",
        angle: "vertical"
      })
    )
  ]
});
({
  slots: [
    ...[["A5", "A6"], ["A4"], ["A3"], ["A2"], ["A1"], ["A0"]].map(
      (p, i) => positionSlots({
        p,
        i,
        offsetX: -4,
        gapX: 11,
        offsetY: -10,
        type: "upright",
        angle: "horizontal"
      })
    ),
    ...["I2C", [5, 6], [4], [3], [2], [1], [0]].map(
      (p, i) => positionSlots({
        p,
        i,
        offsetX: -15,
        gapX: 11,
        offsetY: 30,
        type: "upright",
        angle: "horizontal"
      })
    )
  ]
});
({
  slots: [
    ...[
      [2, 3],
      [4, 5],
      [6, 7]
    ].map(
      (p, i) => positionSlots({
        p,
        i,
        offsetX: 1,
        gapX: 11,
        offsetY: -10,
        type: "upright",
        angle: "horizontal"
      })
    ),
    ...[["A0", "A1"], ["A2", "A3"], ["A6", "A7"], "I2C"].map(
      (p, i) => positionSlots({
        p,
        i,
        offsetX: 1,
        gapX: 11,
        offsetY: 21,
        type: "upright",
        angle: "horizontal"
      })
    )
  ]
});
const toDigitalPin = (pin) => {
  if (typeof pin === "string" && pin.startsWith("D")) {
    return parseInt(pin.slice(1), 10);
  }
  return pin;
};
const OLED_WIDTH = 128;
const OLED_HEIGHT = 64;
const COMMAND_WRITE = "W";
const RESPONSE_DATA = "D";
const RESPONSE_SYSTEM = "S";
const DELIMITER = ":";
var SystemMessage = /* @__PURE__ */ ((SystemMessage2) => {
  SystemMessage2["READY"] = "READY";
  SystemMessage2["ERROR"] = "ERROR";
  SystemMessage2["ACK"] = "ACK";
  SystemMessage2["HASH"] = "HASH";
  return SystemMessage2;
})(SystemMessage || {});
const SYSTEM_CMD_QUERY_HASH = `${RESPONSE_SYSTEM}${DELIMITER}${"HASH"}?`;
const BAUD_RATE = 57600;
const LIVE_MODE_IDENTIFIER = "BLOKDOTS_LIVE_MODE";
class SerialProtocol extends EventEmitter {
  constructor(port) {
    super();
    this.writeChain = Promise.resolve();
    this.port = port;
    this.parser = port.pipe(new ReadlineParser({ delimiter: "\n" }));
    this.parser.on("data", (line) => this.parseLine(line));
  }
  static {
    this.MAX_LINE_LEN = 60;
  }
  static {
    this.CHUNK_OVERHEAD = 8;
  }
  /**
   * Parse incoming line from Arduino
   */
  parseLine(line) {
    line = line.trim();
    if (!line) return;
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
        if (parts.length >= 2) {
          this.emit("data", parts[0], parts.slice(1).join(DELIMITER));
        }
        break;
    }
  }
  /**
   * Handle system messages (S:...)
   */
  handleSystemMessage(parts) {
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
        this.emit("hash", parts[1] || "");
        break;
      case "CONFIG":
        if (parts[1] === "COUNT") {
          this.emit("config-count", parseInt(parts[2] || "0", 10));
        } else {
          const index = parseInt(parts[1] || "0", 10);
          const pin = parts[2];
          const type2 = parts[3];
          const optionsJson = parts.slice(4).join(":");
          this.emit("config-component", {
            index,
            pin,
            type: type2,
            options: optionsJson
          });
        }
        break;
      case "VERSION":
        const versionString = parts.slice(1).join(":");
        this.emit("version", versionString);
        break;
    }
  }
  /**
   * Handle data messages (D:...)
   * Format: D:ID:VALUE or D:ID:VALUE1:VALUE2:...
   */
  handleDataMessage(parts) {
    if (parts.length < 2) return;
    const id = parts[0];
    const value = parts.length === 2 ? parts[1] : parts.slice(1);
    this.emit("data", id, value);
  }
  /**
   * Send command to Arduino
   */
  send(command) {
    if (!this.port.isOpen) {
      throw new Error("Serial port is not open");
    }
    this.writeChain = this.writeChain.then(async () => {
      const lines = this.buildOutgoingLines(command);
      for (const line of lines) {
        await this.writeLine(line);
      }
    });
  }
  writeLine(line) {
    console.log(`↗ [Serial] ${line}`);
    return new Promise((resolve, reject) => {
      this.port.write(`${line}
`, (err) => {
        if (err) return reject(err);
        this.port.drain((err2) => err2 ? reject(err2) : resolve());
      });
    });
  }
  buildOutgoingLines(command) {
    if (command.length <= SerialProtocol.MAX_LINE_LEN) return [command];
    const parts = command.split(DELIMITER);
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
      SerialProtocol.MAX_LINE_LEN - (chunkPrefix.length + SerialProtocol.CHUNK_OVERHEAD)
    );
    const chunks = chunkPercentSafe(args, maxChunkLen);
    return [begin, ...chunks.map((c) => `${chunkPrefix}${c}`), end];
  }
  /**
   * Send write command for digital/analog pin
   */
  writePin(pin, value) {
    this.send(`${COMMAND_WRITE}${DELIMITER}${pin}${DELIMITER}${value}`);
  }
  /**
   * Send component command (W: protocol)
   */
  sendComponentCommand(id, command, ...args) {
    const argsStr = args.length > 0 ? DELIMITER + args.join(DELIMITER) : "";
    this.send(
      `${COMMAND_WRITE}${DELIMITER}${id}${DELIMITER}${command}${argsStr}`
    );
  }
  /**
   * Close protocol and cleanup
   */
  close() {
    this.parser.removeAllListeners();
    this.removeAllListeners();
  }
}
function chunkPercentSafe(s, maxLen) {
  const out = [];
  let i = 0;
  while (i < s.length) {
    let end = Math.min(i + maxLen, s.length);
    if (end < s.length) {
      if (s[end - 1] === "%") end -= 1;
      else if (end - 2 >= i && s[end - 2] === "%") end -= 2;
      if (end > i + 2 && end < s.length && s[end - 3] === "%" && parseInt(s.slice(end - 2, end), 16) >= 128 && s[end] === "%") {
        end -= 3;
      }
    }
    if (end <= i) end = Math.min(i + maxLen, s.length);
    out.push(s.slice(i, end));
    i = end;
  }
  return out;
}
const rgbToHex = (r, g, b) => {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : null;
};
const clamp = (value, min, max) => {
  return Math.max(min, Math.min(max, value));
};
const mapValue = (value, inMin, inMax, outMin, outMax, constrain = true) => {
  const mappedValue = (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  if (constrain) {
    return clamp(
      mappedValue,
      Math.min(outMin, outMax),
      Math.max(outMin, outMax)
    );
  }
  return mappedValue;
};
const invertValue = (value, max) => {
  return max - value;
};
const encodeProtocolString = (input) => {
  const s = input ?? "";
  const utf8 = new TextEncoder().encode(s);
  let out = "";
  for (const b of utf8) {
    const ch = String.fromCharCode(b);
    const isAZ = b >= 65 && b <= 90;
    const isaz = b >= 97 && b <= 122;
    const is09 = b >= 48 && b <= 57;
    const isUnreserved = isAZ || isaz || is09 || ch === "-" || ch === "_" || ch === "." || ch === "~";
    if (isUnreserved) {
      out += ch;
    } else {
      out += "%" + b.toString(16).toUpperCase().padStart(2, "0");
    }
  }
  return out;
};
const utils = {
  rgbToHex,
  hexToRgb,
  clamp,
  invertValue,
  mapValue,
  encodeProtocolString
};
class DigitalActor extends ComponentBase {
  constructor(options) {
    super(options);
    this._value = 0;
    this._isAnimating = false;
    this.pin = toDigitalPin(options.pin);
    this.invert = options.invert ?? false;
    this.board.registerComponent(this.pin, this);
  }
  /**
   * Stop any running animation and reset the animation flag.
   */
  stopAnimating() {
    this._isAnimating = false;
  }
  writeValue(value) {
    this.board?.sendCommand(`${COMMAND_WRITE}:${this.pin}:${value}`);
    this.emitChange(value);
  }
  handleData(data) {
    const value = typeof data === "string" ? parseInt(data, 10) : Number(data);
    if (value !== this._value) {
      this.emitChange(value);
    }
  }
  cleanup() {
    this.stop();
    super.cleanup();
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  on(event, listener) {
    if (event !== void 0 && listener !== void 0) {
      super.on(event, listener);
      return this;
    }
    this.ensureBoardSet();
    const writeValue = this.invert ? 0 : 1;
    this.writeValue(writeValue);
    this.stopAnimating();
    return this;
  }
  /**
   * Turn the component off
   */
  off() {
    this.ensureBoardSet();
    const writeValue = this.invert ? 1 : 0;
    this.writeValue(writeValue);
    this.stopAnimating();
    return this;
  }
  /**
   * Toggle the component state
   */
  toggle() {
    if (this._value === 0) {
      return this.on();
    } else {
      return this.off();
    }
  }
  /**
   * Set the value of the component
   * @param value - 0 (off) or 1 (on)
   */
  set(value) {
    this.ensureBoardSet();
    const writeValue = this.invert ? value === 0 ? 1 : 0 : value;
    this.writeValue(writeValue);
    this.stopAnimating();
    return this;
  }
  /**
   * Blink the component at a given interval (Arduino-side animation)
   * @param interval - Blink interval in milliseconds (default: 500)
   */
  blink(interval = 500) {
    this.ensureBoardSet();
    this.board.sendCommand(`${COMMAND_WRITE}:${this.pin}:BLINK:${interval}`);
    this._isAnimating = true;
    return this;
  }
  /**
   * Stop any running animation (blink, pulse)
   */
  stop() {
    if (!this.board) return this;
    if (this._isAnimating) {
      this.board.sendCommand(`${COMMAND_WRITE}:${this.pin}:STOP`);
      this._isAnimating = false;
    }
    return this;
  }
  updateOptions(options) {
    if (options.invert !== void 0) this.invert = options.invert;
  }
  // --- Getters ---
  /**
   * Check if the component is currently on
   */
  get isOn() {
    return this._value === 1;
  }
  /**
   * Check if an animation is running
   */
  get isAnimating() {
    return this._isAnimating;
  }
}
class AnalogActor extends DigitalActor {
  constructor(options) {
    super(options);
    this.minValue = options?.minValue ?? 0;
    this.maxValue = options?.maxValue ?? 255;
  }
  /**
   * Override to send SET command for analog values
   */
  writeValue(value) {
    const intValue = Math.round(value);
    this.board?.sendCommand(`${COMMAND_WRITE}:${this.pin}:SET:${intValue}`);
    this.emitChange(intValue);
  }
  /**
   * Clamp a value between minValue and maxValue.
   */
  clampValue(value) {
    return clamp(value, this.minValue, this.maxValue);
  }
  on(event, listener) {
    if (event !== void 0 && listener !== void 0) {
      return super.on(event, listener);
    }
    this.ensureBoardSet();
    const writeValue = this.invert ? this.minValue : this.maxValue;
    this.writeValue(writeValue);
    this.stopAnimating();
    return this;
  }
  /**
   * Turn the component off to min value
   */
  off() {
    this.ensureBoardSet();
    const writeValue = this.invert ? this.maxValue : this.minValue;
    this.writeValue(writeValue);
    this.stopAnimating();
    return this;
  }
  /**
   * Toggle the component between min and max values
   */
  toggle() {
    if (this._value <= this.minValue) {
      return this.on();
    } else {
      return this.off();
    }
  }
  /**
   * Set the value of the component
   * @param value - Value between minValue and maxValue (0-255 by default)
   */
  set(value) {
    this.ensureBoardSet();
    const clampedValue = this.clampValue(value);
    const writeValue = this.invert ? this.maxValue - clampedValue : clampedValue;
    this.writeValue(writeValue);
    this.stopAnimating();
    return this;
  }
  /**
   * Pulse the component at a given interval (Arduino-side animation)
   * @param interval - Pulse interval in milliseconds (default: 1000)
   */
  pulse(interval = 1e3) {
    this.ensureBoardSet();
    this.board.sendCommand(`${COMMAND_WRITE}:${this.pin}:PULSE:${interval}`);
    this._isAnimating = true;
    return this;
  }
  /**
   * Fade to a target value over time (Arduino-side animation)
   * @param targetValue - Target brightness value
   * @param duration - Duration in milliseconds (default: 1000)
   */
  fadeTo(targetValue, duration = 1e3) {
    this.ensureBoardSet();
    const clampedValue = this.clampValue(targetValue);
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.pin}:FADETO:${clampedValue}:${duration}`
    );
    this._isAnimating = true;
    return this;
  }
  /**
   * Check if the component is currently on (above minimum value)
   */
  get isOn() {
    return this._value > this.minValue;
  }
}
class AnalogSensor extends ComponentBase {
  constructor(options) {
    super(options);
    this._value = 0;
    this.pin = options.pin;
    this.invert = options.invert ?? false;
    this.minValue = options?.minValue ?? 0;
    this.maxValue = options?.maxValue ?? 1023;
    this.board.registerComponent(this.pin, this);
    this.threshold = options?.threshold ?? 1;
  }
  handleData(data) {
    const rawValue = typeof data === "string" ? parseInt(data, 10) : Number(data);
    const value = this.invert ? invertValue(rawValue, this.maxValue) : rawValue;
    if (Math.abs(value - this._value) >= this.threshold) {
      this.emitChange(value);
    }
  }
  updateOptions(options) {
    if (options.threshold !== void 0) this.threshold = options.threshold;
    if (options.invert !== void 0) this.invert = options.invert;
  }
}
class I2cComponentBase extends ComponentBase {
  constructor(options) {
    super(options);
    this.componentId = options.pin;
    this.board.registerComponent(this.componentId, this);
  }
  /**
   * The resolved I2C pin ID (e.g. "i2c-0").
   * Useful for logging or passing back to the Arduino sketch.
   */
  get i2cId() {
    return this.componentId;
  }
}
class Accelerometer extends I2cComponentBase {
  constructor(options) {
    super(options);
    this.address = options.address ?? 25;
  }
  /**
   * Handle incoming data from Arduino.
   * Expected format: [pitch, roll] as string array or string "pitch:roll"
   * or object {pitch: number, roll: number}
   */
  handleData(data) {
    let pitch;
    let roll;
    if (Array.isArray(data) && data.length === 2) {
      pitch = parseInt(data[0], 10);
      roll = parseInt(data[1], 10);
    } else if (typeof data === "string" && data.includes(":")) {
      const parts = data.split(":");
      pitch = parseInt(parts[0], 10);
      roll = parseInt(parts[1], 10);
    } else if (typeof data === "object" && data !== null && "pitch" in data && "roll" in data) {
      const accelData = data;
      pitch = accelData.pitch;
      roll = accelData.roll;
    } else {
      return;
    }
    const value = { pitch, roll };
    this.emitChange(value);
  }
  /**
   * Get current pitch in degrees.
   */
  get pitch() {
    return this._value?.pitch ?? 0;
  }
  /**
   * Get current roll in degrees.
   */
  get roll() {
    return this._value?.roll ?? 0;
  }
}
class Barometer extends I2cComponentBase {
  /**
   * Handle incoming data from Arduino.
   * Expected format: [pressurehPa, temperatureC] as string array (from D:i2c-0:p:t)
   * or string "pressure:temperature", or object {pressure, temperature}.
   */
  handleData(data) {
    let pressure;
    let temperature;
    let altitude;
    if (Array.isArray(data) && data.length >= 2) {
      pressure = parseFloat(data[0]);
      temperature = parseFloat(data[1]);
      altitude = data.length >= 3 ? parseFloat(data[2]) : 0;
    } else if (typeof data === "string" && data.includes(":")) {
      const parts = data.split(":");
      if (parts.length < 2) return;
      pressure = parseFloat(parts[0]);
      temperature = parseFloat(parts[1]);
      altitude = parts.length >= 3 ? parseFloat(parts[2]) : 0;
    } else if (typeof data === "object" && data !== null && "pressure" in data && "temperature" in data) {
      const barometerData = data;
      pressure = barometerData.pressure;
      temperature = barometerData.temperature;
      altitude = barometerData.altitude ?? 0;
    } else {
      return;
    }
    if (isNaN(pressure) || isNaN(temperature)) return;
    const value = {
      pressure,
      temperature,
      altitude: isNaN(altitude) ? 0 : altitude
    };
    this.emitChange(value);
  }
  /**
   * Get current pressure in hPa.
   */
  get pressure() {
    return this._value?.pressure ?? 0;
  }
  /**
   * Get current temperature in °C.
   */
  get temperature() {
    return this._value?.temperature ?? 0;
  }
  /**
   * Get current altitude in meters.
   */
  get altitude() {
    return this._value?.altitude ?? 0;
  }
}
const DEFAULT_HOLD_TIME = 500;
class Button extends ComponentBase {
  constructor(options) {
    super(options);
    this.holdTimer = null;
    this._value = 0;
    this.pin = toDigitalPin(options.pin);
    this.invert = options.invert ?? false;
    this.holdTime = options.holdTime ?? DEFAULT_HOLD_TIME;
    this.board.registerComponent(this.pin, this);
  }
  handleData(data) {
    const rawValue = typeof data === "string" ? parseInt(data, 10) : Number(data);
    const value = this.invert ? 1 - rawValue : rawValue;
    if (value !== this._value) {
      const previousValue = this._value;
      this.emitChange(value);
      if (value === 1 && previousValue === 0) {
        this.emit("down");
        this.emit("press");
        this.startHoldTimer();
      } else if (value === 0 && previousValue === 1) {
        this.clearHoldTimer();
        this.emit("up");
        this.emit("release");
      }
    }
  }
  startHoldTimer() {
    this.clearHoldTimer();
    this.holdTimer = setTimeout(() => {
      if (this._value === 1) {
        this.emit("held");
      }
    }, this.holdTime);
  }
  clearHoldTimer() {
    if (this.holdTimer) {
      clearTimeout(this.holdTimer);
      this.holdTimer = null;
    }
  }
  cleanup() {
    this.clearHoldTimer();
    super.cleanup();
  }
  /** Update runtime options such as invert direction. */
  updateOptions(options) {
    if (options.invert !== void 0) this.invert = options.invert;
  }
  // --- Getters ---
  /**
   * Check if the button is currently pressed
   */
  get isPressed() {
    return this._value === 1;
  }
}
const NOTE_HZ = {
  C2: 65,
  "C#2": 69,
  D2: 73,
  "D#2": 78,
  E2: 82,
  F2: 87,
  "F#2": 92,
  G2: 98,
  "G#2": 104,
  A2: 110,
  "A#2": 117,
  B2: 123,
  C3: 131,
  "C#3": 139,
  D3: 147,
  "D#3": 156,
  E3: 165,
  F3: 175,
  "F#3": 185,
  G3: 196,
  "G#3": 208,
  A3: 220,
  "A#3": 233,
  B3: 247,
  C4: 262,
  "C#4": 277,
  D4: 294,
  "D#4": 311,
  E4: 330,
  F4: 349,
  "F#4": 370,
  G4: 392,
  "G#4": 415,
  A4: 440,
  "A#4": 466,
  B4: 494,
  C5: 523,
  "C#5": 554,
  D5: 587,
  "D#5": 622,
  E5: 659,
  F5: 698,
  "F#5": 740,
  G5: 784,
  "G#5": 831,
  A5: 880,
  "A#5": 932,
  B5: 988,
  C6: 1047,
  "C#6": 1109,
  D6: 1175,
  "D#6": 1245,
  E6: 1319,
  F6: 1397,
  "F#6": 1480,
  G6: 1568,
  "G#6": 1661,
  A6: 1760,
  "A#6": 1865,
  B6: 1976
};
function noteToHz(note) {
  const normalized = /\d$/.test(note) ? note : `${note}4`;
  return NOTE_HZ[normalized] ?? 0;
}
function fracToMs(fraction, bpm) {
  if (bpm === 0) bpm = 60;
  const quarterMs = 6e4 / bpm;
  const wholeMs = quarterMs * 4;
  return Math.max(1, Math.round(wholeMs * fraction));
}
function clampGapMs(stepMs) {
  let g = Math.floor(stepMs * 8 / 100);
  if (g < 2) g = 2;
  if (g > 20) g = 20;
  if (g * 2 >= stepMs) g = Math.floor(stepMs / 2);
  return g;
}
class Buzzer extends ComponentBase {
  constructor(options) {
    super(options);
    this.songTimer = null;
    this.componentId = String(options.pin);
    this.board.registerComponent(this.componentId, this);
  }
  handleData(_data) {
  }
  send(cmd) {
    this.board.sendCommand(`${COMMAND_WRITE}:${this.componentId}:${cmd}`);
  }
  cancelSong() {
    if (this.songTimer !== null) {
      clearTimeout(this.songTimer);
      this.songTimer = null;
    }
  }
  /**
   * Play a specific frequency (Hz) for a duration (ms). Non-blocking – JS timer schedules
   * the silence; the Arduino also enforces the duration via its own tick loop.
   * hz = 0 plays silence for the duration.
   */
  playFrequency(hz, durationMs) {
    this.cancelSong();
    this.send(
      `FREQ:${Math.round(Math.max(0, hz))}:${Math.round(Math.max(1, durationMs))}`
    );
  }
  /**
   * Play a musical note for a duration (ms).
   * null or unknown note is treated as silence.
   */
  playNote(note, durationMs) {
    const hz = note ? noteToHz(note) ?? 0 : 0;
    this.playFrequency(hz, durationMs);
  }
  /**
   * Play a song by sequencing notes one at a time from the Node.js side.
   * Each note is sent as a FREQ command; the next note is scheduled after the
   * previous note's duration. Calling stop() at any time cancels pending notes.
   *
   * @param steps - Array of [note|hz|null, wholeNoteFraction]
   * @param bpm - BPM (quarter note = 1 beat)
   * @param onComplete - Optional callback fired when the last note finishes naturally
   */
  playSong(steps, bpm, onComplete) {
    this.cancelSong();
    this.sequenceSong(steps, 0, bpm, onComplete ?? null);
  }
  /**
   * Stop any playing tone or in-progress song immediately.
   */
  stop() {
    this.cancelSong();
    this.send("STOP");
  }
  cleanup() {
    this.cancelSong();
    super.cleanup();
  }
  sequenceSong(steps, index, bpm, onComplete) {
    if (index >= steps.length) {
      this.send("STOP");
      onComplete?.();
      return;
    }
    const [note, fraction] = steps[index];
    const durationMs = fracToMs(fraction, bpm);
    let hz;
    if (note === null) {
      hz = 0;
    } else if (typeof note === "number") {
      hz = note;
    } else {
      hz = noteToHz(note);
    }
    const gapMs = hz > 0 ? clampGapMs(durationMs) : 0;
    const playMs = durationMs - gapMs;
    this.send(
      `FREQ:${Math.round(Math.max(0, hz))}:${Math.round(Math.max(1, playMs))}`
    );
    this.songTimer = setTimeout(() => {
      this.songTimer = null;
      this.sequenceSong(steps, index + 1, bpm, onComplete);
    }, durationMs);
  }
}
class CO2Sensor extends ComponentBase {
  constructor(options) {
    super(options);
    this.componentId = options.rxPin;
    if (this.board) {
      this.board.registerComponent(this.componentId, this);
    }
  }
  handleData(data) {
    let ppm;
    if (typeof data === "string") {
      ppm = parseInt(data, 10);
    } else if (typeof data === "number") {
      ppm = Math.round(data);
    } else {
      return;
    }
    if (isNaN(ppm)) return;
    this.emitChange(ppm);
  }
  get ppm() {
    return this._value ?? 0;
  }
}
class ColorSensor extends I2cComponentBase {
  constructor(options) {
    super(options);
    this.gain = options.gain;
    this.integrationTime = options.integrationTime;
    this.sampleInterval = options.sampleInterval;
  }
  /**
   * Handle incoming data from Arduino.
   * Expected format: [r, g, b] as string array (from D:i2c-0:r:g:b)
   * or string "r:g:b", or object {r, g, b}.
   */
  handleData(data) {
    let r;
    let g;
    let b;
    if (Array.isArray(data) && data.length === 3) {
      r = parseInt(data[0], 10);
      g = parseInt(data[1], 10);
      b = parseInt(data[2], 10);
    } else if (typeof data === "string" && data.includes(":")) {
      const parts = data.split(":");
      if (parts.length < 3) return;
      r = parseInt(parts[0], 10);
      g = parseInt(parts[1], 10);
      b = parseInt(parts[2], 10);
    } else if (typeof data === "object" && data !== null && "r" in data && "g" in data && "b" in data) {
      const colorData = data;
      r = colorData.r;
      g = colorData.g;
      b = colorData.b;
    } else {
      return;
    }
    const value = { r, g, b };
    this.emitChange(value);
  }
  /**
   * Get current red channel (0–255).
   */
  get r() {
    return this._value?.r ?? 0;
  }
  /**
   * Get current green channel (0–255).
   */
  get g() {
    return this._value?.g ?? 0;
  }
  /**
   * Get current blue channel (0–255).
   */
  get b() {
    return this._value?.b ?? 0;
  }
}
class Encoder extends ComponentBase {
  constructor(options) {
    super(options);
    this._value = 0;
    this.lastValue = 0;
    this.pin1 = toDigitalPin(options.pin1);
    this.pin2 = toDigitalPin(options.pin2);
    this.invert = options.invert ?? false;
    this._value = options.initialValue ?? 0;
    this.lastValue = this._value;
    this.board.registerComponent(this.pin1, this);
  }
  handleData(data) {
    const rawValue = typeof data === "string" ? parseInt(data, 10) : Number(data);
    const value = this.invert ? -rawValue : rawValue;
    if (value !== this._value) {
      const previousValue = this._value;
      this.emitChange(value);
      if (value > previousValue) {
        this.emit("up");
      } else if (value < previousValue) {
        this.emit("down");
      }
    }
  }
  /** Update runtime options such as invert direction. */
  updateOptions(options) {
    if (options.invert !== void 0) this.invert = options.invert;
  }
  /**
   * Set the encoder count to a specific value.
   * Note: This updates the local state but does not communicate
   * with the Arduino. For hardware reset, use a serial command.
   */
  setCountTo(value) {
    if (value !== this._value) {
      this.emitChange(value);
    }
  }
  /** Increment the encoder count by 1. */
  countUp() {
    this.setCountTo(this._value + 1);
  }
  /** Decrement the encoder count by 1. */
  countDown() {
    this.setCountTo(this._value - 1);
  }
  /**
   * Get the current encoder count value
   */
  get count() {
    return this._value ?? 0;
  }
}
class HapticTrack {
  constructor(sendFn, trackNumber) {
    this.sendFn = sendFn;
    this.trackNumber = trackNumber;
  }
  /** Activate the haptic track (continuous). */
  play() {
    this.sendFn(`PLAY${this.trackNumber}`);
  }
  /** Deactivate the haptic track. */
  stop() {
    this.sendFn(`STOP${this.trackNumber}`);
  }
  /** Trigger the haptic track for a specific duration (ms), then auto-stop. */
  trigger(durationMs) {
    this.sendFn(
      `TRIGGER${this.trackNumber}:${Math.round(Math.max(1, durationMs))}`
    );
  }
}
class Hapticlabs extends ComponentBase {
  constructor(options) {
    super(options);
    this.componentId = String(options.pin1);
    const send = (cmd) => this.send(cmd);
    this.track1 = new HapticTrack(send, 1);
    this.track2 = new HapticTrack(send, 2);
    this.board.registerComponent(this.componentId, this);
  }
  handleData(_data) {
  }
  send(cmd) {
    this.board.sendCommand(`${COMMAND_WRITE}:${this.componentId}:${cmd}`);
  }
  stopAll() {
    this.send("STOPALL");
  }
  cleanup() {
    this.stopAll();
    super.cleanup();
  }
}
class Joystick extends ComponentBase {
  constructor(options) {
    super(options);
    this.pin1 = options.pin1;
    this.pin2 = options.pin2;
    this.invertX = options.invertX ?? false;
    this.invertY = options.invertY ?? false;
    this.range = options.range ?? 50;
    this.axisThreshold = options.axisThreshold ?? 6;
    this.detectButton = options.detectButton ?? true;
    this.componentId = this.pin1;
    if (this.board) {
      this.board.registerComponent(this.componentId, this);
    }
  }
  /**
   * Handle incoming data from Arduino.
   * Expected format: [x, y, pressed] as array or string "x:y:pressed"
   * where x and y are ALREADY TRANSFORMED values (-range to +range), and pressed is 0 or 1.
   * Arduino handles auto-calibration and transformation.
   */
  handleData(data) {
    let x;
    let y;
    let pressed;
    if (Array.isArray(data) && data.length === 3) {
      x = parseInt(data[0], 10);
      y = parseInt(data[1], 10);
      pressed = data[2] === "1" || data[2] === 1 || data[2] === true;
    } else if (typeof data === "string" && data.includes(":")) {
      const parts = data.split(":");
      x = parseInt(parts[0], 10);
      y = parseInt(parts[1], 10);
      pressed = parts[2] === "1" || parts[2] === "true";
    } else {
      return;
    }
    const value = { x, y, pressed };
    if (this._value && this._value.pressed !== pressed) {
      if (pressed) {
        this.emit("down");
      } else {
        this.emit("up");
      }
    }
    this.emitChange(value);
  }
  /**
   * Get current X position.
   */
  get x() {
    return this._value?.x ?? 0;
  }
  /**
   * Get current Y position.
   */
  get y() {
    return this._value?.y ?? 0;
  }
  /**
   * Get current button press state.
   */
  get pressed() {
    return this._value?.pressed ?? false;
  }
}
class Led extends DigitalActor {
  /**
   * Set the brightness of the LED (0 = off, 1 = on).
   * Alias for on()/off() with LED-specific naming.
   * @param value - 0 (off) or 1 (on)
   */
  brightness(value) {
    if (value === 1) {
      return this.on();
    } else {
      return this.off();
    }
  }
}
class MotorChannel {
  constructor(sendFn, channel) {
    this.sendFn = sendFn;
    this.channel = channel;
  }
  /**
   * Run the motor at the given signed speed.
   * @param speed -255 (full reverse) to 255 (full forward). 0 = stop.
   */
  run(speed) {
    this.sendFn(`${this.channel}:${Math.round(speed)}`);
  }
  /**
   * Stop the motor (equivalent to `run(0)`).
   */
  stop() {
    this.run(0);
  }
}
class MotorDriver extends ComponentBase {
  constructor(options) {
    super(options);
    this.componentId = options.pin;
    const send = (cmd) => this.send(cmd);
    this.M1 = new MotorChannel(send, "M1");
    this.M2 = new MotorChannel(send, "M2");
    this.board.registerComponent(this.componentId, this);
  }
  handleData(_data) {
  }
  send(cmd) {
    this.board.sendCommand(`${COMMAND_WRITE}:${this.componentId}:${cmd}`);
  }
  /** Stop both motors immediately. */
  stopAll() {
    this.send("STOPALL");
  }
}
class LedDimmable extends AnalogActor {
  /**
   * Set the brightness of the LED.
   * Alias for set() with LED-specific naming.
   * @param value - Brightness value between minValue and maxValue (0-255 by default)
   */
  brightness(value) {
    return this.set(value);
  }
}
const DEFAULT_LCD_VALUE = {
  string: "blokdots",
  backgroundColor: "#F39C12"
};
class LCD extends I2cComponentBase {
  get valueSafe() {
    return this._value ?? DEFAULT_LCD_VALUE;
  }
  constructor(options) {
    super(options);
    this._value = DEFAULT_LCD_VALUE;
  }
  handleData(_data) {
  }
  // --- Hardware Control Methods ---
  /**
   * Draw text on the display using the shadow-diff streaming protocol.
   * Only changed character cells are rewritten, avoiding flicker.
   * Long text is automatically chunked by the serial protocol layer.
   */
  drawString(text) {
    this.ensureBoardSet();
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.componentId}:DRAWSTRING:${encodeProtocolString(text ?? "")}`
    );
    this._value = { ...this.valueSafe, string: text };
    this.emit("change", this._value);
  }
  /** @deprecated Use drawString() instead. Kept for backwards compatibility. */
  print(text) {
    this.drawString(text);
  }
  /**
   * Clear the display.
   */
  clear() {
    this.ensureBoardSet();
    this.board.sendCommand(`${COMMAND_WRITE}:${this.componentId}:CLEAR`);
    this._value = { ...this.valueSafe, string: "" };
    this.emit("change", this._value);
  }
  /**
   * Set the cursor position.
   * @param col - Column (0-based, max 15 for 16-column display)
   * @param row - Row (0 or 1 for 2-row display)
   */
  setCursor(col, row) {
    this.ensureBoardSet();
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.componentId}:SETCURSOR:${col}:${row}`
    );
  }
  /**
   * Set backlight color using RGB values.
   */
  setRGB(r, g, b) {
    this.ensureBoardSet();
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.componentId}:SETRGB:${r}:${g}:${b}`
    );
    const hex = "#" + [r, g, b].map((v) => Math.max(0, Math.min(255, v)).toString(16).padStart(2, "0")).join("");
    this._value = { ...this.valueSafe, backgroundColor: hex };
    this.emit("change", this._value);
  }
  /**
   * Set backlight color using a hex string.
   * @param hex - Hex color string (e.g., "#F39C12")
   */
  bgColor(hex) {
    this.ensureBoardSet();
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.componentId}:BGCOLOR:${hex}`
    );
    this._value = { ...this.valueSafe, backgroundColor: hex };
    this.emit("change", this._value);
  }
  /**
   * Turn off the backlight.
   */
  backlightOff() {
    this.ensureBoardSet();
    this.board.sendCommand(`${COMMAND_WRITE}:${this.componentId}:BACKLIGHTOFF`);
    this._value = { ...this.valueSafe, backgroundColor: "#000000" };
    this.emit("change", this._value);
  }
  cleanup() {
    this.clear();
    this.backlightOff();
    super.cleanup();
  }
}
class LEDStrip extends ComponentBase {
  constructor(options) {
    super(options);
    this.pin = toDigitalPin(options.pin);
    this.ledCount = options.ledCount ?? 30;
    this.colorOrder = options.colorOrder ?? "GRB";
    this.gamma = options.gamma ?? 2.8;
    this._value = {
      leds: Array(this.ledCount).fill({ color: "#FBD841" })
    };
    this.board.registerComponent(this.pin, this);
  }
  handleData(data) {
  }
  // --- Hardware Control Methods ---
  /**
   * Set all LEDs to a single color.
   * @param color - Hex color string (e.g., "#ff0000")
   */
  setColor(color) {
    this.ensureBoardSet();
    this.board.sendCommand(`${COMMAND_WRITE}:${this.pin}:COLOR:${color}`);
    this._value = {
      leds: Array(this.ledCount).fill({ color })
    };
    this.emit("change", this._value);
  }
  /**
   * Set a single pixel to a color.
   * @param index - 0-based pixel index
   * @param color - Hex color string
   */
  setPixel(index, color) {
    this.ensureBoardSet();
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.pin}:PIXEL:${index}:${color}`
    );
    if (this._value) {
      const leds = [...this._value.leds];
      if (index >= 0 && index < leds.length) {
        leds[index] = { color };
        this._value = { leds };
        this.emit("change", this._value);
      }
    }
  }
  /**
   * Set a range of pixels to a color.
   * @param start - 0-based start index
   * @param end - 0-based end index (exclusive)
   * @param color - Hex color string
   */
  setRange(start, end, color) {
    this.ensureBoardSet();
    for (let i = start; i < end; i++) {
      this.board.sendCommand(
        `${COMMAND_WRITE}:${this.pin}:PIXEL:${i}:${color}`
      );
    }
    this.board.sendCommand(`${COMMAND_WRITE}:${this.pin}:SHOW`);
    if (this._value) {
      const leds = [...this._value.leds];
      for (let i = start; i < end && i < leds.length; i++) {
        leds[i] = { color };
      }
      this._value = { leds };
      this.emit("change", this._value);
    }
  }
  /**
   * Set the brightness of the strip.
   * @param value - Brightness value (0-255)
   */
  setBrightness(value) {
    this.ensureBoardSet();
    this.board.sendCommand(`${COMMAND_WRITE}:${this.pin}:BRIGHTNESS:${value}`);
  }
  /**
   * Shift all pixels in a direction.
   * @param forward - true = shift forward (0 → N-1), false = backward
   * @param wrap - true = wrap shifted-out pixel to the other side
   */
  shift(forward, wrap) {
    this.ensureBoardSet();
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.pin}:SHIFT:${forward ? 1 : 0}:${wrap ? 1 : 0}`
    );
    if (this._value) {
      const leds = [...this._value.leds];
      if (leds.length <= 1) return;
      if (forward) {
        const last = leds[leds.length - 1];
        for (let i = leds.length - 1; i > 0; i--) {
          leds[i] = leds[i - 1];
        }
        leds[0] = wrap ? last : { color: "#000000" };
      } else {
        const first = leds[0];
        for (let i = 0; i < leds.length - 1; i++) {
          leds[i] = leds[i + 1];
        }
        leds[leds.length - 1] = wrap ? first : { color: "#000000" };
      }
      this._value = { leds };
      this.emit("change", this._value);
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  off(event, listener) {
    if (event !== void 0 && listener !== void 0) {
      super.off(event, listener);
      return this;
    }
    this.ensureBoardSet();
    this.board.sendCommand(`${COMMAND_WRITE}:${this.pin}:OFF`);
    this._value = {
      leds: Array(this.ledCount).fill({ color: "#000000" })
    };
    this.emit("change", this._value);
    return this;
  }
  /**
   * Commit buffered changes to the hardware.
   */
  show() {
    this.ensureBoardSet();
    this.board.sendCommand(`${COMMAND_WRITE}:${this.pin}:SHOW`);
  }
  cleanup() {
    this.off();
    super.cleanup();
  }
}
const DEFAULT_LED_MATRIX_VALUE = {
  power: true,
  type: "full-color",
  color: "#0000ff"
};
class LEDMatrix extends I2cComponentBase {
  get valueSafe() {
    return this._value ?? DEFAULT_LED_MATRIX_VALUE;
  }
  constructor(options) {
    super(options);
    this.orientation = options.orientation ?? 3;
    this._value = DEFAULT_LED_MATRIX_VALUE;
  }
  handleData(_data) {
  }
  send(cmd) {
    this.board.sendCommand(`${COMMAND_WRITE}:${this.componentId}:${cmd}`);
  }
  /**
   * Set entire matrix to a single RGB color.
   * @param color - Hex color string (e.g., "#ff0000")
   */
  setColor(color) {
    this.ensureBoardSet();
    this.send(`COLOR:${color}`);
    this._value = {
      ...this.valueSafe,
      power: true,
      type: "full-color",
      color,
      text: void 0,
      animation: void 0
    };
    this.emit("change", this._value);
  }
  /**
   * Display scrolling text with specified color name and duration.
   * @param text - Text to display (max 28 characters)
   * @param durationMs - Display duration in milliseconds
   * @param colorName - Color name (red, orange, yellow, green, cyan, blue, purple, pink, white, black)
   */
  displayText(text, durationMs, colorName) {
    this.ensureBoardSet();
    this.send(`TEXT:${text}:${durationMs}:${colorName}`);
    this._value = {
      ...this.valueSafe,
      power: true,
      type: "text",
      text,
      displayDuration: durationMs,
      color: colorName
    };
    this.emit("change", this._value);
  }
  /**
   * Display a number with specified color name and duration.
   * @param num - Number to display
   * @param durationMs - Display duration in milliseconds
   * @param colorName - Color name
   */
  displayNumber(num, durationMs, colorName) {
    this.ensureBoardSet();
    this.send(`NUMBER:${num}:${durationMs}:${colorName}`);
    this._value = {
      ...this.valueSafe,
      power: true,
      type: "text",
      text: num.toString(),
      displayDuration: durationMs,
      color: colorName
    };
    this.emit("change", this._value);
  }
  /**
   * Play a built-in color animation.
   * @param animationId - Animation ID (0-5)
   * @param durationMs - Animation duration in milliseconds
   */
  displayAnimation(animationId, durationMs) {
    this.ensureBoardSet();
    this.send(`ANIMATION:${animationId}:${durationMs}`);
    this._value = {
      ...this.valueSafe,
      power: true,
      type: "animation",
      animation: animationId,
      displayDuration: durationMs
    };
    this.emit("change", this._value);
  }
  /**
   * Display color wave animation.
   * @param colorName - Color name
   * @param durationMs - Animation duration in milliseconds
   */
  displayColorWave(colorName, durationMs) {
    this.ensureBoardSet();
    this.send(`WAVE:${colorName}:${durationMs}`);
    this._value = {
      ...this.valueSafe,
      power: true,
      type: "animation",
      color: colorName,
      displayDuration: durationMs
    };
    this.emit("change", this._value);
  }
  /**
   * Display color bar at specified percentage.
   * @param percent - Percentage (0-100)
   */
  displayColorBar(percent) {
    this.ensureBoardSet();
    this.send(`BAR:${percent}`);
    this._value = {
      ...this.valueSafe,
      power: true,
      type: "animation"
    };
    this.emit("change", this._value);
  }
  /**
   * Display built-in emoji by index.
   * @param emojiIndex - Emoji index
   */
  displayEmoji(emojiIndex) {
    this.ensureBoardSet();
    this.send(`EMOJI:${emojiIndex}`);
    this._value = {
      ...this.valueSafe,
      power: true,
      type: "bitmap"
    };
    this.emit("change", this._value);
  }
  /**
   * Draw a custom 8x8 bitmap.
   * @param bitmap - Array of 64 RGB values (8x8 pixels, row by row)
   */
  drawBitmap(bitmap) {
    this.ensureBoardSet();
    if (!bitmap || bitmap.length !== 64) {
      console.error("LEDMatrix bitmap must be exactly 64 bytes");
      return;
    }
    for (let i = 0; i < 64; i++) {
      this.send(`PIXEL:${i}:${bitmap[i]}`);
    }
    this.send("COMMIT");
    this._value = {
      ...this.valueSafe,
      power: true,
      type: "bitmap",
      bitmap
    };
    this.emit("change", this._value);
  }
  /**
   * Turn off all LEDs (clear display).
   */
  clear() {
    this.ensureBoardSet();
    this.send("CLEAR");
    this._value = {
      ...this.valueSafe,
      power: false
    };
    this.emit("change", this._value);
  }
  /**
   * Power off the matrix (alias for clear).
   */
  powerOff() {
    this.clear();
  }
  cleanup() {
    this.clear();
    super.cleanup();
  }
}
const OLED_PIXELS = OLED_WIDTH * OLED_HEIGHT;
const OLED_PACKED_BYTES = OLED_WIDTH * OLED_HEIGHT / 8;
const MS_PER_BYTE_CMD = Math.ceil(25 * 10 * 1e3 / BAUD_RATE);
const DEFAULT_OLED_VALUE = {
  power: true,
  inverted: false,
  type: "string",
  string: "blokdots"
};
class OLED extends I2cComponentBase {
  constructor(options) {
    super(options);
    this.previousPacked = null;
    this.drawingIsBlocked = false;
    this.isRotated = options.isRotated ?? false;
    this.isMirrored = options.isMirrored ?? false;
    this._value = DEFAULT_OLED_VALUE;
    this.drawingBuffer = new Array(OLED_PACKED_BYTES).fill(null);
  }
  get valueSafe() {
    return this._value ?? DEFAULT_OLED_VALUE;
  }
  handleData(_data) {
  }
  send(cmd) {
    this.board.sendCommand(`${COMMAND_WRITE}:${this.componentId}:${cmd}`);
  }
  resetBitmapState() {
    this.drawingIsBlocked = false;
    this.drawingBuffer = new Array(OLED_PACKED_BYTES).fill(null);
  }
  /** Draw a text string on the display. Clears any active bitmap. */
  drawString(text) {
    this.ensureBoardSet();
    this.resetBitmapState();
    this.send(`DRAWSTRING:${encodeProtocolString(text ?? "")}`);
    this.previousPacked = null;
    this._value = {
      ...this.valueSafe,
      type: "string",
      string: text,
      bitmap: void 0
    };
    this.emit("change", this._value);
  }
  /** Draw a label and a value on two lines. Clears any active bitmap. */
  drawValue(label, value) {
    this.ensureBoardSet();
    this.resetBitmapState();
    this.send(
      `DRAWVALUE:${encodeProtocolString(label ?? "")}:${encodeProtocolString(value ?? "")}`
    );
    this.previousPacked = null;
    this._value = {
      ...this.valueSafe,
      type: "string",
      string: `${label}
${value}`,
      bitmap: void 0
    };
    this.emit("change", this._value);
  }
  /** Draw a 128×64 monochrome bitmap using a diff-based transfer to minimise serial traffic. */
  drawBitmapOptimized(bitmap) {
    this.ensureBoardSet();
    if (!Array.isArray(bitmap) || bitmap.length < OLED_PIXELS) {
      return;
    }
    const packed = packBitmapToPages(bitmap);
    if (!this.previousPacked) {
      this.send("CLEAR_BITMAP");
      setTimeout(() => {
        const nonZeroBytes = [];
        for (let i = 0; i < OLED_PACKED_BYTES; i++) {
          if (packed[i] !== 0) {
            nonZeroBytes.push({ idx: i, value: packed[i] });
          }
        }
        this.updateBytesBlocking(nonZeroBytes);
        this.previousPacked = packed;
      }, 30);
    } else {
      const prev = this.previousPacked;
      const changed = [];
      for (let i = 0; i < OLED_PACKED_BYTES; i++) {
        const v = packed[i];
        if (v !== prev[i]) changed.push({ idx: i, value: v });
      }
      this.updateBytesBlocking(changed);
      this.previousPacked = packed;
    }
    this._value = {
      ...this.valueSafe,
      type: "bitmap",
      bitmap,
      string: void 0
    };
    this.emit("change", this._value);
  }
  /** Clear the display. */
  clearDisplay() {
    this.ensureBoardSet();
    this.send("CLEAR");
    this.previousPacked = null;
    this._value = {
      ...this.valueSafe,
      type: "bitmap",
      bitmap: void 0,
      string: void 0
    };
    this.emit("change", this._value);
  }
  /** Turn the display on. */
  turnOnDisplay() {
    this.ensureBoardSet();
    this.send("POWERON");
    this._value = { ...this.valueSafe, power: true };
    this.emit("change", this._value);
  }
  /** Turn the display off. */
  turnOffDisplay() {
    this.ensureBoardSet();
    this.send("POWEROFF");
    this._value = { ...this.valueSafe, power: false };
    this.emit("change", this._value);
  }
  /** Invert the display colours (white ↔ black). */
  invertDisplay(invert) {
    this.ensureBoardSet();
    this.send(`INVERT:${invert ? 1 : 0}`);
    this._value = { ...this.valueSafe, inverted: invert };
    this.emit("change", this._value);
  }
  /** Toggle 180° rotation of the display content. */
  rotate() {
    this.isRotated = !this.isRotated;
    this.redraw();
  }
  /** Toggle horizontal mirroring of the display content. */
  mirror() {
    this.isMirrored = !this.isMirrored;
    this.redraw();
  }
  cleanup() {
    this.clearDisplay();
    this.previousPacked = null;
    this.drawingIsBlocked = false;
    this.drawingBuffer = new Array(OLED_PACKED_BYTES).fill(null);
    super.cleanup();
  }
  redraw() {
    if (this._value?.type === "bitmap" && this._value.bitmap) {
      const bmp = this._value.bitmap;
      this.previousPacked = null;
      this.drawBitmapOptimized(bmp);
      return;
    }
    if (this._value?.type === "string") {
      this.previousPacked = null;
      this.drawString(this._value.string ?? "");
      return;
    }
    this.previousPacked = null;
  }
  updateBytesBlocking(bytes) {
    if (bytes.length === 0) return;
    if (this.drawingIsBlocked) {
      for (const { idx, value } of bytes) this.drawingBuffer[idx] = value;
      return;
    }
    const blockingTime = 50 + MS_PER_BYTE_CMD * bytes.length;
    this.drawingIsBlocked = true;
    setTimeout(() => {
      this.drawingIsBlocked = false;
      const queued = [];
      for (let i = 0; i < this.drawingBuffer.length; i++) {
        const v = this.drawingBuffer[i];
        if (v !== null) queued.push({ idx: i, value: v });
      }
      this.drawingBuffer = new Array(OLED_PACKED_BYTES).fill(null);
      if (queued.length > 0) this.updateBytesBlocking(queued);
    }, blockingTime);
    this.sendBytes(bytes);
  }
  sendBytes(bytes) {
    for (const { idx, value } of bytes) {
      const page = Math.floor(idx / OLED_WIDTH);
      const col = idx % OLED_WIDTH;
      this.send(`BYTE:${page}:${col}:${value}`);
    }
  }
}
function packBitmapToPages(bitmap) {
  const out = new Uint8Array(OLED_PACKED_BYTES);
  for (let y = 0; y < OLED_HEIGHT; y++) {
    const page = y >> 3;
    const bit = 1 << (y & 7);
    const rowOffset = y * OLED_WIDTH;
    for (let x = 0; x < OLED_WIDTH; x++) {
      if (bitmap[rowOffset + x]) out[page * OLED_WIDTH + x] |= bit;
    }
  }
  return out;
}
class Potentiometer extends AnalogSensor {
}
class ServoMotor extends AnalogActor {
  constructor(options) {
    super({
      ...options,
      minValue: 0,
      maxValue: 180
    });
    this.startAngle = options.startAngle;
    this.minUs = options.minUs ?? 544;
    this.maxUs = options.maxUs ?? 2400;
  }
  to(degrees, ms, rate) {
    this.ensureBoardSet();
    const clampedDegrees = this.clampValue(degrees);
    const finalDegrees = this.invert ? this.maxValue - clampedDegrees : clampedDegrees;
    if (ms === void 0) {
      this.board.sendCommand(
        `${COMMAND_WRITE}:${this.pin}:TO:${finalDegrees}`
      );
    } else if (rate === void 0) {
      this.board.sendCommand(
        `${COMMAND_WRITE}:${this.pin}:TO:${finalDegrees}:${ms}`
      );
    } else {
      this.board.sendCommand(
        `${COMMAND_WRITE}:${this.pin}:TO:${finalDegrees}:${ms}:${rate}`
      );
    }
    this.stopAnimating();
    return this;
  }
  /**
   * Override handleData to convert hardware-space angles back to app-space.
   * When invert=true, the Arduino echoes the already-inverted angle.
   * We un-invert it so the component always stores app-space values,
   * preventing a feedback loop when updateHardwareInstanceToValue re-applies invert.
   */
  handleData(data) {
    const rawAngle = typeof data === "string" ? parseInt(data, 10) : Number(data);
    const appAngle = this.invert ? this.maxValue - rawAngle : rawAngle;
    if (appAngle !== this._value) {
      this.emitChange(appAngle);
    }
  }
  /**
   * Get current angle of the servo.
   * Alias for value getter with servo-specific naming.
   */
  get angle() {
    return this._value ?? this.startAngle ?? 90;
  }
  sweep(lowOrOptions, high) {
    this.ensureBoardSet();
    if (lowOrOptions === void 0) {
      this.board.sendCommand(`${COMMAND_WRITE}:${this.pin}:SWEEP:0:180:1000:1`);
    } else if (typeof lowOrOptions === "number" && high !== void 0) {
      const interval = 1e3;
      const step = 1;
      this.board.sendCommand(
        `${COMMAND_WRITE}:${this.pin}:SWEEP:${lowOrOptions}:${high}:${interval}:${step}`
      );
    } else if (typeof lowOrOptions === "object") {
      const options = lowOrOptions;
      const [low, hi] = options.range ?? [0, 180];
      const interval = options.interval ?? 1e3;
      const step = options.step ?? 1;
      this.board.sendCommand(
        `${COMMAND_WRITE}:${this.pin}:SWEEP:${low}:${hi}:${interval}:${step}`
      );
    }
    this._isAnimating = true;
    return this;
  }
  /**
   * Stop any current animation after a delay.
   * @param delayMs - Delay in milliseconds (0 disables auto-stop)
   */
  stopAfterMs(delayMs) {
    this.ensureBoardSet();
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.pin}:STOP_AFTER:${delayMs}`
    );
    return this;
  }
  /**
   * Stop a sweep after N full cycles (low->high->low == 1).
   * @param cycles - Number of cycles (0 disables)
   */
  stopAfterSweepCycles(cycles) {
    this.ensureBoardSet();
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.pin}:STOP_AFTER_CYCLES:${cycles}`
    );
    return this;
  }
  /**
   * Detach the servo (stop sending PWM signals).
   */
  detach() {
    this.ensureBoardSet();
    this.board.sendCommand(`${COMMAND_WRITE}:${this.pin}:DETACH`);
    this.stopAnimating();
    return this;
  }
  /**
   * Override write method to use servo-specific command.
   * Maps to the 'to' method for immediate positioning.
   */
  write(angle) {
    return this.to(angle);
  }
}
class StepperMotor extends ComponentBase {
  constructor(options) {
    super(options);
    this._value = 0;
    this._speed = 0;
    this._maxSpeed = 0;
    this._acceleration = 0;
    this._deceleration = 0;
    if (options.flipPins) {
      this.dirPin = toDigitalPin(options.pin);
      this.pin = toDigitalPin(options.dirPin);
    } else {
      this.pin = toDigitalPin(options.pin);
      this.dirPin = toDigitalPin(options.dirPin);
    }
    this.stepsPerRevolution = options.stepsPerRevolution ?? 200;
    this.board.registerComponent(this.pin, this);
  }
  handleData(data) {
    const value = typeof data === "string" ? parseInt(data, 10) : Number(data);
    if (!isNaN(value) && value !== this._value) {
      this.emitChange(value);
    }
  }
  /**
   * Move to an absolute position in steps.
   */
  moveTo(absoluteSteps) {
    this.ensureBoardSet();
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.pin}:MOVETO:${Math.round(absoluteSteps)}`
    );
    return this;
  }
  /**
   * Move a relative number of steps from current position.
   */
  move(relativeSteps) {
    this.ensureBoardSet();
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.pin}:MOVE:${Math.round(relativeSteps)}`
    );
    return this;
  }
  /**
   * Set constant speed in steps per second (bypasses acceleration).
   */
  setSpeed(stepsPerSecond) {
    this.ensureBoardSet();
    this._speed = stepsPerSecond;
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.pin}:SETSPEED:${stepsPerSecond}`
    );
    return this;
  }
  /**
   * Set maximum speed in steps per second.
   */
  setMaxSpeed(stepsPerSecond) {
    this.ensureBoardSet();
    this._maxSpeed = stepsPerSecond;
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.pin}:SETMAXSPEED:${stepsPerSecond}`
    );
    return this;
  }
  /**
   * Set acceleration in steps per second squared.
   */
  setAcceleration(stepsPerSecondSquared) {
    this.ensureBoardSet();
    this._acceleration = stepsPerSecondSquared;
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.pin}:SETACCELERATION:${stepsPerSecondSquared}`
    );
    return this;
  }
  /**
   * Set deceleration in steps per second squared.
   * When set to a value > 0, the motor uses this rate when slowing down
   * instead of the acceleration rate.
   */
  setDeceleration(stepsPerSecondSquared) {
    this.ensureBoardSet();
    this._deceleration = stepsPerSecondSquared;
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.pin}:SETDECELERATION:${stepsPerSecondSquared}`
    );
    return this;
  }
  /**
   * Reset the current position counter without moving.
   */
  setCurrentPosition(position) {
    this.ensureBoardSet();
    this.board.sendCommand(
      `${COMMAND_WRITE}:${this.pin}:SETCURRENTPOSITION:${Math.round(position)}`
    );
    this._value = position;
    return this;
  }
  /**
   * Decelerate to a stop.
   */
  stop() {
    this.ensureBoardSet();
    this.board.sendCommand(`${COMMAND_WRITE}:${this.pin}:STOP`);
    return this;
  }
  /**
   * Stop immediately (no deceleration).
   */
  stopNow() {
    this.ensureBoardSet();
    this.board.sendCommand(`${COMMAND_WRITE}:${this.pin}:STOPNOW`);
    return this;
  }
  /**
   * Get the current position in steps.
   */
  get position() {
    return this._value ?? 0;
  }
  get speed() {
    return this._speed;
  }
  get maxSpeed() {
    return this._maxSpeed;
  }
  get acceleration() {
    return this._acceleration;
  }
  get deceleration() {
    return this._deceleration;
  }
  cleanup() {
    this.stop();
    super.cleanup();
  }
}
class SunlightSensor extends I2cComponentBase {
  /**
   * Handle incoming data from Arduino.
   * Expected format: [uv, ir, vis] as string array or string "uv:ir:vis"
   * or object {uv: number, ir: number, vis: number}
   */
  handleData(data) {
    let uv;
    let ir;
    let vis;
    if (Array.isArray(data) && data.length === 3) {
      uv = parseFloat(data[0]);
      ir = parseFloat(data[1]);
      vis = parseFloat(data[2]);
    } else if (typeof data === "string" && data.includes(":")) {
      const parts = data.split(":");
      if (parts.length < 3) return;
      uv = parseFloat(parts[0]);
      ir = parseFloat(parts[1]);
      vis = parseFloat(parts[2]);
    } else if (typeof data === "object" && data !== null && "uv" in data && "ir" in data && "vis" in data) {
      const sensorData = data;
      uv = sensorData.uv;
      ir = sensorData.ir;
      vis = sensorData.vis;
    } else {
      return;
    }
    const value = { uv, ir, vis };
    this.emitChange(value);
  }
  /**
   * Get current UV index.
   */
  get uv() {
    return this._value?.uv ?? 0;
  }
  /**
   * Get current infrared light level.
   */
  get ir() {
    return this._value?.ir ?? 0;
  }
  /**
   * Get current visible light level.
   */
  get vis() {
    return this._value?.vis ?? 0;
  }
}
const PORT_FILTER = /usb|acm|^com/i;
const PROBE_TIMEOUT_MS = 5e3;
const probePort = (portPath) => new Promise((resolve, reject) => {
  let settled = false;
  const fail = (err) => {
    if (settled) return;
    settled = true;
    clearTimeout(timer);
    protocol.close();
    if (port.isOpen) {
      port.close(() => {
      });
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
    port.removeAllListeners("error");
    protocol.removeAllListeners("ready");
    protocol.removeAllListeners("hash");
    resolve({ portPath, port, protocol });
  });
});
const raceToResolve = (promises) => new Promise((resolve, reject) => {
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
const probePortWithTimeout = (portPath, timeoutMs) => {
  if (timeoutMs === PROBE_TIMEOUT_MS) {
    return probePort(portPath);
  }
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(`No blokdots response from ${portPath} (timeout)`));
    }, timeoutMs);
    probePort(portPath).then((result) => {
      clearTimeout(timer);
      resolve(result);
    }).catch((err) => {
      clearTimeout(timer);
      reject(err);
    });
  });
};
const autoDetectPort = async (timeoutMs = PROBE_TIMEOUT_MS) => {
  const allPorts = await SerialPort.list();
  const candidates = allPorts.filter((p) => PORT_FILTER.test(p.path));
  if (candidates.length === 0) {
    throw new Error(
      'No Arduino board found. Make sure your board is connected and running the correct sketch.\nIf auto-detection fails, pass a port path directly (e.g. new blokdots.Board("/dev/tty.usbserial-XXXX")).'
    );
  }
  const probes = candidates.map((p) => probePortWithTimeout(p.path, timeoutMs));
  return raceToResolve(probes).catch(() => {
    throw new Error(
      'No blokdots board found. Make sure your board is connected and running the correct sketch.\nIf auto-detection fails, pass a port path directly (e.g. new blokdots.Board("/dev/tty.usbserial-XXXX")).'
    );
  });
};
class Board extends EventEmitter {
  /**
   * Create a Board instance.
   *
   * @param portPath - Serial port path (e.g. "/dev/tty.usbserial-XXXX" or "COM3").
   *                   Pass `null` or omit to auto-detect the connected blokdots board.
   *                   Example: "/dev/tty.usbserial-XXXX" on Mac, "COM3" on Windows.
   * @param options  - Optional configuration (expectedHash, autoDetectTimeoutMs).
   */
  constructor(portPath, options) {
    super();
    this.components = /* @__PURE__ */ new Map();
    this.isReady = false;
    this.pendingData = /* @__PURE__ */ new Map();
    if (portPath) {
      this.initWithPort(portPath, options?.expectedHash);
    } else {
      autoDetectPort(options?.autoDetectTimeoutMs).then((probe) => {
        this.initWithExistingConnection(probe, options?.expectedHash);
      }).catch((err) => {
        this.emit("error", err);
      });
    }
  }
  /**
   * Open a new serial connection to `portPath` and set up protocol listeners.
   * Used when a port path is provided explicitly.
   */
  initWithPort(portPath, expectedHash) {
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
  initWithExistingConnection(probe, expectedHash) {
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
  attachProtocolListeners() {
    this.protocol.on("data", (id, value) => {
      const component = this.components.get(id);
      if (component) {
        component.handleData(value);
      } else {
        this.pendingData.set(id, value);
      }
    });
    this.protocol.on("hash", (hash) => {
      this.emit("hash", hash);
    });
    this.protocol.on("config-count", (count) => {
      this.emit("config-count", count);
    });
    this.protocol.on("config-component", (data) => {
      this.emit("config-component", data);
    });
    this.protocol.on("version", (versionString) => {
      this.emit("version", versionString);
    });
  }
  /**
   * Query the board's config hash and log a warning if it doesn't match
   * `expectedHash`. The connection always proceeds — this is purely diagnostic.
   */
  checkHashAfterReady(expectedHash) {
    const hashTimeout = setTimeout(() => {
    }, 3e3);
    this.once("hash", (receivedHash) => {
      clearTimeout(hashTimeout);
      if (receivedHash !== expectedHash) {
        console.warn(
          "⚠️  Warning: The connected board appears to be running a different sketch.\n   Some components may not work as expected.\n   Make sure you've uploaded the correct code to your board."
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
  registerComponent(id, component) {
    const stringId = String(id);
    this.components.set(stringId, component);
    component.setBoard(this);
    const pending = this.pendingData.get(stringId);
    if (pending !== void 0) {
      this.pendingData.delete(stringId);
      setImmediate(() => component.handleData(pending));
    }
  }
  sendCommand(command) {
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
  close(callback) {
    if (!this.port) {
      callback?.();
      return;
    }
    this.components.forEach((component) => {
      component.cleanup();
    });
    this.components.clear();
    this.pendingData.clear();
    this.protocol.close();
    if (this.port.isOpen) {
      this.port.close(callback);
    } else {
      callback?.();
    }
  }
  isConnected() {
    return this.isReady && !!this.port?.isOpen;
  }
}
export {
  Accelerometer,
  AnalogActor,
  AnalogSensor,
  BAUD_RATE,
  BLOKDOTS_SOCKET_IO_SERVER_DEFAULT_PORT,
  Barometer,
  Board,
  Button,
  Buzzer,
  CO2Sensor,
  COMMAND_WRITE,
  ColorSensor,
  ComponentBase,
  Counter,
  DELIMITER,
  DigitalActor,
  Encoder,
  FigmaIntegration,
  HapticTrack,
  Hapticlabs,
  I2cComponentBase,
  Joystick,
  LCD,
  LEDMatrix,
  LEDStrip,
  LIVE_MODE_IDENTIFIER,
  Led,
  LedDimmable,
  Metronome,
  MotorDriver,
  NOTE_HZ,
  OLED,
  OLED_HEIGHT,
  OLED_WIDTH,
  Potentiometer,
  RESPONSE_DATA,
  RESPONSE_SYSTEM,
  SYSTEM_CMD_QUERY_HASH,
  ServoMotor,
  SignalTower,
  SocketIOIntegration,
  StepperMotor,
  SunlightSensor,
  SystemMessage,
  Timer,
  autoDetectPort,
  clamp,
  encodeProtocolString,
  getBlokdotsSocketIOServer,
  getBlokdotsSocketIOServerAddress,
  hexToRgb,
  invertValue,
  mapValue,
  rgbToHex,
  utils
};
