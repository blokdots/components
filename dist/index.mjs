import { networkInterfaces } from "os";
import { Server } from "socket.io";
import http from "http";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import EventEmitter from "events";
import five from "johnny-five";
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
class Counter extends EventEmitter {
  constructor(initialValue = 0) {
    super();
    this.value = initialValue;
  }
  countUp() {
    this.value++;
    this.emit("change", this.value);
  }
  countDown() {
    this.value--;
    this.emit("change", this.value);
  }
  setCountTo(value) {
    this.value = value;
    this.emit("change", this.value);
  }
}
class Encoder extends EventEmitter {
  constructor({
    pin1,
    pin2,
    board,
    initialValue = 0,
    debounce = 7,
    invert = false
  }) {
    super();
    this.value = initialValue;
    this.invert = invert;
    this.waveform = "";
    this.waveformTimeout;
    this.upButton = new five.Button({
      pin: pin1,
      debounce,
      board
    });
    this.downButton = new five.Button({
      pin: pin2,
      debounce,
      board
    });
    this.upButton.on("up", () => {
      this.waveform += "1";
      this.handleWaveform();
    });
    this.downButton.on("up", () => {
      this.waveform += "0";
      this.handleWaveform();
    });
  }
  countUp() {
    const delta = this.invert ? -1 : 1;
    this.value += delta;
    this.emit("change", this.value);
    this.emit(this.invert ? "down" : "up", this.value);
  }
  countDown() {
    const delta = this.invert ? 1 : -1;
    this.value += delta;
    this.emit("change", this.value);
    this.emit(this.invert ? "up" : "down", this.value);
  }
  setCountTo(value) {
    this.value = value;
    this.emit("change", this.value);
  }
  handleWaveform() {
    if (this.waveform.length < 2) {
      this.waveformTimeout = setTimeout(() => {
        this.waveform = "";
      }, 100);
      return;
    }
    if (this.waveformTimeout) {
      clearTimeout(this.waveformTimeout);
    }
    if (this.waveform === "01") {
      const delta = this.invert ? -1 : 1;
      this.value = this.value + delta;
      this.emit("change", this.value);
      this.emit(this.invert ? "down" : "up", this.value);
    } else if (this.waveform === "10") {
      const delta = this.invert ? 1 : -1;
      this.value = this.value + delta;
      this.emit("change", this.value);
      this.emit(this.invert ? "up" : "down", this.value);
    }
    this.waveform = "";
  }
  cleanUp() {
    this.upButton.removeAllListeners?.();
    this.downButton.removeAllListeners?.();
  }
}
const EMITTER_METHODS = /* @__PURE__ */ new Set([
  "on",
  "off",
  "once",
  "emit",
  "removeListener",
  "removeAllListeners",
  "setMaxListeners",
  "getMaxListeners",
  "listeners",
  "rawListeners",
  "listenerCount",
  "prependListener",
  "prependOnceListener",
  "eventNames",
  "addListener"
]);
function createEmitterProxy(target, j5Instance, customHandlers) {
  let proxy;
  proxy = new Proxy(target, {
    get(target2, prop) {
      if (customHandlers?.has(prop)) {
        const handler = customHandlers.get(prop);
        const originalMethod = j5Instance[prop];
        return function(...args) {
          return handler(proxy, target2, originalMethod, args);
        };
      }
      if (EMITTER_METHODS.has(prop) && prop in target2) {
        const value2 = target2[prop];
        if (typeof value2 === "function") {
          return function(...args) {
            const result = value2.apply(target2, args);
            return result === target2 ? proxy : result;
          };
        }
        return value2;
      }
      const value = j5Instance[prop];
      if (typeof value === "function") {
        return function(...args) {
          const result = value.apply(j5Instance, args);
          return result === j5Instance ? proxy : result;
        };
      }
      return value;
    },
    set(target2, prop, value) {
      if (prop in target2) {
        target2[prop] = value;
      } else {
        j5Instance[prop] = value;
      }
      return true;
    }
  });
  return proxy;
}
class Led extends EventEmitter {
  constructor(options) {
    super();
    this._instance = new five.Led(options);
    const originalUpdate = this._instance.update.bind(this._instance);
    const instance = this._instance;
    const emitter = this;
    this._instance.update = () => {
      originalUpdate();
      const value = instance.value;
      emitter.emit("change", value);
    };
    const customHandlers = /* @__PURE__ */ new Map();
    customHandlers.set(
      "on",
      (proxy, target, originalMethod, args) => {
        if (args.length < 2 && originalMethod && typeof originalMethod === "function") {
          originalMethod.apply(this._instance, args);
          return proxy;
        }
        if (args.length >= 2 && typeof args[1] === "function") {
          EventEmitter.prototype.on.call(target, args[0], args[1]);
        }
        return proxy;
      }
    );
    customHandlers.set(
      "off",
      (proxy, target, originalMethod, args) => {
        if (args.length === 0 && originalMethod && typeof originalMethod === "function") {
          originalMethod.apply(this._instance, args);
          return proxy;
        }
        if (args.length >= 2 && typeof args[1] === "function") {
          EventEmitter.prototype.off.call(target, args[0], args[1]);
        }
        return proxy;
      }
    );
    return createEmitterProxy(this, this._instance, customHandlers);
  }
}
class Relay extends EventEmitter {
  constructor(options) {
    super();
    this._instance = new five.Relay(options);
    const originalOpen = this._instance.open.bind(this._instance);
    const emitter = this;
    this._instance.open = function() {
      originalOpen();
      emitter.emit("change", 1);
      return this;
    };
    const originalClose = this._instance.close.bind(this._instance);
    this._instance.close = function() {
      originalClose();
      emitter.emit("change", 0);
      return this;
    };
    return createEmitterProxy(this, this._instance);
  }
}
class Stepper extends EventEmitter {
  constructor(options) {
    super();
    this._instance = new five.Stepper(options);
    const originalStep = this._instance.step.bind(this._instance);
    this._instance;
    const emitter = this;
    this._instance.step = function(stepsOrOptions, callback) {
      const wrappedCallback = () => {
        emitter.emit("change", stepsOrOptions);
        if (callback) callback();
      };
      return originalStep(stepsOrOptions, wrappedCallback);
    };
    return createEmitterProxy(this, this._instance);
  }
}
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
  sendReaction(message) {
    console.log("sendReaction", message);
    this.emit("reaction", message);
    if (!this.integration) {
      console.error("Integration not initialized");
      return;
    }
    this.integration.emit("reaction", message);
  }
  cleanUp() {
    this.server?.unregisterIntegration({
      integrationName: INTEGRATION_NAME
    });
  }
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
  setText(parameters) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "setText",
      parameters: { string: parameters.string },
      timestamp: Date.now()
    });
  }
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
  setOpacity(parameters) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "setOpacity",
      parameters: { value: parameters.value / 100 },
      timestamp: Date.now()
    });
  }
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
  setColor(parameters) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "setColor",
      parameters: { value: parameters.value },
      timestamp: Date.now()
    });
  }
}
class Hapticlabs {
  constructor({
    pin1,
    pin2,
    board,
    initialValue = {
      pin1: 0,
      pin2: 0
    }
  }) {
    this.value = initialValue;
    this.pin1 = new five.Pin({
      pin: pin1,
      type: "digital",
      board
    });
    this.pin2 = new five.Pin({
      pin: pin2,
      type: "digital",
      board
    });
  }
  playTrack1() {
    this.pin1.high();
    this.value.pin1 = 1;
  }
  stopTrack1() {
    this.pin1.low();
    this.value.pin1 = 0;
  }
  playTrack2() {
    this.pin2.high();
    this.value.pin2 = 1;
  }
  stopTrack2() {
    this.pin2.low();
    this.value.pin2 = 0;
  }
}
class InvertableSensor extends EventEmitter {
  constructor({
    invert = false,
    board,
    ...sensorOptions
  }) {
    super();
    this.transformValue = (value) => {
      if (this.invert) {
        value = 1023 - value;
      }
      return value;
    };
    this.j5Object = new five.Sensor({
      board,
      ...sensorOptions
    });
    this.invert = invert;
    this.j5Object.on("change", () => {
      this.emit("change", this.transformValue(this.j5Object.value));
    });
  }
  cleanUp() {
    this.j5Object.removeAllListeners?.();
  }
}
class Joystick extends EventEmitter {
  constructor({
    pin1,
    pin2,
    board,
    invertX = false,
    invertY = false
  }) {
    super();
    this.transformValue = (value) => {
      let pressed = false;
      let x = Math.round(value.x * 100);
      let y = Math.round(value.y * 100);
      x = five.Fn.constrain(x, -50, 50);
      y = five.Fn.constrain(y, -50, 50);
      if (this.invertX) x *= -1;
      if (this.invertY) y *= -1;
      if (value.x === 1) {
        pressed = true;
        x = this.previousX || 0;
      } else {
        this.previousX = x;
      }
      return { x, y, pressed };
    };
    this.j5Object = new five.Joystick({
      pins: [pin1, pin2],
      board
    });
    this.invertX = invertX;
    this.invertY = invertY;
    this.previousX;
    this.j5Object.on("change", (v) => {
      this.emit("change", this.transformValue(v));
    });
  }
  cleanUp() {
    this.j5Object.removeAllListeners?.();
  }
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      var isInstance = false;
      try {
        isInstance = this instanceof a2;
      } catch {
      }
      if (isInstance) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var util = {};
var types = {};
var shams$1;
var hasRequiredShams$1;
function requireShams$1() {
  if (hasRequiredShams$1) return shams$1;
  hasRequiredShams$1 = 1;
  shams$1 = function hasSymbols2() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
      return false;
    }
    if (typeof Symbol.iterator === "symbol") {
      return true;
    }
    var obj = {};
    var sym = Symbol("test");
    var symObj = Object(sym);
    if (typeof sym === "string") {
      return false;
    }
    if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
      return false;
    }
    if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
      return false;
    }
    var symVal = 42;
    obj[sym] = symVal;
    for (var _ in obj) {
      return false;
    }
    if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
      return false;
    }
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
      return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
      return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
      return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === "function") {
      var descriptor = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(obj, sym)
      );
      if (descriptor.value !== symVal || descriptor.enumerable !== true) {
        return false;
      }
    }
    return true;
  };
  return shams$1;
}
var shams;
var hasRequiredShams;
function requireShams() {
  if (hasRequiredShams) return shams;
  hasRequiredShams = 1;
  var hasSymbols2 = requireShams$1();
  shams = function hasToStringTagShams() {
    return hasSymbols2() && !!Symbol.toStringTag;
  };
  return shams;
}
var esObjectAtoms;
var hasRequiredEsObjectAtoms;
function requireEsObjectAtoms() {
  if (hasRequiredEsObjectAtoms) return esObjectAtoms;
  hasRequiredEsObjectAtoms = 1;
  esObjectAtoms = Object;
  return esObjectAtoms;
}
var esErrors;
var hasRequiredEsErrors;
function requireEsErrors() {
  if (hasRequiredEsErrors) return esErrors;
  hasRequiredEsErrors = 1;
  esErrors = Error;
  return esErrors;
}
var _eval;
var hasRequired_eval;
function require_eval() {
  if (hasRequired_eval) return _eval;
  hasRequired_eval = 1;
  _eval = EvalError;
  return _eval;
}
var range;
var hasRequiredRange;
function requireRange() {
  if (hasRequiredRange) return range;
  hasRequiredRange = 1;
  range = RangeError;
  return range;
}
var ref;
var hasRequiredRef;
function requireRef() {
  if (hasRequiredRef) return ref;
  hasRequiredRef = 1;
  ref = ReferenceError;
  return ref;
}
var syntax;
var hasRequiredSyntax;
function requireSyntax() {
  if (hasRequiredSyntax) return syntax;
  hasRequiredSyntax = 1;
  syntax = SyntaxError;
  return syntax;
}
var type;
var hasRequiredType;
function requireType() {
  if (hasRequiredType) return type;
  hasRequiredType = 1;
  type = TypeError;
  return type;
}
var uri;
var hasRequiredUri;
function requireUri() {
  if (hasRequiredUri) return uri;
  hasRequiredUri = 1;
  uri = URIError;
  return uri;
}
var abs;
var hasRequiredAbs;
function requireAbs() {
  if (hasRequiredAbs) return abs;
  hasRequiredAbs = 1;
  abs = Math.abs;
  return abs;
}
var floor;
var hasRequiredFloor;
function requireFloor() {
  if (hasRequiredFloor) return floor;
  hasRequiredFloor = 1;
  floor = Math.floor;
  return floor;
}
var max;
var hasRequiredMax;
function requireMax() {
  if (hasRequiredMax) return max;
  hasRequiredMax = 1;
  max = Math.max;
  return max;
}
var min;
var hasRequiredMin;
function requireMin() {
  if (hasRequiredMin) return min;
  hasRequiredMin = 1;
  min = Math.min;
  return min;
}
var pow;
var hasRequiredPow;
function requirePow() {
  if (hasRequiredPow) return pow;
  hasRequiredPow = 1;
  pow = Math.pow;
  return pow;
}
var round;
var hasRequiredRound;
function requireRound() {
  if (hasRequiredRound) return round;
  hasRequiredRound = 1;
  round = Math.round;
  return round;
}
var _isNaN;
var hasRequired_isNaN;
function require_isNaN() {
  if (hasRequired_isNaN) return _isNaN;
  hasRequired_isNaN = 1;
  _isNaN = Number.isNaN || function isNaN2(a) {
    return a !== a;
  };
  return _isNaN;
}
var sign;
var hasRequiredSign;
function requireSign() {
  if (hasRequiredSign) return sign;
  hasRequiredSign = 1;
  var $isNaN = /* @__PURE__ */ require_isNaN();
  sign = function sign2(number) {
    if ($isNaN(number) || number === 0) {
      return number;
    }
    return number < 0 ? -1 : 1;
  };
  return sign;
}
var gOPD;
var hasRequiredGOPD;
function requireGOPD() {
  if (hasRequiredGOPD) return gOPD;
  hasRequiredGOPD = 1;
  gOPD = Object.getOwnPropertyDescriptor;
  return gOPD;
}
var gopd;
var hasRequiredGopd;
function requireGopd() {
  if (hasRequiredGopd) return gopd;
  hasRequiredGopd = 1;
  var $gOPD = /* @__PURE__ */ requireGOPD();
  if ($gOPD) {
    try {
      $gOPD([], "length");
    } catch (e) {
      $gOPD = null;
    }
  }
  gopd = $gOPD;
  return gopd;
}
var esDefineProperty;
var hasRequiredEsDefineProperty;
function requireEsDefineProperty() {
  if (hasRequiredEsDefineProperty) return esDefineProperty;
  hasRequiredEsDefineProperty = 1;
  var $defineProperty = Object.defineProperty || false;
  if ($defineProperty) {
    try {
      $defineProperty({}, "a", { value: 1 });
    } catch (e) {
      $defineProperty = false;
    }
  }
  esDefineProperty = $defineProperty;
  return esDefineProperty;
}
var hasSymbols;
var hasRequiredHasSymbols;
function requireHasSymbols() {
  if (hasRequiredHasSymbols) return hasSymbols;
  hasRequiredHasSymbols = 1;
  var origSymbol = typeof Symbol !== "undefined" && Symbol;
  var hasSymbolSham = requireShams$1();
  hasSymbols = function hasNativeSymbols() {
    if (typeof origSymbol !== "function") {
      return false;
    }
    if (typeof Symbol !== "function") {
      return false;
    }
    if (typeof origSymbol("foo") !== "symbol") {
      return false;
    }
    if (typeof Symbol("bar") !== "symbol") {
      return false;
    }
    return hasSymbolSham();
  };
  return hasSymbols;
}
var Reflect_getPrototypeOf;
var hasRequiredReflect_getPrototypeOf;
function requireReflect_getPrototypeOf() {
  if (hasRequiredReflect_getPrototypeOf) return Reflect_getPrototypeOf;
  hasRequiredReflect_getPrototypeOf = 1;
  Reflect_getPrototypeOf = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
  return Reflect_getPrototypeOf;
}
var Object_getPrototypeOf;
var hasRequiredObject_getPrototypeOf;
function requireObject_getPrototypeOf() {
  if (hasRequiredObject_getPrototypeOf) return Object_getPrototypeOf;
  hasRequiredObject_getPrototypeOf = 1;
  var $Object = /* @__PURE__ */ requireEsObjectAtoms();
  Object_getPrototypeOf = $Object.getPrototypeOf || null;
  return Object_getPrototypeOf;
}
var implementation;
var hasRequiredImplementation;
function requireImplementation() {
  if (hasRequiredImplementation) return implementation;
  hasRequiredImplementation = 1;
  var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
  var toStr = Object.prototype.toString;
  var max2 = Math.max;
  var funcType = "[object Function]";
  var concatty = function concatty2(a, b) {
    var arr = [];
    for (var i = 0; i < a.length; i += 1) {
      arr[i] = a[i];
    }
    for (var j = 0; j < b.length; j += 1) {
      arr[j + a.length] = b[j];
    }
    return arr;
  };
  var slicy = function slicy2(arrLike, offset) {
    var arr = [];
    for (var i = offset, j = 0; i < arrLike.length; i += 1, j += 1) {
      arr[j] = arrLike[i];
    }
    return arr;
  };
  var joiny = function(arr, joiner) {
    var str = "";
    for (var i = 0; i < arr.length; i += 1) {
      str += arr[i];
      if (i + 1 < arr.length) {
        str += joiner;
      }
    }
    return str;
  };
  implementation = function bind(that) {
    var target = this;
    if (typeof target !== "function" || toStr.apply(target) !== funcType) {
      throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
      if (this instanceof bound) {
        var result = target.apply(
          this,
          concatty(args, arguments)
        );
        if (Object(result) === result) {
          return result;
        }
        return this;
      }
      return target.apply(
        that,
        concatty(args, arguments)
      );
    };
    var boundLength = max2(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
      boundArgs[i] = "$" + i;
    }
    bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
    if (target.prototype) {
      var Empty = function Empty2() {
      };
      Empty.prototype = target.prototype;
      bound.prototype = new Empty();
      Empty.prototype = null;
    }
    return bound;
  };
  return implementation;
}
var functionBind;
var hasRequiredFunctionBind;
function requireFunctionBind() {
  if (hasRequiredFunctionBind) return functionBind;
  hasRequiredFunctionBind = 1;
  var implementation2 = requireImplementation();
  functionBind = Function.prototype.bind || implementation2;
  return functionBind;
}
var functionCall;
var hasRequiredFunctionCall;
function requireFunctionCall() {
  if (hasRequiredFunctionCall) return functionCall;
  hasRequiredFunctionCall = 1;
  functionCall = Function.prototype.call;
  return functionCall;
}
var functionApply;
var hasRequiredFunctionApply;
function requireFunctionApply() {
  if (hasRequiredFunctionApply) return functionApply;
  hasRequiredFunctionApply = 1;
  functionApply = Function.prototype.apply;
  return functionApply;
}
var reflectApply;
var hasRequiredReflectApply;
function requireReflectApply() {
  if (hasRequiredReflectApply) return reflectApply;
  hasRequiredReflectApply = 1;
  reflectApply = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
  return reflectApply;
}
var actualApply;
var hasRequiredActualApply;
function requireActualApply() {
  if (hasRequiredActualApply) return actualApply;
  hasRequiredActualApply = 1;
  var bind = requireFunctionBind();
  var $apply = requireFunctionApply();
  var $call = requireFunctionCall();
  var $reflectApply = requireReflectApply();
  actualApply = $reflectApply || bind.call($call, $apply);
  return actualApply;
}
var callBindApplyHelpers;
var hasRequiredCallBindApplyHelpers;
function requireCallBindApplyHelpers() {
  if (hasRequiredCallBindApplyHelpers) return callBindApplyHelpers;
  hasRequiredCallBindApplyHelpers = 1;
  var bind = requireFunctionBind();
  var $TypeError = /* @__PURE__ */ requireType();
  var $call = requireFunctionCall();
  var $actualApply = requireActualApply();
  callBindApplyHelpers = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== "function") {
      throw new $TypeError("a function is required");
    }
    return $actualApply(bind, $call, args);
  };
  return callBindApplyHelpers;
}
var get;
var hasRequiredGet;
function requireGet() {
  if (hasRequiredGet) return get;
  hasRequiredGet = 1;
  var callBind2 = requireCallBindApplyHelpers();
  var gOPD2 = /* @__PURE__ */ requireGopd();
  var hasProtoAccessor;
  try {
    hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (e) {
    if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") {
      throw e;
    }
  }
  var desc = !!hasProtoAccessor && gOPD2 && gOPD2(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  );
  var $Object = Object;
  var $getPrototypeOf = $Object.getPrototypeOf;
  get = desc && typeof desc.get === "function" ? callBind2([desc.get]) : typeof $getPrototypeOf === "function" ? (
    /** @type {import('./get')} */
    function getDunder(value) {
      return $getPrototypeOf(value == null ? value : $Object(value));
    }
  ) : false;
  return get;
}
var getProto;
var hasRequiredGetProto;
function requireGetProto() {
  if (hasRequiredGetProto) return getProto;
  hasRequiredGetProto = 1;
  var reflectGetProto = requireReflect_getPrototypeOf();
  var originalGetProto = requireObject_getPrototypeOf();
  var getDunderProto = /* @__PURE__ */ requireGet();
  getProto = reflectGetProto ? function getProto2(O) {
    return reflectGetProto(O);
  } : originalGetProto ? function getProto2(O) {
    if (!O || typeof O !== "object" && typeof O !== "function") {
      throw new TypeError("getProto: not an object");
    }
    return originalGetProto(O);
  } : getDunderProto ? function getProto2(O) {
    return getDunderProto(O);
  } : null;
  return getProto;
}
var asyncFunction;
var hasRequiredAsyncFunction;
function requireAsyncFunction() {
  if (hasRequiredAsyncFunction) return asyncFunction;
  hasRequiredAsyncFunction = 1;
  const cached = (
    /** @type {import('.').AsyncFunctionConstructor} */
    async function() {
    }.constructor
  );
  asyncFunction = () => cached;
  return asyncFunction;
}
var generatorFunction;
var hasRequiredGeneratorFunction;
function requireGeneratorFunction() {
  if (hasRequiredGeneratorFunction) return generatorFunction;
  hasRequiredGeneratorFunction = 1;
  const cached = (
    /** @type {GeneratorFunctionConstructor} */
    function* () {
    }.constructor
  );
  generatorFunction = () => cached;
  return generatorFunction;
}
var asyncGeneratorFunction;
var hasRequiredAsyncGeneratorFunction;
function requireAsyncGeneratorFunction() {
  if (hasRequiredAsyncGeneratorFunction) return asyncGeneratorFunction;
  hasRequiredAsyncGeneratorFunction = 1;
  const cached = (
    /** @type {import('.').AsyncGeneratorFunctionConstructor} */
    async function* () {
    }.constructor
  );
  asyncGeneratorFunction = () => cached;
  return asyncGeneratorFunction;
}
var hasown;
var hasRequiredHasown;
function requireHasown() {
  if (hasRequiredHasown) return hasown;
  hasRequiredHasown = 1;
  var call = Function.prototype.call;
  var $hasOwn = Object.prototype.hasOwnProperty;
  var bind = requireFunctionBind();
  hasown = bind.call(call, $hasOwn);
  return hasown;
}
var getIntrinsic;
var hasRequiredGetIntrinsic;
function requireGetIntrinsic() {
  if (hasRequiredGetIntrinsic) return getIntrinsic;
  hasRequiredGetIntrinsic = 1;
  var undefined$1;
  var $Object = /* @__PURE__ */ requireEsObjectAtoms();
  var $Error = /* @__PURE__ */ requireEsErrors();
  var $EvalError = /* @__PURE__ */ require_eval();
  var $RangeError = /* @__PURE__ */ requireRange();
  var $ReferenceError = /* @__PURE__ */ requireRef();
  var $SyntaxError = /* @__PURE__ */ requireSyntax();
  var $TypeError = /* @__PURE__ */ requireType();
  var $URIError = /* @__PURE__ */ requireUri();
  var abs2 = /* @__PURE__ */ requireAbs();
  var floor2 = /* @__PURE__ */ requireFloor();
  var max2 = /* @__PURE__ */ requireMax();
  var min2 = /* @__PURE__ */ requireMin();
  var pow2 = /* @__PURE__ */ requirePow();
  var round2 = /* @__PURE__ */ requireRound();
  var sign2 = /* @__PURE__ */ requireSign();
  var $gOPD = /* @__PURE__ */ requireGopd();
  var $defineProperty = /* @__PURE__ */ requireEsDefineProperty();
  var throwTypeError = function() {
    throw new $TypeError();
  };
  var ThrowTypeError = $gOPD ? (function() {
    try {
      arguments.callee;
      return throwTypeError;
    } catch (calleeThrows) {
      try {
        return $gOPD(arguments, "callee").get;
      } catch (gOPDthrows) {
        return throwTypeError;
      }
    }
  })() : throwTypeError;
  var hasSymbols2 = requireHasSymbols()();
  var getProto2 = requireGetProto();
  var $ObjectGPO = requireObject_getPrototypeOf();
  var $ReflectGPO = requireReflect_getPrototypeOf();
  var $apply = requireFunctionApply();
  var $call = requireFunctionCall();
  var needsEval = {};
  var TypedArray = typeof Uint8Array === "undefined" || !getProto2 ? undefined$1 : getProto2(Uint8Array);
  var INTRINSICS = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError === "undefined" ? undefined$1 : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined$1 : ArrayBuffer,
    "%ArrayIteratorPrototype%": hasSymbols2 && getProto2 ? getProto2([][Symbol.iterator]()) : undefined$1,
    "%AsyncFromSyncIteratorPrototype%": undefined$1,
    "%AsyncFunction%": needsEval,
    "%AsyncGenerator%": needsEval,
    "%AsyncGeneratorFunction%": needsEval,
    "%AsyncIteratorPrototype%": needsEval,
    "%Atomics%": typeof Atomics === "undefined" ? undefined$1 : Atomics,
    "%BigInt%": typeof BigInt === "undefined" ? undefined$1 : BigInt,
    "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined$1 : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined$1 : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView === "undefined" ? undefined$1 : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": $Error,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": $EvalError,
    "%Float16Array%": typeof Float16Array === "undefined" ? undefined$1 : Float16Array,
    "%Float32Array%": typeof Float32Array === "undefined" ? undefined$1 : Float32Array,
    "%Float64Array%": typeof Float64Array === "undefined" ? undefined$1 : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined$1 : FinalizationRegistry,
    "%Function%": Function,
    "%GeneratorFunction%": needsEval,
    "%Int8Array%": typeof Int8Array === "undefined" ? undefined$1 : Int8Array,
    "%Int16Array%": typeof Int16Array === "undefined" ? undefined$1 : Int16Array,
    "%Int32Array%": typeof Int32Array === "undefined" ? undefined$1 : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": hasSymbols2 && getProto2 ? getProto2(getProto2([][Symbol.iterator]())) : undefined$1,
    "%JSON%": typeof JSON === "object" ? JSON : undefined$1,
    "%Map%": typeof Map === "undefined" ? undefined$1 : Map,
    "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols2 || !getProto2 ? undefined$1 : getProto2((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": $Object,
    "%Object.getOwnPropertyDescriptor%": $gOPD,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise === "undefined" ? undefined$1 : Promise,
    "%Proxy%": typeof Proxy === "undefined" ? undefined$1 : Proxy,
    "%RangeError%": $RangeError,
    "%ReferenceError%": $ReferenceError,
    "%Reflect%": typeof Reflect === "undefined" ? undefined$1 : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set === "undefined" ? undefined$1 : Set,
    "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols2 || !getProto2 ? undefined$1 : getProto2((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined$1 : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": hasSymbols2 && getProto2 ? getProto2(""[Symbol.iterator]()) : undefined$1,
    "%Symbol%": hasSymbols2 ? Symbol : undefined$1,
    "%SyntaxError%": $SyntaxError,
    "%ThrowTypeError%": ThrowTypeError,
    "%TypedArray%": TypedArray,
    "%TypeError%": $TypeError,
    "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined$1 : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined$1 : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined$1 : Uint16Array,
    "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined$1 : Uint32Array,
    "%URIError%": $URIError,
    "%WeakMap%": typeof WeakMap === "undefined" ? undefined$1 : WeakMap,
    "%WeakRef%": typeof WeakRef === "undefined" ? undefined$1 : WeakRef,
    "%WeakSet%": typeof WeakSet === "undefined" ? undefined$1 : WeakSet,
    "%Function.prototype.call%": $call,
    "%Function.prototype.apply%": $apply,
    "%Object.defineProperty%": $defineProperty,
    "%Object.getPrototypeOf%": $ObjectGPO,
    "%Math.abs%": abs2,
    "%Math.floor%": floor2,
    "%Math.max%": max2,
    "%Math.min%": min2,
    "%Math.pow%": pow2,
    "%Math.round%": round2,
    "%Math.sign%": sign2,
    "%Reflect.getPrototypeOf%": $ReflectGPO
  };
  if (getProto2) {
    try {
      null.error;
    } catch (e) {
      var errorProto = getProto2(getProto2(e));
      INTRINSICS["%Error.prototype%"] = errorProto;
    }
  }
  var getAsyncFunction = requireAsyncFunction();
  var getGeneratorFunction = /* @__PURE__ */ requireGeneratorFunction();
  var getAsyncGeneratorFunction = requireAsyncGeneratorFunction();
  var doEval = function doEval2(name) {
    var value;
    if (name === "%AsyncFunction%") {
      value = getAsyncFunction() || void undefined$1;
    } else if (name === "%GeneratorFunction%") {
      value = getGeneratorFunction() || void undefined$1;
    } else if (name === "%AsyncGeneratorFunction%") {
      value = getAsyncGeneratorFunction() || void undefined$1;
    } else if (name === "%AsyncGenerator%") {
      var fn = doEval2("%AsyncGeneratorFunction%");
      if (fn) {
        value = fn.prototype;
      }
    } else if (name === "%AsyncIteratorPrototype%") {
      var gen = doEval2("%AsyncGenerator%");
      if (gen && getProto2) {
        value = getProto2(gen.prototype);
      }
    }
    INTRINSICS[name] = value;
    return value;
  };
  var LEGACY_ALIASES = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  };
  var bind = requireFunctionBind();
  var hasOwn = /* @__PURE__ */ requireHasown();
  var $concat = bind.call($call, Array.prototype.concat);
  var $spliceApply = bind.call($apply, Array.prototype.splice);
  var $replace = bind.call($call, String.prototype.replace);
  var $strSlice = bind.call($call, String.prototype.slice);
  var $exec = bind.call($call, RegExp.prototype.exec);
  var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath = function stringToPath2(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === "%" && last !== "%") {
      throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
    } else if (last === "%" && first !== "%") {
      throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
    }
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
      result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
    });
    return result;
  };
  var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
      alias = LEGACY_ALIASES[intrinsicName];
      intrinsicName = "%" + alias[0] + "%";
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
      var value = INTRINSICS[intrinsicName];
      if (value === needsEval) {
        value = doEval(intrinsicName);
      }
      if (typeof value === "undefined" && !allowMissing) {
        throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
      }
      return {
        alias,
        name: intrinsicName,
        value
      };
    }
    throw new $SyntaxError("intrinsic " + name + " does not exist!");
  };
  getIntrinsic = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== "string" || name.length === 0) {
      throw new $TypeError("intrinsic name must be a non-empty string");
    }
    if (arguments.length > 1 && typeof allowMissing !== "boolean") {
      throw new $TypeError('"allowMissing" argument must be a boolean');
    }
    if ($exec(/^%?[^%]*%?$/, name) === null) {
      throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    }
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
    var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
      intrinsicBaseName = alias[0];
      $spliceApply(parts, $concat([0, 1], alias));
    }
    for (var i = 1, isOwn = true; i < parts.length; i += 1) {
      var part = parts[i];
      var first = $strSlice(part, 0, 1);
      var last = $strSlice(part, -1);
      if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
        throw new $SyntaxError("property names with quotes must have matching quotes");
      }
      if (part === "constructor" || !isOwn) {
        skipFurtherCaching = true;
      }
      intrinsicBaseName += "." + part;
      intrinsicRealName = "%" + intrinsicBaseName + "%";
      if (hasOwn(INTRINSICS, intrinsicRealName)) {
        value = INTRINSICS[intrinsicRealName];
      } else if (value != null) {
        if (!(part in value)) {
          if (!allowMissing) {
            throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
          }
          return void undefined$1;
        }
        if ($gOPD && i + 1 >= parts.length) {
          var desc = $gOPD(value, part);
          isOwn = !!desc;
          if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
            value = desc.get;
          } else {
            value = value[part];
          }
        } else {
          isOwn = hasOwn(value, part);
          value = value[part];
        }
        if (isOwn && !skipFurtherCaching) {
          INTRINSICS[intrinsicRealName] = value;
        }
      }
    }
    return value;
  };
  return getIntrinsic;
}
var callBound;
var hasRequiredCallBound;
function requireCallBound() {
  if (hasRequiredCallBound) return callBound;
  hasRequiredCallBound = 1;
  var GetIntrinsic = /* @__PURE__ */ requireGetIntrinsic();
  var callBindBasic = requireCallBindApplyHelpers();
  var $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
  callBound = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      GetIntrinsic(name, !!allowMissing)
    );
    if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
      return callBindBasic(
        /** @type {const} */
        [intrinsic]
      );
    }
    return intrinsic;
  };
  return callBound;
}
var isArguments;
var hasRequiredIsArguments;
function requireIsArguments() {
  if (hasRequiredIsArguments) return isArguments;
  hasRequiredIsArguments = 1;
  var hasToStringTag = requireShams()();
  var callBound2 = /* @__PURE__ */ requireCallBound();
  var $toString = callBound2("Object.prototype.toString");
  var isStandardArguments = function isArguments2(value) {
    if (hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) {
      return false;
    }
    return $toString(value) === "[object Arguments]";
  };
  var isLegacyArguments = function isArguments2(value) {
    if (isStandardArguments(value)) {
      return true;
    }
    return value !== null && typeof value === "object" && "length" in value && typeof value.length === "number" && value.length >= 0 && $toString(value) !== "[object Array]" && "callee" in value && $toString(value.callee) === "[object Function]";
  };
  var supportsStandardArguments = (function() {
    return isStandardArguments(arguments);
  })();
  isStandardArguments.isLegacyArguments = isLegacyArguments;
  isArguments = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
  return isArguments;
}
var isRegex;
var hasRequiredIsRegex;
function requireIsRegex() {
  if (hasRequiredIsRegex) return isRegex;
  hasRequiredIsRegex = 1;
  var callBound2 = /* @__PURE__ */ requireCallBound();
  var hasToStringTag = requireShams()();
  var hasOwn = /* @__PURE__ */ requireHasown();
  var gOPD2 = /* @__PURE__ */ requireGopd();
  var fn;
  if (hasToStringTag) {
    var $exec = callBound2("RegExp.prototype.exec");
    var isRegexMarker = {};
    var throwRegexMarker = function() {
      throw isRegexMarker;
    };
    var badStringifier = {
      toString: throwRegexMarker,
      valueOf: throwRegexMarker
    };
    if (typeof Symbol.toPrimitive === "symbol") {
      badStringifier[Symbol.toPrimitive] = throwRegexMarker;
    }
    fn = function isRegex2(value) {
      if (!value || typeof value !== "object") {
        return false;
      }
      var descriptor = (
        /** @type {NonNullable<typeof gOPD>} */
        gOPD2(
          /** @type {{ lastIndex?: unknown }} */
          value,
          "lastIndex"
        )
      );
      var hasLastIndexDataProperty = descriptor && hasOwn(descriptor, "value");
      if (!hasLastIndexDataProperty) {
        return false;
      }
      try {
        $exec(
          value,
          /** @type {string} */
          /** @type {unknown} */
          badStringifier
        );
      } catch (e) {
        return e === isRegexMarker;
      }
    };
  } else {
    var $toString = callBound2("Object.prototype.toString");
    var regexClass = "[object RegExp]";
    fn = function isRegex2(value) {
      if (!value || typeof value !== "object" && typeof value !== "function") {
        return false;
      }
      return $toString(value) === regexClass;
    };
  }
  isRegex = fn;
  return isRegex;
}
var safeRegexTest;
var hasRequiredSafeRegexTest;
function requireSafeRegexTest() {
  if (hasRequiredSafeRegexTest) return safeRegexTest;
  hasRequiredSafeRegexTest = 1;
  var callBound2 = /* @__PURE__ */ requireCallBound();
  var isRegex2 = requireIsRegex();
  var $exec = callBound2("RegExp.prototype.exec");
  var $TypeError = /* @__PURE__ */ requireType();
  safeRegexTest = function regexTester(regex) {
    if (!isRegex2(regex)) {
      throw new $TypeError("`regex` must be a RegExp");
    }
    return function test(s) {
      return $exec(regex, s) !== null;
    };
  };
  return safeRegexTest;
}
var isGeneratorFunction;
var hasRequiredIsGeneratorFunction;
function requireIsGeneratorFunction() {
  if (hasRequiredIsGeneratorFunction) return isGeneratorFunction;
  hasRequiredIsGeneratorFunction = 1;
  var callBound2 = /* @__PURE__ */ requireCallBound();
  var safeRegexTest2 = /* @__PURE__ */ requireSafeRegexTest();
  var isFnRegex = safeRegexTest2(/^\s*(?:function)?\*/);
  var hasToStringTag = requireShams()();
  var getProto2 = requireGetProto();
  var toStr = callBound2("Object.prototype.toString");
  var fnToStr = callBound2("Function.prototype.toString");
  var getGeneratorFunction = /* @__PURE__ */ requireGeneratorFunction();
  isGeneratorFunction = function isGeneratorFunction2(fn) {
    if (typeof fn !== "function") {
      return false;
    }
    if (isFnRegex(fnToStr(fn))) {
      return true;
    }
    if (!hasToStringTag) {
      var str = toStr(fn);
      return str === "[object GeneratorFunction]";
    }
    if (!getProto2) {
      return false;
    }
    var GeneratorFunction = getGeneratorFunction();
    return GeneratorFunction && getProto2(fn) === GeneratorFunction.prototype;
  };
  return isGeneratorFunction;
}
var isCallable;
var hasRequiredIsCallable;
function requireIsCallable() {
  if (hasRequiredIsCallable) return isCallable;
  hasRequiredIsCallable = 1;
  var fnToStr = Function.prototype.toString;
  var reflectApply2 = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
  var badArrayLike;
  var isCallableMarker;
  if (typeof reflectApply2 === "function" && typeof Object.defineProperty === "function") {
    try {
      badArrayLike = Object.defineProperty({}, "length", {
        get: function() {
          throw isCallableMarker;
        }
      });
      isCallableMarker = {};
      reflectApply2(function() {
        throw 42;
      }, null, badArrayLike);
    } catch (_) {
      if (_ !== isCallableMarker) {
        reflectApply2 = null;
      }
    }
  } else {
    reflectApply2 = null;
  }
  var constructorRegex = /^\s*class\b/;
  var isES6ClassFn = function isES6ClassFunction(value) {
    try {
      var fnStr = fnToStr.call(value);
      return constructorRegex.test(fnStr);
    } catch (e) {
      return false;
    }
  };
  var tryFunctionObject = function tryFunctionToStr(value) {
    try {
      if (isES6ClassFn(value)) {
        return false;
      }
      fnToStr.call(value);
      return true;
    } catch (e) {
      return false;
    }
  };
  var toStr = Object.prototype.toString;
  var objectClass = "[object Object]";
  var fnClass = "[object Function]";
  var genClass = "[object GeneratorFunction]";
  var ddaClass = "[object HTMLAllCollection]";
  var ddaClass2 = "[object HTML document.all class]";
  var ddaClass3 = "[object HTMLCollection]";
  var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag;
  var isIE68 = !(0 in [,]);
  var isDDA = function isDocumentDotAll() {
    return false;
  };
  if (typeof document === "object") {
    var all = document.all;
    if (toStr.call(all) === toStr.call(document.all)) {
      isDDA = function isDocumentDotAll(value) {
        if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) {
          try {
            var str = toStr.call(value);
            return (str === ddaClass || str === ddaClass2 || str === ddaClass3 || str === objectClass) && value("") == null;
          } catch (e) {
          }
        }
        return false;
      };
    }
  }
  isCallable = reflectApply2 ? function isCallable2(value) {
    if (isDDA(value)) {
      return true;
    }
    if (!value) {
      return false;
    }
    if (typeof value !== "function" && typeof value !== "object") {
      return false;
    }
    try {
      reflectApply2(value, null, badArrayLike);
    } catch (e) {
      if (e !== isCallableMarker) {
        return false;
      }
    }
    return !isES6ClassFn(value) && tryFunctionObject(value);
  } : function isCallable2(value) {
    if (isDDA(value)) {
      return true;
    }
    if (!value) {
      return false;
    }
    if (typeof value !== "function" && typeof value !== "object") {
      return false;
    }
    if (hasToStringTag) {
      return tryFunctionObject(value);
    }
    if (isES6ClassFn(value)) {
      return false;
    }
    var strClass = toStr.call(value);
    if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) {
      return false;
    }
    return tryFunctionObject(value);
  };
  return isCallable;
}
var forEach;
var hasRequiredForEach;
function requireForEach() {
  if (hasRequiredForEach) return forEach;
  hasRequiredForEach = 1;
  var isCallable2 = requireIsCallable();
  var toStr = Object.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var forEachArray = function forEachArray2(array, iterator, receiver) {
    for (var i = 0, len = array.length; i < len; i++) {
      if (hasOwnProperty.call(array, i)) {
        if (receiver == null) {
          iterator(array[i], i, array);
        } else {
          iterator.call(receiver, array[i], i, array);
        }
      }
    }
  };
  var forEachString = function forEachString2(string, iterator, receiver) {
    for (var i = 0, len = string.length; i < len; i++) {
      if (receiver == null) {
        iterator(string.charAt(i), i, string);
      } else {
        iterator.call(receiver, string.charAt(i), i, string);
      }
    }
  };
  var forEachObject = function forEachObject2(object, iterator, receiver) {
    for (var k in object) {
      if (hasOwnProperty.call(object, k)) {
        if (receiver == null) {
          iterator(object[k], k, object);
        } else {
          iterator.call(receiver, object[k], k, object);
        }
      }
    }
  };
  function isArray(x) {
    return toStr.call(x) === "[object Array]";
  }
  forEach = function forEach2(list, iterator, thisArg) {
    if (!isCallable2(iterator)) {
      throw new TypeError("iterator must be a function");
    }
    var receiver;
    if (arguments.length >= 3) {
      receiver = thisArg;
    }
    if (isArray(list)) {
      forEachArray(list, iterator, receiver);
    } else if (typeof list === "string") {
      forEachString(list, iterator, receiver);
    } else {
      forEachObject(list, iterator, receiver);
    }
  };
  return forEach;
}
var possibleTypedArrayNames;
var hasRequiredPossibleTypedArrayNames;
function requirePossibleTypedArrayNames() {
  if (hasRequiredPossibleTypedArrayNames) return possibleTypedArrayNames;
  hasRequiredPossibleTypedArrayNames = 1;
  possibleTypedArrayNames = [
    "Float16Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Int16Array",
    "Int32Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array"
  ];
  return possibleTypedArrayNames;
}
var availableTypedArrays;
var hasRequiredAvailableTypedArrays;
function requireAvailableTypedArrays() {
  if (hasRequiredAvailableTypedArrays) return availableTypedArrays;
  hasRequiredAvailableTypedArrays = 1;
  var possibleNames = /* @__PURE__ */ requirePossibleTypedArrayNames();
  var g = typeof globalThis === "undefined" ? commonjsGlobal : globalThis;
  availableTypedArrays = function availableTypedArrays2() {
    var out = [];
    for (var i = 0; i < possibleNames.length; i++) {
      if (typeof g[possibleNames[i]] === "function") {
        out[out.length] = possibleNames[i];
      }
    }
    return out;
  };
  return availableTypedArrays;
}
var callBind = { exports: {} };
var defineDataProperty;
var hasRequiredDefineDataProperty;
function requireDefineDataProperty() {
  if (hasRequiredDefineDataProperty) return defineDataProperty;
  hasRequiredDefineDataProperty = 1;
  var $defineProperty = /* @__PURE__ */ requireEsDefineProperty();
  var $SyntaxError = /* @__PURE__ */ requireSyntax();
  var $TypeError = /* @__PURE__ */ requireType();
  var gopd2 = /* @__PURE__ */ requireGopd();
  defineDataProperty = function defineDataProperty2(obj, property, value) {
    if (!obj || typeof obj !== "object" && typeof obj !== "function") {
      throw new $TypeError("`obj` must be an object or a function`");
    }
    if (typeof property !== "string" && typeof property !== "symbol") {
      throw new $TypeError("`property` must be a string or a symbol`");
    }
    if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
      throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
    }
    if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
      throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
    }
    if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
      throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
    }
    if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
      throw new $TypeError("`loose`, if provided, must be a boolean");
    }
    var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
    var nonWritable = arguments.length > 4 ? arguments[4] : null;
    var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
    var loose = arguments.length > 6 ? arguments[6] : false;
    var desc = !!gopd2 && gopd2(obj, property);
    if ($defineProperty) {
      $defineProperty(obj, property, {
        configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
        enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
        value,
        writable: nonWritable === null && desc ? desc.writable : !nonWritable
      });
    } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
      obj[property] = value;
    } else {
      throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
    }
  };
  return defineDataProperty;
}
var hasPropertyDescriptors_1;
var hasRequiredHasPropertyDescriptors;
function requireHasPropertyDescriptors() {
  if (hasRequiredHasPropertyDescriptors) return hasPropertyDescriptors_1;
  hasRequiredHasPropertyDescriptors = 1;
  var $defineProperty = /* @__PURE__ */ requireEsDefineProperty();
  var hasPropertyDescriptors = function hasPropertyDescriptors2() {
    return !!$defineProperty;
  };
  hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
    if (!$defineProperty) {
      return null;
    }
    try {
      return $defineProperty([], "length", { value: 1 }).length !== 1;
    } catch (e) {
      return true;
    }
  };
  hasPropertyDescriptors_1 = hasPropertyDescriptors;
  return hasPropertyDescriptors_1;
}
var setFunctionLength;
var hasRequiredSetFunctionLength;
function requireSetFunctionLength() {
  if (hasRequiredSetFunctionLength) return setFunctionLength;
  hasRequiredSetFunctionLength = 1;
  var GetIntrinsic = /* @__PURE__ */ requireGetIntrinsic();
  var define = /* @__PURE__ */ requireDefineDataProperty();
  var hasDescriptors = /* @__PURE__ */ requireHasPropertyDescriptors()();
  var gOPD2 = /* @__PURE__ */ requireGopd();
  var $TypeError = /* @__PURE__ */ requireType();
  var $floor = GetIntrinsic("%Math.floor%");
  setFunctionLength = function setFunctionLength2(fn, length) {
    if (typeof fn !== "function") {
      throw new $TypeError("`fn` is not a function");
    }
    if (typeof length !== "number" || length < 0 || length > 4294967295 || $floor(length) !== length) {
      throw new $TypeError("`length` must be a positive 32-bit integer");
    }
    var loose = arguments.length > 2 && !!arguments[2];
    var functionLengthIsConfigurable = true;
    var functionLengthIsWritable = true;
    if ("length" in fn && gOPD2) {
      var desc = gOPD2(fn, "length");
      if (desc && !desc.configurable) {
        functionLengthIsConfigurable = false;
      }
      if (desc && !desc.writable) {
        functionLengthIsWritable = false;
      }
    }
    if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
      if (hasDescriptors) {
        define(
          /** @type {Parameters<define>[0]} */
          fn,
          "length",
          length,
          true,
          true
        );
      } else {
        define(
          /** @type {Parameters<define>[0]} */
          fn,
          "length",
          length
        );
      }
    }
    return fn;
  };
  return setFunctionLength;
}
var applyBind;
var hasRequiredApplyBind;
function requireApplyBind() {
  if (hasRequiredApplyBind) return applyBind;
  hasRequiredApplyBind = 1;
  var bind = requireFunctionBind();
  var $apply = requireFunctionApply();
  var actualApply2 = requireActualApply();
  applyBind = function applyBind2() {
    return actualApply2(bind, $apply, arguments);
  };
  return applyBind;
}
var hasRequiredCallBind;
function requireCallBind() {
  if (hasRequiredCallBind) return callBind.exports;
  hasRequiredCallBind = 1;
  (function(module) {
    var setFunctionLength2 = /* @__PURE__ */ requireSetFunctionLength();
    var $defineProperty = /* @__PURE__ */ requireEsDefineProperty();
    var callBindBasic = requireCallBindApplyHelpers();
    var applyBind2 = requireApplyBind();
    module.exports = function callBind2(originalFunction) {
      var func = callBindBasic(arguments);
      var adjustedLength = originalFunction.length - (arguments.length - 1);
      return setFunctionLength2(
        func,
        1 + (adjustedLength > 0 ? adjustedLength : 0),
        true
      );
    };
    if ($defineProperty) {
      $defineProperty(module.exports, "apply", { value: applyBind2 });
    } else {
      module.exports.apply = applyBind2;
    }
  })(callBind);
  return callBind.exports;
}
var whichTypedArray;
var hasRequiredWhichTypedArray;
function requireWhichTypedArray() {
  if (hasRequiredWhichTypedArray) return whichTypedArray;
  hasRequiredWhichTypedArray = 1;
  var forEach2 = requireForEach();
  var availableTypedArrays2 = /* @__PURE__ */ requireAvailableTypedArrays();
  var callBind2 = requireCallBind();
  var callBound2 = /* @__PURE__ */ requireCallBound();
  var gOPD2 = /* @__PURE__ */ requireGopd();
  var getProto2 = requireGetProto();
  var $toString = callBound2("Object.prototype.toString");
  var hasToStringTag = requireShams()();
  var g = typeof globalThis === "undefined" ? commonjsGlobal : globalThis;
  var typedArrays = availableTypedArrays2();
  var $slice = callBound2("String.prototype.slice");
  var $indexOf = callBound2("Array.prototype.indexOf", true) || function indexOf(array, value) {
    for (var i = 0; i < array.length; i += 1) {
      if (array[i] === value) {
        return i;
      }
    }
    return -1;
  };
  var cache = { __proto__: null };
  if (hasToStringTag && gOPD2 && getProto2) {
    forEach2(typedArrays, function(typedArray) {
      var arr = new g[typedArray]();
      if (Symbol.toStringTag in arr && getProto2) {
        var proto = getProto2(arr);
        var descriptor = gOPD2(proto, Symbol.toStringTag);
        if (!descriptor && proto) {
          var superProto = getProto2(proto);
          descriptor = gOPD2(superProto, Symbol.toStringTag);
        }
        cache["$" + typedArray] = callBind2(descriptor.get);
      }
    });
  } else {
    forEach2(typedArrays, function(typedArray) {
      var arr = new g[typedArray]();
      var fn = arr.slice || arr.set;
      if (fn) {
        cache[
          /** @type {`$${import('.').TypedArrayName}`} */
          "$" + typedArray
        ] = /** @type {import('./types').BoundSlice | import('./types').BoundSet} */
        // @ts-expect-error TODO FIXME
        callBind2(fn);
      }
    });
  }
  var tryTypedArrays = function tryAllTypedArrays(value) {
    var found = false;
    forEach2(
      /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
      cache,
      /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
      function(getter, typedArray) {
        if (!found) {
          try {
            if ("$" + getter(value) === typedArray) {
              found = /** @type {import('.').TypedArrayName} */
              $slice(typedArray, 1);
            }
          } catch (e) {
          }
        }
      }
    );
    return found;
  };
  var trySlices = function tryAllSlices(value) {
    var found = false;
    forEach2(
      /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
      cache,
      /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
      function(getter, name) {
        if (!found) {
          try {
            getter(value);
            found = /** @type {import('.').TypedArrayName} */
            $slice(name, 1);
          } catch (e) {
          }
        }
      }
    );
    return found;
  };
  whichTypedArray = function whichTypedArray2(value) {
    if (!value || typeof value !== "object") {
      return false;
    }
    if (!hasToStringTag) {
      var tag = $slice($toString(value), 8, -1);
      if ($indexOf(typedArrays, tag) > -1) {
        return tag;
      }
      if (tag !== "Object") {
        return false;
      }
      return trySlices(value);
    }
    if (!gOPD2) {
      return null;
    }
    return tryTypedArrays(value);
  };
  return whichTypedArray;
}
var isTypedArray;
var hasRequiredIsTypedArray;
function requireIsTypedArray() {
  if (hasRequiredIsTypedArray) return isTypedArray;
  hasRequiredIsTypedArray = 1;
  var whichTypedArray2 = /* @__PURE__ */ requireWhichTypedArray();
  isTypedArray = function isTypedArray2(value) {
    return !!whichTypedArray2(value);
  };
  return isTypedArray;
}
var hasRequiredTypes;
function requireTypes() {
  if (hasRequiredTypes) return types;
  hasRequiredTypes = 1;
  (function(exports) {
    var isArgumentsObject = /* @__PURE__ */ requireIsArguments();
    var isGeneratorFunction2 = requireIsGeneratorFunction();
    var whichTypedArray2 = /* @__PURE__ */ requireWhichTypedArray();
    var isTypedArray2 = /* @__PURE__ */ requireIsTypedArray();
    function uncurryThis(f) {
      return f.call.bind(f);
    }
    var BigIntSupported = typeof BigInt !== "undefined";
    var SymbolSupported = typeof Symbol !== "undefined";
    var ObjectToString = uncurryThis(Object.prototype.toString);
    var numberValue = uncurryThis(Number.prototype.valueOf);
    var stringValue = uncurryThis(String.prototype.valueOf);
    var booleanValue = uncurryThis(Boolean.prototype.valueOf);
    if (BigIntSupported) {
      var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
    }
    if (SymbolSupported) {
      var symbolValue = uncurryThis(Symbol.prototype.valueOf);
    }
    function checkBoxedPrimitive(value, prototypeValueOf) {
      if (typeof value !== "object") {
        return false;
      }
      try {
        prototypeValueOf(value);
        return true;
      } catch (e) {
        return false;
      }
    }
    exports.isArgumentsObject = isArgumentsObject;
    exports.isGeneratorFunction = isGeneratorFunction2;
    exports.isTypedArray = isTypedArray2;
    function isPromise(input) {
      return typeof Promise !== "undefined" && input instanceof Promise || input !== null && typeof input === "object" && typeof input.then === "function" && typeof input.catch === "function";
    }
    exports.isPromise = isPromise;
    function isArrayBufferView(value) {
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        return ArrayBuffer.isView(value);
      }
      return isTypedArray2(value) || isDataView(value);
    }
    exports.isArrayBufferView = isArrayBufferView;
    function isUint8Array(value) {
      return whichTypedArray2(value) === "Uint8Array";
    }
    exports.isUint8Array = isUint8Array;
    function isUint8ClampedArray(value) {
      return whichTypedArray2(value) === "Uint8ClampedArray";
    }
    exports.isUint8ClampedArray = isUint8ClampedArray;
    function isUint16Array(value) {
      return whichTypedArray2(value) === "Uint16Array";
    }
    exports.isUint16Array = isUint16Array;
    function isUint32Array(value) {
      return whichTypedArray2(value) === "Uint32Array";
    }
    exports.isUint32Array = isUint32Array;
    function isInt8Array(value) {
      return whichTypedArray2(value) === "Int8Array";
    }
    exports.isInt8Array = isInt8Array;
    function isInt16Array(value) {
      return whichTypedArray2(value) === "Int16Array";
    }
    exports.isInt16Array = isInt16Array;
    function isInt32Array(value) {
      return whichTypedArray2(value) === "Int32Array";
    }
    exports.isInt32Array = isInt32Array;
    function isFloat32Array(value) {
      return whichTypedArray2(value) === "Float32Array";
    }
    exports.isFloat32Array = isFloat32Array;
    function isFloat64Array(value) {
      return whichTypedArray2(value) === "Float64Array";
    }
    exports.isFloat64Array = isFloat64Array;
    function isBigInt64Array(value) {
      return whichTypedArray2(value) === "BigInt64Array";
    }
    exports.isBigInt64Array = isBigInt64Array;
    function isBigUint64Array(value) {
      return whichTypedArray2(value) === "BigUint64Array";
    }
    exports.isBigUint64Array = isBigUint64Array;
    function isMapToString(value) {
      return ObjectToString(value) === "[object Map]";
    }
    isMapToString.working = typeof Map !== "undefined" && isMapToString(/* @__PURE__ */ new Map());
    function isMap(value) {
      if (typeof Map === "undefined") {
        return false;
      }
      return isMapToString.working ? isMapToString(value) : value instanceof Map;
    }
    exports.isMap = isMap;
    function isSetToString(value) {
      return ObjectToString(value) === "[object Set]";
    }
    isSetToString.working = typeof Set !== "undefined" && isSetToString(/* @__PURE__ */ new Set());
    function isSet(value) {
      if (typeof Set === "undefined") {
        return false;
      }
      return isSetToString.working ? isSetToString(value) : value instanceof Set;
    }
    exports.isSet = isSet;
    function isWeakMapToString(value) {
      return ObjectToString(value) === "[object WeakMap]";
    }
    isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(/* @__PURE__ */ new WeakMap());
    function isWeakMap(value) {
      if (typeof WeakMap === "undefined") {
        return false;
      }
      return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
    }
    exports.isWeakMap = isWeakMap;
    function isWeakSetToString(value) {
      return ObjectToString(value) === "[object WeakSet]";
    }
    isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(/* @__PURE__ */ new WeakSet());
    function isWeakSet(value) {
      return isWeakSetToString(value);
    }
    exports.isWeakSet = isWeakSet;
    function isArrayBufferToString(value) {
      return ObjectToString(value) === "[object ArrayBuffer]";
    }
    isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer());
    function isArrayBuffer(value) {
      if (typeof ArrayBuffer === "undefined") {
        return false;
      }
      return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
    }
    exports.isArrayBuffer = isArrayBuffer;
    function isDataViewToString(value) {
      return ObjectToString(value) === "[object DataView]";
    }
    isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
    function isDataView(value) {
      if (typeof DataView === "undefined") {
        return false;
      }
      return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
    }
    exports.isDataView = isDataView;
    var SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : void 0;
    function isSharedArrayBufferToString(value) {
      return ObjectToString(value) === "[object SharedArrayBuffer]";
    }
    function isSharedArrayBuffer(value) {
      if (typeof SharedArrayBufferCopy === "undefined") {
        return false;
      }
      if (typeof isSharedArrayBufferToString.working === "undefined") {
        isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
      }
      return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
    }
    exports.isSharedArrayBuffer = isSharedArrayBuffer;
    function isAsyncFunction(value) {
      return ObjectToString(value) === "[object AsyncFunction]";
    }
    exports.isAsyncFunction = isAsyncFunction;
    function isMapIterator(value) {
      return ObjectToString(value) === "[object Map Iterator]";
    }
    exports.isMapIterator = isMapIterator;
    function isSetIterator(value) {
      return ObjectToString(value) === "[object Set Iterator]";
    }
    exports.isSetIterator = isSetIterator;
    function isGeneratorObject(value) {
      return ObjectToString(value) === "[object Generator]";
    }
    exports.isGeneratorObject = isGeneratorObject;
    function isWebAssemblyCompiledModule(value) {
      return ObjectToString(value) === "[object WebAssembly.Module]";
    }
    exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
    function isNumberObject(value) {
      return checkBoxedPrimitive(value, numberValue);
    }
    exports.isNumberObject = isNumberObject;
    function isStringObject(value) {
      return checkBoxedPrimitive(value, stringValue);
    }
    exports.isStringObject = isStringObject;
    function isBooleanObject(value) {
      return checkBoxedPrimitive(value, booleanValue);
    }
    exports.isBooleanObject = isBooleanObject;
    function isBigIntObject(value) {
      return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
    }
    exports.isBigIntObject = isBigIntObject;
    function isSymbolObject(value) {
      return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
    }
    exports.isSymbolObject = isSymbolObject;
    function isBoxedPrimitive(value) {
      return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
    }
    exports.isBoxedPrimitive = isBoxedPrimitive;
    function isAnyArrayBuffer(value) {
      return typeof Uint8Array !== "undefined" && (isArrayBuffer(value) || isSharedArrayBuffer(value));
    }
    exports.isAnyArrayBuffer = isAnyArrayBuffer;
    ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(method) {
      Object.defineProperty(exports, method, {
        enumerable: false,
        value: function() {
          throw new Error(method + " is not supported in userland");
        }
      });
    });
  })(types);
  return types;
}
var isBufferBrowser;
var hasRequiredIsBufferBrowser;
function requireIsBufferBrowser() {
  if (hasRequiredIsBufferBrowser) return isBufferBrowser;
  hasRequiredIsBufferBrowser = 1;
  isBufferBrowser = function isBuffer(arg) {
    return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
  };
  return isBufferBrowser;
}
var inherits_browser = { exports: {} };
var hasRequiredInherits_browser;
function requireInherits_browser() {
  if (hasRequiredInherits_browser) return inherits_browser.exports;
  hasRequiredInherits_browser = 1;
  if (typeof Object.create === "function") {
    inherits_browser.exports = function inherits(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      }
    };
  } else {
    inherits_browser.exports = function inherits(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      }
    };
  }
  return inherits_browser.exports;
}
var hasRequiredUtil;
function requireUtil() {
  if (hasRequiredUtil) return util;
  hasRequiredUtil = 1;
  (function(exports) {
    var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(obj) {
      var keys = Object.keys(obj);
      var descriptors = {};
      for (var i = 0; i < keys.length; i++) {
        descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
      }
      return descriptors;
    };
    var formatRegExp = /%[sdj%]/g;
    exports.format = function(f) {
      if (!isString(f)) {
        var objects = [];
        for (var i = 0; i < arguments.length; i++) {
          objects.push(inspect(arguments[i]));
        }
        return objects.join(" ");
      }
      var i = 1;
      var args = arguments;
      var len = args.length;
      var str = String(f).replace(formatRegExp, function(x2) {
        if (x2 === "%%") return "%";
        if (i >= len) return x2;
        switch (x2) {
          case "%s":
            return String(args[i++]);
          case "%d":
            return Number(args[i++]);
          case "%j":
            try {
              return JSON.stringify(args[i++]);
            } catch (_) {
              return "[Circular]";
            }
          default:
            return x2;
        }
      });
      for (var x = args[i]; i < len; x = args[++i]) {
        if (isNull(x) || !isObject(x)) {
          str += " " + x;
        } else {
          str += " " + inspect(x);
        }
      }
      return str;
    };
    exports.deprecate = function(fn, msg) {
      if (typeof process !== "undefined" && process.noDeprecation === true) {
        return fn;
      }
      if (typeof process === "undefined") {
        return function() {
          return exports.deprecate(fn, msg).apply(this, arguments);
        };
      }
      var warned = false;
      function deprecated() {
        if (!warned) {
          if (process.throwDeprecation) {
            throw new Error(msg);
          } else if (process.traceDeprecation) {
            console.trace(msg);
          } else {
            console.error(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }
      return deprecated;
    };
    var debugs = {};
    var debugEnvRegex = /^$/;
    if (process.env.NODE_DEBUG) {
      var debugEnv = process.env.NODE_DEBUG;
      debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
      debugEnvRegex = new RegExp("^" + debugEnv + "$", "i");
    }
    exports.debuglog = function(set) {
      set = set.toUpperCase();
      if (!debugs[set]) {
        if (debugEnvRegex.test(set)) {
          var pid = process.pid;
          debugs[set] = function() {
            var msg = exports.format.apply(exports, arguments);
            console.error("%s %d: %s", set, pid, msg);
          };
        } else {
          debugs[set] = function() {
          };
        }
      }
      return debugs[set];
    };
    function inspect(obj, opts) {
      var ctx = {
        seen: [],
        stylize: stylizeNoColor
      };
      if (arguments.length >= 3) ctx.depth = arguments[2];
      if (arguments.length >= 4) ctx.colors = arguments[3];
      if (isBoolean(opts)) {
        ctx.showHidden = opts;
      } else if (opts) {
        exports._extend(ctx, opts);
      }
      if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
      if (isUndefined(ctx.depth)) ctx.depth = 2;
      if (isUndefined(ctx.colors)) ctx.colors = false;
      if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
      if (ctx.colors) ctx.stylize = stylizeWithColor;
      return formatValue(ctx, obj, ctx.depth);
    }
    exports.inspect = inspect;
    inspect.colors = {
      "bold": [1, 22],
      "italic": [3, 23],
      "underline": [4, 24],
      "inverse": [7, 27],
      "white": [37, 39],
      "grey": [90, 39],
      "black": [30, 39],
      "blue": [34, 39],
      "cyan": [36, 39],
      "green": [32, 39],
      "magenta": [35, 39],
      "red": [31, 39],
      "yellow": [33, 39]
    };
    inspect.styles = {
      "special": "cyan",
      "number": "yellow",
      "boolean": "yellow",
      "undefined": "grey",
      "null": "bold",
      "string": "green",
      "date": "magenta",
      // "name": intentionally not styling
      "regexp": "red"
    };
    function stylizeWithColor(str, styleType) {
      var style = inspect.styles[styleType];
      if (style) {
        return "\x1B[" + inspect.colors[style][0] + "m" + str + "\x1B[" + inspect.colors[style][1] + "m";
      } else {
        return str;
      }
    }
    function stylizeNoColor(str, styleType) {
      return str;
    }
    function arrayToHash(array) {
      var hash = {};
      array.forEach(function(val, idx) {
        hash[val] = true;
      });
      return hash;
    }
    function formatValue(ctx, value, recurseTimes) {
      if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) {
          ret = formatValue(ctx, ret, recurseTimes);
        }
        return ret;
      }
      var primitive = formatPrimitive(ctx, value);
      if (primitive) {
        return primitive;
      }
      var keys = Object.keys(value);
      var visibleKeys = arrayToHash(keys);
      if (ctx.showHidden) {
        keys = Object.getOwnPropertyNames(value);
      }
      if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
        return formatError(value);
      }
      if (keys.length === 0) {
        if (isFunction(value)) {
          var name = value.name ? ": " + value.name : "";
          return ctx.stylize("[Function" + name + "]", "special");
        }
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
        }
        if (isDate(value)) {
          return ctx.stylize(Date.prototype.toString.call(value), "date");
        }
        if (isError(value)) {
          return formatError(value);
        }
      }
      var base = "", array = false, braces = ["{", "}"];
      if (isArray(value)) {
        array = true;
        braces = ["[", "]"];
      }
      if (isFunction(value)) {
        var n = value.name ? ": " + value.name : "";
        base = " [Function" + n + "]";
      }
      if (isRegExp(value)) {
        base = " " + RegExp.prototype.toString.call(value);
      }
      if (isDate(value)) {
        base = " " + Date.prototype.toUTCString.call(value);
      }
      if (isError(value)) {
        base = " " + formatError(value);
      }
      if (keys.length === 0 && (!array || value.length == 0)) {
        return braces[0] + base + braces[1];
      }
      if (recurseTimes < 0) {
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
        } else {
          return ctx.stylize("[Object]", "special");
        }
      }
      ctx.seen.push(value);
      var output;
      if (array) {
        output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
      } else {
        output = keys.map(function(key) {
          return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
        });
      }
      ctx.seen.pop();
      return reduceToSingleString(output, base, braces);
    }
    function formatPrimitive(ctx, value) {
      if (isUndefined(value))
        return ctx.stylize("undefined", "undefined");
      if (isString(value)) {
        var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return ctx.stylize(simple, "string");
      }
      if (isNumber(value))
        return ctx.stylize("" + value, "number");
      if (isBoolean(value))
        return ctx.stylize("" + value, "boolean");
      if (isNull(value))
        return ctx.stylize("null", "null");
    }
    function formatError(value) {
      return "[" + Error.prototype.toString.call(value) + "]";
    }
    function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
      var output = [];
      for (var i = 0, l = value.length; i < l; ++i) {
        if (hasOwnProperty(value, String(i))) {
          output.push(formatProperty(
            ctx,
            value,
            recurseTimes,
            visibleKeys,
            String(i),
            true
          ));
        } else {
          output.push("");
        }
      }
      keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) {
          output.push(formatProperty(
            ctx,
            value,
            recurseTimes,
            visibleKeys,
            key,
            true
          ));
        }
      });
      return output;
    }
    function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
      var name, str, desc;
      desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
      if (desc.get) {
        if (desc.set) {
          str = ctx.stylize("[Getter/Setter]", "special");
        } else {
          str = ctx.stylize("[Getter]", "special");
        }
      } else {
        if (desc.set) {
          str = ctx.stylize("[Setter]", "special");
        }
      }
      if (!hasOwnProperty(visibleKeys, key)) {
        name = "[" + key + "]";
      }
      if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
          if (isNull(recurseTimes)) {
            str = formatValue(ctx, desc.value, null);
          } else {
            str = formatValue(ctx, desc.value, recurseTimes - 1);
          }
          if (str.indexOf("\n") > -1) {
            if (array) {
              str = str.split("\n").map(function(line) {
                return "  " + line;
              }).join("\n").slice(2);
            } else {
              str = "\n" + str.split("\n").map(function(line) {
                return "   " + line;
              }).join("\n");
            }
          }
        } else {
          str = ctx.stylize("[Circular]", "special");
        }
      }
      if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) {
          return str;
        }
        name = JSON.stringify("" + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          name = name.slice(1, -1);
          name = ctx.stylize(name, "name");
        } else {
          name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
          name = ctx.stylize(name, "string");
        }
      }
      return name + ": " + str;
    }
    function reduceToSingleString(output, base, braces) {
      var length = output.reduce(function(prev, cur) {
        if (cur.indexOf("\n") >= 0) ;
        return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      if (length > 60) {
        return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
      }
      return braces[0] + base + " " + output.join(", ") + " " + braces[1];
    }
    exports.types = requireTypes();
    function isArray(ar) {
      return Array.isArray(ar);
    }
    exports.isArray = isArray;
    function isBoolean(arg) {
      return typeof arg === "boolean";
    }
    exports.isBoolean = isBoolean;
    function isNull(arg) {
      return arg === null;
    }
    exports.isNull = isNull;
    function isNullOrUndefined(arg) {
      return arg == null;
    }
    exports.isNullOrUndefined = isNullOrUndefined;
    function isNumber(arg) {
      return typeof arg === "number";
    }
    exports.isNumber = isNumber;
    function isString(arg) {
      return typeof arg === "string";
    }
    exports.isString = isString;
    function isSymbol(arg) {
      return typeof arg === "symbol";
    }
    exports.isSymbol = isSymbol;
    function isUndefined(arg) {
      return arg === void 0;
    }
    exports.isUndefined = isUndefined;
    function isRegExp(re) {
      return isObject(re) && objectToString(re) === "[object RegExp]";
    }
    exports.isRegExp = isRegExp;
    exports.types.isRegExp = isRegExp;
    function isObject(arg) {
      return typeof arg === "object" && arg !== null;
    }
    exports.isObject = isObject;
    function isDate(d) {
      return isObject(d) && objectToString(d) === "[object Date]";
    }
    exports.isDate = isDate;
    exports.types.isDate = isDate;
    function isError(e) {
      return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
    }
    exports.isError = isError;
    exports.types.isNativeError = isError;
    function isFunction(arg) {
      return typeof arg === "function";
    }
    exports.isFunction = isFunction;
    function isPrimitive(arg) {
      return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || // ES6 symbol
      typeof arg === "undefined";
    }
    exports.isPrimitive = isPrimitive;
    exports.isBuffer = requireIsBufferBrowser();
    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }
    function pad(n) {
      return n < 10 ? "0" + n.toString(10) : n.toString(10);
    }
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    function timestamp() {
      var d = /* @__PURE__ */ new Date();
      var time = [
        pad(d.getHours()),
        pad(d.getMinutes()),
        pad(d.getSeconds())
      ].join(":");
      return [d.getDate(), months[d.getMonth()], time].join(" ");
    }
    exports.log = function() {
      console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
    };
    exports.inherits = requireInherits_browser();
    exports._extend = function(origin, add) {
      if (!add || !isObject(add)) return origin;
      var keys = Object.keys(add);
      var i = keys.length;
      while (i--) {
        origin[keys[i]] = add[keys[i]];
      }
      return origin;
    };
    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
    var kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : void 0;
    exports.promisify = function promisify(original) {
      if (typeof original !== "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
        var fn = original[kCustomPromisifiedSymbol];
        if (typeof fn !== "function") {
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        }
        Object.defineProperty(fn, kCustomPromisifiedSymbol, {
          value: fn,
          enumerable: false,
          writable: false,
          configurable: true
        });
        return fn;
      }
      function fn() {
        var promiseResolve, promiseReject;
        var promise = new Promise(function(resolve, reject) {
          promiseResolve = resolve;
          promiseReject = reject;
        });
        var args = [];
        for (var i = 0; i < arguments.length; i++) {
          args.push(arguments[i]);
        }
        args.push(function(err, value) {
          if (err) {
            promiseReject(err);
          } else {
            promiseResolve(value);
          }
        });
        try {
          original.apply(this, args);
        } catch (err) {
          promiseReject(err);
        }
        return promise;
      }
      Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
      if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
      });
      return Object.defineProperties(
        fn,
        getOwnPropertyDescriptors(original)
      );
    };
    exports.promisify.custom = kCustomPromisifiedSymbol;
    function callbackifyOnRejected(reason, cb) {
      if (!reason) {
        var newReason = new Error("Promise was rejected with a falsy value");
        newReason.reason = reason;
        reason = newReason;
      }
      return cb(reason);
    }
    function callbackify(original) {
      if (typeof original !== "function") {
        throw new TypeError('The "original" argument must be of type Function');
      }
      function callbackified() {
        var args = [];
        for (var i = 0; i < arguments.length; i++) {
          args.push(arguments[i]);
        }
        var maybeCb = args.pop();
        if (typeof maybeCb !== "function") {
          throw new TypeError("The last argument must be of type Function");
        }
        var self2 = this;
        var cb = function() {
          return maybeCb.apply(self2, arguments);
        };
        original.apply(this, args).then(
          function(ret) {
            process.nextTick(cb.bind(null, null, ret));
          },
          function(rej) {
            process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
          }
        );
      }
      Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
      Object.defineProperties(
        callbackified,
        getOwnPropertyDescriptors(original)
      );
      return callbackified;
    }
    exports.callbackify = callbackify;
  })(util);
  return util;
}
var colorString = { exports: {} };
var colorName;
var hasRequiredColorName;
function requireColorName() {
  if (hasRequiredColorName) return colorName;
  hasRequiredColorName = 1;
  colorName = {
    "aliceblue": [240, 248, 255],
    "antiquewhite": [250, 235, 215],
    "aqua": [0, 255, 255],
    "aquamarine": [127, 255, 212],
    "azure": [240, 255, 255],
    "beige": [245, 245, 220],
    "bisque": [255, 228, 196],
    "black": [0, 0, 0],
    "blanchedalmond": [255, 235, 205],
    "blue": [0, 0, 255],
    "blueviolet": [138, 43, 226],
    "brown": [165, 42, 42],
    "burlywood": [222, 184, 135],
    "cadetblue": [95, 158, 160],
    "chartreuse": [127, 255, 0],
    "chocolate": [210, 105, 30],
    "coral": [255, 127, 80],
    "cornflowerblue": [100, 149, 237],
    "cornsilk": [255, 248, 220],
    "crimson": [220, 20, 60],
    "cyan": [0, 255, 255],
    "darkblue": [0, 0, 139],
    "darkcyan": [0, 139, 139],
    "darkgoldenrod": [184, 134, 11],
    "darkgray": [169, 169, 169],
    "darkgreen": [0, 100, 0],
    "darkgrey": [169, 169, 169],
    "darkkhaki": [189, 183, 107],
    "darkmagenta": [139, 0, 139],
    "darkolivegreen": [85, 107, 47],
    "darkorange": [255, 140, 0],
    "darkorchid": [153, 50, 204],
    "darkred": [139, 0, 0],
    "darksalmon": [233, 150, 122],
    "darkseagreen": [143, 188, 143],
    "darkslateblue": [72, 61, 139],
    "darkslategray": [47, 79, 79],
    "darkslategrey": [47, 79, 79],
    "darkturquoise": [0, 206, 209],
    "darkviolet": [148, 0, 211],
    "deeppink": [255, 20, 147],
    "deepskyblue": [0, 191, 255],
    "dimgray": [105, 105, 105],
    "dimgrey": [105, 105, 105],
    "dodgerblue": [30, 144, 255],
    "firebrick": [178, 34, 34],
    "floralwhite": [255, 250, 240],
    "forestgreen": [34, 139, 34],
    "fuchsia": [255, 0, 255],
    "gainsboro": [220, 220, 220],
    "ghostwhite": [248, 248, 255],
    "gold": [255, 215, 0],
    "goldenrod": [218, 165, 32],
    "gray": [128, 128, 128],
    "green": [0, 128, 0],
    "greenyellow": [173, 255, 47],
    "grey": [128, 128, 128],
    "honeydew": [240, 255, 240],
    "hotpink": [255, 105, 180],
    "indianred": [205, 92, 92],
    "indigo": [75, 0, 130],
    "ivory": [255, 255, 240],
    "khaki": [240, 230, 140],
    "lavender": [230, 230, 250],
    "lavenderblush": [255, 240, 245],
    "lawngreen": [124, 252, 0],
    "lemonchiffon": [255, 250, 205],
    "lightblue": [173, 216, 230],
    "lightcoral": [240, 128, 128],
    "lightcyan": [224, 255, 255],
    "lightgoldenrodyellow": [250, 250, 210],
    "lightgray": [211, 211, 211],
    "lightgreen": [144, 238, 144],
    "lightgrey": [211, 211, 211],
    "lightpink": [255, 182, 193],
    "lightsalmon": [255, 160, 122],
    "lightseagreen": [32, 178, 170],
    "lightskyblue": [135, 206, 250],
    "lightslategray": [119, 136, 153],
    "lightslategrey": [119, 136, 153],
    "lightsteelblue": [176, 196, 222],
    "lightyellow": [255, 255, 224],
    "lime": [0, 255, 0],
    "limegreen": [50, 205, 50],
    "linen": [250, 240, 230],
    "magenta": [255, 0, 255],
    "maroon": [128, 0, 0],
    "mediumaquamarine": [102, 205, 170],
    "mediumblue": [0, 0, 205],
    "mediumorchid": [186, 85, 211],
    "mediumpurple": [147, 112, 219],
    "mediumseagreen": [60, 179, 113],
    "mediumslateblue": [123, 104, 238],
    "mediumspringgreen": [0, 250, 154],
    "mediumturquoise": [72, 209, 204],
    "mediumvioletred": [199, 21, 133],
    "midnightblue": [25, 25, 112],
    "mintcream": [245, 255, 250],
    "mistyrose": [255, 228, 225],
    "moccasin": [255, 228, 181],
    "navajowhite": [255, 222, 173],
    "navy": [0, 0, 128],
    "oldlace": [253, 245, 230],
    "olive": [128, 128, 0],
    "olivedrab": [107, 142, 35],
    "orange": [255, 165, 0],
    "orangered": [255, 69, 0],
    "orchid": [218, 112, 214],
    "palegoldenrod": [238, 232, 170],
    "palegreen": [152, 251, 152],
    "paleturquoise": [175, 238, 238],
    "palevioletred": [219, 112, 147],
    "papayawhip": [255, 239, 213],
    "peachpuff": [255, 218, 185],
    "peru": [205, 133, 63],
    "pink": [255, 192, 203],
    "plum": [221, 160, 221],
    "powderblue": [176, 224, 230],
    "purple": [128, 0, 128],
    "rebeccapurple": [102, 51, 153],
    "red": [255, 0, 0],
    "rosybrown": [188, 143, 143],
    "royalblue": [65, 105, 225],
    "saddlebrown": [139, 69, 19],
    "salmon": [250, 128, 114],
    "sandybrown": [244, 164, 96],
    "seagreen": [46, 139, 87],
    "seashell": [255, 245, 238],
    "sienna": [160, 82, 45],
    "silver": [192, 192, 192],
    "skyblue": [135, 206, 235],
    "slateblue": [106, 90, 205],
    "slategray": [112, 128, 144],
    "slategrey": [112, 128, 144],
    "snow": [255, 250, 250],
    "springgreen": [0, 255, 127],
    "steelblue": [70, 130, 180],
    "tan": [210, 180, 140],
    "teal": [0, 128, 128],
    "thistle": [216, 191, 216],
    "tomato": [255, 99, 71],
    "turquoise": [64, 224, 208],
    "violet": [238, 130, 238],
    "wheat": [245, 222, 179],
    "white": [255, 255, 255],
    "whitesmoke": [245, 245, 245],
    "yellow": [255, 255, 0],
    "yellowgreen": [154, 205, 50]
  };
  return colorName;
}
var simpleSwizzle = { exports: {} };
var isArrayish;
var hasRequiredIsArrayish;
function requireIsArrayish() {
  if (hasRequiredIsArrayish) return isArrayish;
  hasRequiredIsArrayish = 1;
  isArrayish = function isArrayish2(obj) {
    if (!obj || typeof obj === "string") {
      return false;
    }
    return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== "String");
  };
  return isArrayish;
}
var hasRequiredSimpleSwizzle;
function requireSimpleSwizzle() {
  if (hasRequiredSimpleSwizzle) return simpleSwizzle.exports;
  hasRequiredSimpleSwizzle = 1;
  var isArrayish2 = requireIsArrayish();
  var concat = Array.prototype.concat;
  var slice = Array.prototype.slice;
  var swizzle = simpleSwizzle.exports = function swizzle2(args) {
    var results = [];
    for (var i = 0, len = args.length; i < len; i++) {
      var arg = args[i];
      if (isArrayish2(arg)) {
        results = concat.call(results, slice.call(arg));
      } else {
        results.push(arg);
      }
    }
    return results;
  };
  swizzle.wrap = function(fn) {
    return function() {
      return fn(swizzle(arguments));
    };
  };
  return simpleSwizzle.exports;
}
var hasRequiredColorString;
function requireColorString() {
  if (hasRequiredColorString) return colorString.exports;
  hasRequiredColorString = 1;
  var colorNames = requireColorName();
  var swizzle = requireSimpleSwizzle();
  var hasOwnProperty = Object.hasOwnProperty;
  var reverseNames = /* @__PURE__ */ Object.create(null);
  for (var name in colorNames) {
    if (hasOwnProperty.call(colorNames, name)) {
      reverseNames[colorNames[name]] = name;
    }
  }
  var cs = colorString.exports = {
    to: {},
    get: {}
  };
  cs.get = function(string) {
    var prefix = string.substring(0, 3).toLowerCase();
    var val;
    var model;
    switch (prefix) {
      case "hsl":
        val = cs.get.hsl(string);
        model = "hsl";
        break;
      case "hwb":
        val = cs.get.hwb(string);
        model = "hwb";
        break;
      default:
        val = cs.get.rgb(string);
        model = "rgb";
        break;
    }
    if (!val) {
      return null;
    }
    return { model, value: val };
  };
  cs.get.rgb = function(string) {
    if (!string) {
      return null;
    }
    var abbr = /^#([a-f0-9]{3,4})$/i;
    var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
    var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
    var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
    var keyword = /^(\w+)$/;
    var rgb = [0, 0, 0, 1];
    var match;
    var i;
    var hexAlpha;
    if (match = string.match(hex)) {
      hexAlpha = match[2];
      match = match[1];
      for (i = 0; i < 3; i++) {
        var i2 = i * 2;
        rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
      }
      if (hexAlpha) {
        rgb[3] = parseInt(hexAlpha, 16) / 255;
      }
    } else if (match = string.match(abbr)) {
      match = match[1];
      hexAlpha = match[3];
      for (i = 0; i < 3; i++) {
        rgb[i] = parseInt(match[i] + match[i], 16);
      }
      if (hexAlpha) {
        rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
      }
    } else if (match = string.match(rgba)) {
      for (i = 0; i < 3; i++) {
        rgb[i] = parseInt(match[i + 1], 0);
      }
      if (match[4]) {
        if (match[5]) {
          rgb[3] = parseFloat(match[4]) * 0.01;
        } else {
          rgb[3] = parseFloat(match[4]);
        }
      }
    } else if (match = string.match(per)) {
      for (i = 0; i < 3; i++) {
        rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }
      if (match[4]) {
        if (match[5]) {
          rgb[3] = parseFloat(match[4]) * 0.01;
        } else {
          rgb[3] = parseFloat(match[4]);
        }
      }
    } else if (match = string.match(keyword)) {
      if (match[1] === "transparent") {
        return [0, 0, 0, 0];
      }
      if (!hasOwnProperty.call(colorNames, match[1])) {
        return null;
      }
      rgb = colorNames[match[1]];
      rgb[3] = 1;
      return rgb;
    } else {
      return null;
    }
    for (i = 0; i < 3; i++) {
      rgb[i] = clamp(rgb[i], 0, 255);
    }
    rgb[3] = clamp(rgb[3], 0, 1);
    return rgb;
  };
  cs.get.hsl = function(string) {
    if (!string) {
      return null;
    }
    var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
    var match = string.match(hsl);
    if (match) {
      var alpha = parseFloat(match[4]);
      var h = (parseFloat(match[1]) % 360 + 360) % 360;
      var s = clamp(parseFloat(match[2]), 0, 100);
      var l = clamp(parseFloat(match[3]), 0, 100);
      var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
    }
    return null;
  };
  cs.get.hwb = function(string) {
    if (!string) {
      return null;
    }
    var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
    var match = string.match(hwb);
    if (match) {
      var alpha = parseFloat(match[4]);
      var h = (parseFloat(match[1]) % 360 + 360) % 360;
      var w = clamp(parseFloat(match[2]), 0, 100);
      var b = clamp(parseFloat(match[3]), 0, 100);
      var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
    }
    return null;
  };
  cs.to.hex = function() {
    var rgba = swizzle(arguments);
    return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : "");
  };
  cs.to.rgb = function() {
    var rgba = swizzle(arguments);
    return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")";
  };
  cs.to.rgb.percent = function() {
    var rgba = swizzle(arguments);
    var r = Math.round(rgba[0] / 255 * 100);
    var g = Math.round(rgba[1] / 255 * 100);
    var b = Math.round(rgba[2] / 255 * 100);
    return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r + "%, " + g + "%, " + b + "%)" : "rgba(" + r + "%, " + g + "%, " + b + "%, " + rgba[3] + ")";
  };
  cs.to.hsl = function() {
    var hsla = swizzle(arguments);
    return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")";
  };
  cs.to.hwb = function() {
    var hwba = swizzle(arguments);
    var a = "";
    if (hwba.length >= 4 && hwba[3] !== 1) {
      a = ", " + hwba[3];
    }
    return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a + ")";
  };
  cs.to.keyword = function(rgb) {
    return reverseNames[rgb.slice(0, 3)];
  };
  function clamp(num, min2, max2) {
    return Math.min(Math.max(min2, num), max2);
  }
  function hexDouble(num) {
    var str = Math.round(num).toString(16).toUpperCase();
    return str.length < 2 ? "0" + str : str;
  }
  return colorString.exports;
}
var constants;
var hasRequiredConstants;
function requireConstants() {
  if (hasRequiredConstants) return constants;
  hasRequiredConstants = 1;
  const START_SYSEX = 240;
  const STRING_DATA = 113;
  const END_SYSEX = 247;
  const FIRMATA_7BIT_MASK = 127;
  const PIXEL_SHIFT_WRAP = 64;
  const PIXEL_COMMAND = 81;
  const PIXEL_OFF = 0;
  const PIXEL_CONFIG = 1;
  const PIXEL_SHOW = 2;
  const PIXEL_SET_PIXEL = 3;
  const PIXEL_SET_STRIP = 4;
  const PIXEL_SHIFT = 5;
  const SHIFT_FORWARD = 32;
  const SHIFT_BACKWARD = 0;
  const MAX_STRIPS = 8;
  const PIN_DEFAULT = 6;
  const I2C_DEFAULT = 66;
  const GAMMA_DEFAULT = 1;
  const COLOR_ORDER = {
    GRB: 0,
    RGB: 1,
    BRG: 2
  };
  constants = {
    START_SYSEX,
    STRING_DATA,
    END_SYSEX,
    FIRMATA_7BIT_MASK,
    PIXEL_SHIFT_WRAP,
    PIXEL_COMMAND,
    PIXEL_OFF,
    PIXEL_CONFIG,
    PIXEL_SHOW,
    PIXEL_SET_PIXEL,
    PIXEL_SET_STRIP,
    PIXEL_SHIFT,
    SHIFT_FORWARD,
    SHIFT_BACKWARD,
    MAX_STRIPS,
    PIN_DEFAULT,
    I2C_DEFAULT,
    GAMMA_DEFAULT,
    COLOR_ORDER
  };
  return constants;
}
var pixel$1;
var hasRequiredPixel;
function requirePixel() {
  if (hasRequiredPixel) return pixel$1;
  hasRequiredPixel = 1;
  const ColorString = requireColorString();
  const {
    START_SYSEX,
    END_SYSEX,
    FIRMATA_7BIT_MASK,
    PIXEL_COMMAND,
    PIXEL_SET_PIXEL
  } = requireConstants();
  function colorValue(colors, g_table) {
    const gammaCorrectedColor = Object.assign({}, colors);
    gammaCorrectedColor[0] = g_table[gammaCorrectedColor[0]];
    gammaCorrectedColor[1] = g_table[gammaCorrectedColor[1]];
    gammaCorrectedColor[2] = g_table[gammaCorrectedColor[2]];
    return (gammaCorrectedColor[0] << 16) + (gammaCorrectedColor[1] << 8) + gammaCorrectedColor[2];
  }
  ColorString.colorValue = colorValue;
  const pixels = /* @__PURE__ */ new WeakMap();
  const Pixel_Controllers = {
    FIRMATA: {
      initialize: {
        value(opts) {
          const pixel2 = {
            address: opts.addr,
            id: opts.addr,
            color: {
              r: 0,
              g: 0,
              b: 0,
              hexcode: "#000000",
              color: "black",
              rgb: [0, 0, 0]
            },
            firmata: opts.firmata,
            port: opts.port,
            parent: opts.strip
          };
          return pixel2;
        }
      },
      pixel_color: {
        value(color) {
          const pixel2 = pixels.get(this);
          const data = [];
          data.push(START_SYSEX);
          data.push(PIXEL_COMMAND);
          data.push(PIXEL_SET_PIXEL);
          data.push(pixel2.address & FIRMATA_7BIT_MASK);
          data.push(pixel2.address >> 7 & FIRMATA_7BIT_MASK);
          data.push(color & FIRMATA_7BIT_MASK);
          data.push(color >> 7 & FIRMATA_7BIT_MASK);
          data.push(color >> 14 & FIRMATA_7BIT_MASK);
          data.push(color >> 21 & FIRMATA_7BIT_MASK);
          data.push(END_SYSEX);
          pixel2.port.write(Buffer.from(data));
        }
      }
    },
    I2CBACKPACK: {
      initialize: {
        value(opts) {
          const pixel2 = {
            address: opts.addr,
            id: opts.addr,
            color: {
              r: 0,
              g: 0,
              b: 0,
              hexcode: "#000000",
              color: "black",
              rgb: [0, 0, 0]
            },
            io: opts.io,
            i2c_address: opts.i2c_address,
            parent: opts.strip
          };
          return pixel2;
        }
      },
      pixel_color: {
        value(color) {
          const pixel2 = pixels.get(this);
          const data = [];
          data.push(PIXEL_SET_PIXEL);
          data.push(pixel2.address & FIRMATA_7BIT_MASK);
          data.push(pixel2.address >> 7 & FIRMATA_7BIT_MASK);
          data.push(color & FIRMATA_7BIT_MASK);
          data.push(color >> 7 & FIRMATA_7BIT_MASK);
          data.push(color >> 14 & FIRMATA_7BIT_MASK);
          data.push(color >> 21 & FIRMATA_7BIT_MASK);
          pixel2.io.i2cWrite(pixel2.i2c_address, data);
        }
      }
    }
  };
  function Pixel(opts, stripsInstance = /* @__PURE__ */ new WeakMap()) {
    if (!(this instanceof Pixel)) {
      return new Pixel(opts, stripsInstance);
    }
    const controller = Pixel_Controllers[opts.controller];
    Object.defineProperties(this, controller);
    Object.defineProperty(this, "address", {
      get() {
        const pixel2 = pixels.get(this);
        return pixel2.address;
      },
      set(newAddress) {
        const pixel2 = pixels.get(this);
        pixel2.address = newAddress;
      }
    });
    pixels.set(this, this.initialize(opts, stripsInstance));
  }
  Pixel.prototype.off = Pixel.prototype.clear = function() {
    this.color([0, 0, 0]);
  };
  Pixel.prototype.colour = Pixel.prototype.color = function(color, opts) {
    const pixel2 = pixels.get(this);
    const options = opts || {};
    let sendmsg = true;
    if (options.sendmsg != void 0) {
      sendmsg = options.sendmsg;
    }
    let pixelcolor = null;
    if (color) {
      if (typeof color === "object") {
        pixelcolor = {
          model: "rgb",
          value: color
        };
      } else {
        pixelcolor = ColorString.get(color);
      }
    } else {
      return pixel2.color;
    }
    if (pixelcolor != null) {
      pixel2.color.r = pixelcolor.value[0];
      pixel2.color.g = pixelcolor.value[1];
      pixel2.color.b = pixelcolor.value[2];
      pixel2.color.hexcode = ColorString.to.hex(pixelcolor.value);
      pixel2.color.color = ColorString.to.keyword(pixelcolor.value);
      if (pixelcolor.value.length == 4) {
        pixelcolor.value.pop();
      }
      pixel2.color.rgb = pixelcolor.value;
      color = ColorString.colorValue(pixelcolor.value, pixel2.parent.gtable);
      if (sendmsg) {
        this.pixel_color(color);
      }
    } else {
      console.log("Color supplied couldn't be parsed: " + color);
    }
  };
  pixel$1 = {
    Pixel,
    ColorString,
    colorValue
  };
  return pixel$1;
}
var utils$1;
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils) return utils$1;
  hasRequiredUtils = 1;
  const {
    GAMMA_DEFAULT
  } = requireConstants();
  function create_gamma_table(steps, gamma, warning) {
    if (!warning && gamma == GAMMA_DEFAULT && !commonjsGlobal.IS_TEST_MODE) {
      console.info("INFO: Default gamma behaviour is changing");
      console.info("0.9 - gamma=1.0 - consistent with pre-gamma values");
      console.info("0.10 - gamma=2.8 - default fix for WS2812 LEDs");
      warning = true;
    }
    const g_table = new Array(steps);
    for (let i = 0; i < steps; i++) {
      g_table[i] = Math.floor(Math.pow(i / 255, gamma) * 255 + 0.5);
    }
    return g_table;
  }
  utils$1 = {
    create_gamma_table
  };
  return utils$1;
}
var firmata;
var hasRequiredFirmata;
function requireFirmata() {
  if (hasRequiredFirmata) return firmata;
  hasRequiredFirmata = 1;
  const {
    PIXEL_SHIFT_WRAP,
    PIXEL_CONFIG,
    PIXEL_SHOW,
    PIXEL_SET_STRIP,
    PIXEL_SHIFT,
    MAX_STRIPS,
    PIN_DEFAULT,
    COLOR_ORDER,
    GAMMA_DEFAULT,
    FIRMATA_7BIT_MASK,
    START_SYSEX,
    END_SYSEX,
    PIXEL_COMMAND
  } = requireConstants();
  const { create_gamma_table } = requireUtils();
  const { Pixel } = requirePixel();
  const Firmata = {
    initialize: {
      value(opts, strips) {
        const MAX_PIXELS = 216;
        const strip_length = opts.length || 6;
        const data_pin = opts.data || PIN_DEFAULT;
        const color_order = opts.color_order || COLOR_ORDER.GRB;
        const strip_definition = opts.strips || new Array();
        const skip_firmware_check = !!opts.skip_firmware_check;
        let firmata2 = opts.firmata || void 0;
        if (firmata2 == void 0) {
          try {
            firmata2 = opts.board.io;
          } catch (e) {
            if (e instanceof TypeError) {
              firmata2 = void 0;
            }
          }
        }
        if (firmata2 == void 0) {
          const err = new Error("A firmata or board object is required");
          err.name = "NoFirmataError";
          throw err;
        }
        if (firmata2.firmware.name !== "node_pixel_firmata.ino" && !skip_firmware_check) {
          const err = new Error("Please upload NodePixel Firmata to the board");
          err.name = "IncorrectFirmataVersionError";
          throw err;
        }
        const port = firmata2.transport || firmata2.sp || firmata2;
        if (port.write === void 0) {
          const err = new Error("Node Pixel FIRMATA controller requires IO that can write out");
          err.name = "NoWritablePortError";
          throw err;
        }
        const gamma = opts.gamma || GAMMA_DEFAULT;
        const gtable = create_gamma_table(256, gamma, this.dep_warning.gamma);
        if (typeof strip_definition[0] == "undefined") {
          strip_definition.push({
            pin: data_pin,
            color_order,
            length: strip_length
          });
        }
        if (strip_definition.length > MAX_STRIPS) {
          const err = new RangeError("Maximum number of strips " + MAX_STRIPS + " exceeded");
          this.emit("error", err);
        }
        let total_length = 0;
        strip_definition.forEach(function(data2) {
          total_length += data2.length;
        });
        if (total_length > MAX_PIXELS) {
          const err = new RangeError("Maximum number of pixels " + MAX_PIXELS + " exceeded");
          this.emit("error", err);
        }
        const pixel_list = [];
        for (let i = 0; i < total_length; i++) {
          pixel_list.push(new Pixel({
            addr: i,
            firmata: firmata2,
            port,
            controller: "FIRMATA",
            strip: this
          }, strips));
        }
        strips.set(this, {
          pixels: pixel_list,
          data: data_pin,
          firmata: firmata2,
          port,
          gtable,
          gamma
        });
        this.strips_internal = strips;
        const data = [];
        data[0] = START_SYSEX;
        data[1] = PIXEL_COMMAND;
        data[2] = PIXEL_CONFIG;
        strip_definition.forEach(function(strip2) {
          data.push(strip2.color_order << 5 | strip2.pin);
          data.push(strip2.length & FIRMATA_7BIT_MASK);
          data.push(strip2.length >> 7 & FIRMATA_7BIT_MASK);
        });
        data.push(END_SYSEX);
        port.write(Buffer.from(data), function(error, res) {
          let err = null;
          if (error) {
            err = error;
            this.emit("error", err);
          }
          setTimeout(() => {
            this.emit("ready", err);
          }, 1);
        }.bind(this));
      }
    },
    show: {
      value() {
        const strip2 = this.strips_internal.get(this);
        const data = [];
        data[0] = START_SYSEX;
        data[1] = PIXEL_COMMAND;
        data[2] = PIXEL_SHOW;
        data[3] = END_SYSEX;
        strip2.port.write(Buffer.from(data));
      }
    },
    strip_color: {
      value(color) {
        const strip2 = this.strips_internal.get(this);
        const data = [];
        data[0] = START_SYSEX;
        data[1] = PIXEL_COMMAND;
        data[2] = PIXEL_SET_STRIP;
        data[3] = color & FIRMATA_7BIT_MASK;
        data[4] = color >> 7 & FIRMATA_7BIT_MASK;
        data[5] = color >> 14 & FIRMATA_7BIT_MASK;
        data[6] = color >> 21 & FIRMATA_7BIT_MASK;
        data[7] = END_SYSEX;
        strip2.port.write(Buffer.from(data));
      }
    },
    _shift: {
      value(amt, direction, wrap) {
        const wrap_val = wrap ? PIXEL_SHIFT_WRAP : 0;
        const strip2 = this.strips_internal.get(this);
        const data = [];
        data[0] = START_SYSEX;
        data[1] = PIXEL_COMMAND;
        data[2] = PIXEL_SHIFT;
        data[3] = (amt | direction | wrap_val) & FIRMATA_7BIT_MASK;
        data[4] = END_SYSEX;
        strip2.port.write(Buffer.from(data));
      }
    }
  };
  firmata = {
    Firmata
  };
  return firmata;
}
var backpack;
var hasRequiredBackpack;
function requireBackpack() {
  if (hasRequiredBackpack) return backpack;
  hasRequiredBackpack = 1;
  const {
    PIXEL_SHIFT_WRAP,
    PIXEL_CONFIG,
    PIXEL_SHOW,
    PIXEL_SET_STRIP,
    PIXEL_SHIFT,
    MAX_STRIPS,
    I2C_DEFAULT,
    COLOR_ORDER,
    GAMMA_DEFAULT,
    FIRMATA_7BIT_MASK
  } = requireConstants();
  const { Pixel } = requirePixel();
  const { create_gamma_table } = requireUtils();
  const IC2Backpack = {
    initialize: {
      value(opts, strips) {
        const MAX_PIXELS = 500;
        const strip_length = opts.length || 6;
        const strip_definition = opts.strips || new Array();
        const color_order = opts.color_order || COLOR_ORDER.GRB;
        const gamma = opts.gamma || GAMMA_DEFAULT;
        const gtable = create_gamma_table(256, gamma, this.dep_warning.gamma);
        const io = opts.firmata || opts.board.io;
        if (!opts.address) {
          opts.address = I2C_DEFAULT;
        }
        if (io == void 0) {
          const err = new Error("An IO object is required to I2C controller");
          err.name = "NoIOError";
          throw err;
        }
        if (typeof strip_definition[0] == "undefined") {
          strip_definition.push({
            color_order,
            length: strip_length
          });
        } else if (parseInt(strip_definition[0], 10) != NaN) {
          for (let i = 0; i < strip_definition.length; i++) {
            const len = strip_definition[i];
            strip_definition[i] = {
              color_order,
              length: len
            };
          }
        }
        if (strip_definition.length > MAX_STRIPS) {
          const err = new RangeError("Maximum number of strips " + MAX_STRIPS + " exceeded");
          this.emit("error", err);
        }
        let total_length = 0;
        strip_definition.forEach(function(data2) {
          total_length += data2.length;
        });
        if (total_length > MAX_PIXELS) {
          const err = new RangeError("Maximum number of pixels " + MAX_PIXELS + " exceeded");
          this.emit("error", err);
        }
        const pixel_list = [];
        for (let i = 0; i < total_length; i++) {
          pixel_list.push(new Pixel({
            addr: i,
            io,
            controller: "I2CBACKPACK",
            i2c_address: opts.address,
            strip: this
          }, strips));
        }
        strips.set(this, {
          pixels: pixel_list,
          io,
          i2c_address: opts.address,
          gtable,
          gamma
        });
        this.strips_internal = strips;
        const data = [];
        data.push(PIXEL_CONFIG);
        strip_definition.forEach(function(strip2) {
          data.push(strip2.color_order << 5 | strip2.pin);
          data.push(strip2.length & FIRMATA_7BIT_MASK);
          data.push(strip2.length >> 7 & FIRMATA_7BIT_MASK);
        });
        io.i2cConfig(opts);
        process.nextTick(function() {
          try {
            io.i2cWrite(opts.address, data);
          } catch (e) {
            if (e instanceof Error && e.name == "EIO") {
              this.emit("np_i2c_write_error", data);
            }
          }
          process.nextTick(function() {
            this.emit("ready", null);
          }.bind(this));
        }.bind(this));
      }
    },
    show: {
      value() {
        const strip2 = this.strips_internal.get(this);
        try {
          strip2.io.i2cWrite(strip2.i2c_address, [PIXEL_SHOW]);
        } catch (e) {
          if (e instanceof Error && e.name == "EIO") {
            this.emit("np_i2c_write_error", "PIXEL_SHOW");
          }
        }
      }
    },
    strip_color: {
      value(color) {
        const strip2 = this.strips_internal.get(this);
        const data = [];
        data[0] = PIXEL_SET_STRIP;
        data[1] = color & FIRMATA_7BIT_MASK;
        data[2] = color >> 7 & FIRMATA_7BIT_MASK;
        data[3] = color >> 14 & FIRMATA_7BIT_MASK;
        data[4] = color >> 21 & FIRMATA_7BIT_MASK;
        try {
          strip2.io.i2cWrite(strip2.i2c_address, data);
        } catch (e) {
          if (e instanceof Error && e.name == "EIO") {
            this.emit("np_i2c_write_error", data);
          }
        }
      }
    },
    _shift: {
      value(amt, direction, wrap) {
        const wrap_val = wrap ? PIXEL_SHIFT_WRAP : 0;
        const strip2 = this.strips_internal.get(this);
        const data = [];
        data[0] = PIXEL_SHIFT;
        data[1] = (amt | direction | wrap_val) & FIRMATA_7BIT_MASK;
        try {
          strip2.io.i2cWrite(strip2.i2c_address, data);
        } catch (e) {
          if (e instanceof Error && e.name == "EIO") {
            this.emit("np_i2c_write_error", data);
          }
        }
      }
    }
  };
  backpack = {
    IC2Backpack
  };
  return backpack;
}
var strip;
var hasRequiredStrip;
function requireStrip() {
  if (hasRequiredStrip) return strip;
  hasRequiredStrip = 1;
  const events = EventEmitter;
  const util2 = requireUtil();
  const { ColorString } = requirePixel();
  const {
    SHIFT_FORWARD
  } = requireConstants();
  const { Firmata } = requireFirmata();
  const { IC2Backpack } = requireBackpack();
  const strips = /* @__PURE__ */ new WeakMap();
  const Controllers = {
    FIRMATA: Firmata,
    I2CBACKPACK: IC2Backpack
  };
  function Strip(opts) {
    if (!(this instanceof Strip)) {
      return new Strip(opts);
    }
    let controller;
    if (typeof opts.controller === "string") {
      controller = Controllers[opts.controller];
    } else {
      controller = opts.controller || Controllers["FIRMATA"];
    }
    this.dep_warning = {
      stripLength: false,
      gammaValue: !typeof opts.gamma === "undefined"
    };
    Object.defineProperties(this, controller);
    Object.defineProperty(this, "length", {
      get() {
        const strip2 = strips.get(this);
        return strip2.pixels.length;
      }
    });
    Object.defineProperty(this, "gamma", {
      get() {
        const strip2 = strips.get(this);
        return strip2.gamma;
      }
    });
    Object.defineProperty(this, "gtable", {
      get() {
        const strip2 = strips.get(this);
        return strip2.gtable;
      }
    });
    if (typeof this.initialize === "function") {
      this.initialize(opts, strips);
    }
  }
  util2.inherits(Strip, events.EventEmitter);
  Strip.prototype.pixel = function(addr) {
    const strip2 = strips.get(this);
    return strip2.pixels[addr];
  };
  Strip.prototype.colour = Strip.prototype.color = function(color, opts) {
    const strip2 = strips.get(this);
    let stripcolor = null;
    if (color) {
      if (typeof color === "object") {
        stripcolor = color;
      } else {
        try {
          stripcolor = ColorString.get(color).value;
        } catch (e) {
          if (e instanceof TypeError && ColorString.get(color) === null) {
            stripcolor = null;
          }
        }
      }
    }
    if (stripcolor != null) {
      for (let i = 0; i < strip2.pixels.length; i++) {
        strip2.pixels[i].color(color, { sendmsg: false });
      }
      this.strip_color(ColorString.colorValue(stripcolor, strip2.gtable));
    } else {
      console.log("Supplied colour couldn't be parsed: " + color);
    }
  };
  Strip.prototype.off = Strip.prototype.clear = function() {
    this.color([0, 0, 0]);
    this.show();
  };
  Strip.prototype.shift = function(amt, direction, wrap) {
    if (amt > 0) {
      const strip2 = strips.get(this);
      let start_element = 0;
      if (direction == SHIFT_FORWARD) {
        start_element = this.length - amt;
      }
      const tmp_pixels = strip2.pixels.splice(start_element, amt);
      while (tmp_pixels.length > 0) {
        const px = tmp_pixels.pop();
        if (!wrap) {
          px.color("#000");
        }
        if (direction == SHIFT_FORWARD) {
          strip2.pixels.unshift(px);
        } else {
          strip2.pixels.push(px);
        }
      }
      strip2.pixels.forEach((px, index) => {
        px.address = index;
      });
      this._shift(amt, direction, wrap);
    }
  };
  Strip.prototype.stripLength = function() {
    if (!this.dep_warning.stripLength) {
      console.info("ERROR: strip.stripLength() is deprecated in favour of strip.length");
      console.info("0.8 - notice");
      console.info("0.9 - error");
      console.info("0.10 - removal");
      this.dep_warning.stripLength = true;
    }
    throw new Error({
      name: "NotImplemented",
      message: "stripLength is no longer supported, use strip.length",
      toString() {
        return "NotImplemented: stripLength is no longer supported";
      }
    });
  };
  strip = {
    Strip
  };
  return strip;
}
var lib;
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib) return lib;
  hasRequiredLib = 1;
  const { Strip } = requireStrip();
  const {
    COLOR_ORDER,
    SHIFT_FORWARD,
    SHIFT_BACKWARD
  } = requireConstants();
  lib = {
    Strip,
    COLOR_ORDER,
    FORWARD: SHIFT_FORWARD,
    BACKWARD: SHIFT_BACKWARD
  };
  return lib;
}
var libExports = requireLib();
const pixel = /* @__PURE__ */ getDefaultExportFromCjs(libExports);
class LEDStrip extends pixel.Strip {
  constructor({
    pin,
    board,
    ledCount = 30,
    gamma = 2.8,
    colorOrder = "GRB"
  }) {
    super({
      board,
      controller: "FIRMATA",
      strips: [{ pin, length: ledCount }],
      // this is preferred form for definition
      gamma,
      // set to a gamma that works nicely for WS2812
      color_order: pixel.COLOR_ORDER[colorOrder]
    });
  }
}
class Metronome extends EventEmitter {
  constructor(frequency = 1e3) {
    super();
    this.frequency = frequency;
  }
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
    this.interval = setInterval(() => {
      this.emit("tick", {
        timestamp: Date.now(),
        frequency: this.frequency
      });
    }, this.frequency);
  }
  stop() {
    clearInterval(this.interval);
    this.interval = void 0;
    this.emit("stop");
  }
  setFrequency(frequency) {
    if (this.frequency !== frequency) {
      this.frequency = frequency;
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.emit("tick", {
          timestamp: Date.now(),
          frequency: this.frequency
        });
      }, this.frequency);
    }
  }
}
var oledFont5x7;
var hasRequiredOledFont5x7;
function requireOledFont5x7() {
  if (hasRequiredOledFont5x7) return oledFont5x7;
  hasRequiredOledFont5x7 = 1;
  oledFont5x7 = {
    monospace: true,
    width: 5,
    height: 7,
    fontData: [
      0,
      0,
      0,
      0,
      0,
      // (space)
      0,
      0,
      95,
      0,
      0,
      // !
      0,
      7,
      0,
      7,
      0,
      // "
      20,
      127,
      20,
      127,
      20,
      // #
      36,
      42,
      127,
      42,
      18,
      // $
      35,
      19,
      8,
      100,
      98,
      // %
      54,
      73,
      85,
      34,
      80,
      // &
      0,
      5,
      3,
      0,
      0,
      // '
      0,
      28,
      34,
      65,
      0,
      // (
      0,
      65,
      34,
      28,
      0,
      // )
      8,
      42,
      28,
      42,
      8,
      // *
      8,
      8,
      62,
      8,
      8,
      // +
      0,
      80,
      48,
      0,
      0,
      // ,
      8,
      8,
      8,
      8,
      8,
      // -
      0,
      96,
      96,
      0,
      0,
      // .
      32,
      16,
      8,
      4,
      2,
      // /
      62,
      81,
      73,
      69,
      62,
      // 0
      0,
      66,
      127,
      64,
      0,
      // 1
      66,
      97,
      81,
      73,
      70,
      // 2
      33,
      65,
      69,
      75,
      49,
      // 3
      24,
      20,
      18,
      127,
      16,
      // 4
      39,
      69,
      69,
      69,
      57,
      // 5
      60,
      74,
      73,
      73,
      48,
      // 6
      1,
      113,
      9,
      5,
      3,
      // 7
      54,
      73,
      73,
      73,
      54,
      // 8
      6,
      73,
      73,
      41,
      30,
      // 9
      0,
      54,
      54,
      0,
      0,
      // :
      0,
      86,
      54,
      0,
      0,
      // ;
      0,
      8,
      20,
      34,
      65,
      // <
      20,
      20,
      20,
      20,
      20,
      // =
      65,
      34,
      20,
      8,
      0,
      // >
      2,
      1,
      81,
      9,
      6,
      // ?
      50,
      73,
      121,
      65,
      62,
      // @
      126,
      17,
      17,
      17,
      126,
      // A
      127,
      73,
      73,
      73,
      54,
      // B
      62,
      65,
      65,
      65,
      34,
      // C
      127,
      65,
      65,
      34,
      28,
      // D
      127,
      73,
      73,
      73,
      65,
      // E
      127,
      9,
      9,
      1,
      1,
      // F
      62,
      65,
      65,
      81,
      50,
      // G
      127,
      8,
      8,
      8,
      127,
      // H
      0,
      65,
      127,
      65,
      0,
      // I
      32,
      64,
      65,
      63,
      1,
      // J
      127,
      8,
      20,
      34,
      65,
      // K
      127,
      64,
      64,
      64,
      64,
      // L
      127,
      2,
      4,
      2,
      127,
      // M
      127,
      4,
      8,
      16,
      127,
      // N
      62,
      65,
      65,
      65,
      62,
      // O
      127,
      9,
      9,
      9,
      6,
      // P
      62,
      65,
      81,
      33,
      94,
      // Q
      127,
      9,
      25,
      41,
      70,
      // R
      70,
      73,
      73,
      73,
      49,
      // S
      1,
      1,
      127,
      1,
      1,
      // T
      63,
      64,
      64,
      64,
      63,
      // U
      31,
      32,
      64,
      32,
      31,
      // V
      127,
      32,
      24,
      32,
      127,
      // W
      99,
      20,
      8,
      20,
      99,
      // X
      3,
      4,
      120,
      4,
      3,
      // Y
      97,
      81,
      73,
      69,
      67,
      // Z
      125,
      18,
      18,
      125,
      0,
      // Ä
      61,
      66,
      66,
      66,
      61,
      // Ö
      61,
      64,
      64,
      64,
      61,
      // Ü
      0,
      0,
      127,
      65,
      65,
      // [
      2,
      4,
      8,
      16,
      32,
      // "\"
      65,
      65,
      127,
      0,
      0,
      // ]
      4,
      2,
      1,
      2,
      4,
      // ^
      64,
      64,
      64,
      64,
      64,
      // _
      0,
      1,
      2,
      4,
      0,
      // `
      32,
      84,
      84,
      84,
      120,
      // a
      127,
      72,
      68,
      68,
      56,
      // b
      56,
      68,
      68,
      68,
      32,
      // c
      56,
      68,
      68,
      72,
      127,
      // d
      56,
      84,
      84,
      84,
      24,
      // e
      8,
      126,
      9,
      1,
      2,
      // f
      8,
      20,
      84,
      84,
      60,
      // g
      127,
      8,
      4,
      4,
      120,
      // h
      0,
      68,
      125,
      64,
      0,
      // i
      32,
      64,
      68,
      61,
      0,
      // j
      0,
      127,
      16,
      40,
      68,
      // k
      0,
      65,
      127,
      64,
      0,
      // l
      124,
      4,
      24,
      4,
      120,
      // m
      124,
      8,
      4,
      4,
      120,
      // n
      56,
      68,
      68,
      68,
      56,
      // o
      124,
      20,
      20,
      20,
      8,
      // p
      8,
      20,
      20,
      24,
      124,
      // q
      124,
      8,
      4,
      4,
      8,
      // r
      72,
      84,
      84,
      84,
      32,
      // s
      4,
      63,
      68,
      64,
      32,
      // t
      60,
      64,
      64,
      32,
      124,
      // u
      28,
      32,
      64,
      32,
      28,
      // v
      60,
      64,
      48,
      64,
      60,
      // w
      68,
      40,
      16,
      40,
      68,
      // x
      12,
      80,
      80,
      80,
      60,
      // y
      68,
      100,
      84,
      76,
      68,
      // z
      32,
      85,
      84,
      85,
      120,
      // ä
      58,
      68,
      68,
      58,
      0,
      // ö
      58,
      64,
      64,
      58,
      0,
      // ü
      0,
      8,
      54,
      65,
      0,
      // {
      0,
      0,
      127,
      0,
      0,
      // |
      0,
      65,
      54,
      8,
      0,
      // }
      20,
      62,
      85,
      65,
      34,
      // €
      8,
      8,
      42,
      28,
      8,
      // -> (ALT + 0134) † 
      8,
      28,
      42,
      8,
      8,
      // <- (ALT + 0135) ‡
      0,
      0,
      7,
      5,
      7
      // °
    ],
    lookup: [
      " ",
      "!",
      '"',
      "#",
      "$",
      "%",
      "&",
      "'",
      "(",
      ")",
      "*",
      "+",
      ",",
      "-",
      ".",
      "/",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      ":",
      ";",
      "<",
      "=",
      ">",
      "?",
      "@",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "Ä",
      "Ö",
      "Ü",
      "[",
      "\\",
      "]",
      "^",
      "_",
      "`",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "ä",
      "ö",
      "ü",
      "{",
      "|",
      "}",
      "€",
      "†",
      "‡",
      "°"
    ]
  };
  return oledFont5x7;
}
var oledFont5x7Exports = requireOledFont5x7();
const font = /* @__PURE__ */ getDefaultExportFromCjs(oledFont5x7Exports);
var oled = {};
const __viteBrowserExternal = {};
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var encode_1;
var hasRequiredEncode;
function requireEncode() {
  if (hasRequiredEncode) return encode_1;
  hasRequiredEncode = 1;
  function pushBits(arr, n, value) {
    for (var bit = 1 << n - 1; bit; bit = bit >>> 1) {
      arr.push(bit & value ? 1 : 0);
    }
  }
  function encode_8bit(data) {
    var len = data.length;
    var bits = [];
    for (var i = 0; i < len; i++) {
      pushBits(bits, 8, data[i]);
    }
    var res = {};
    var d = [0, 1, 0, 0];
    pushBits(d, 16, len);
    res.data10 = res.data27 = d.concat(bits);
    if (len < 256) {
      var d = [0, 1, 0, 0];
      pushBits(d, 8, len);
      res.data1 = d.concat(bits);
    }
    return res;
  }
  var ALPHANUM = (function(s) {
    var res = {};
    for (var i = 0; i < s.length; i++) {
      res[s[i]] = i;
    }
    return res;
  })("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:");
  function encode_alphanum(str) {
    var len = str.length;
    var bits = [];
    for (var i = 0; i < len; i += 2) {
      var b = 6;
      var n = ALPHANUM[str[i]];
      if (str[i + 1]) {
        b = 11;
        n = n * 45 + ALPHANUM[str[i + 1]];
      }
      pushBits(bits, b, n);
    }
    var res = {};
    var d = [0, 0, 1, 0];
    pushBits(d, 13, len);
    res.data27 = d.concat(bits);
    if (len < 2048) {
      var d = [0, 0, 1, 0];
      pushBits(d, 11, len);
      res.data10 = d.concat(bits);
    }
    if (len < 512) {
      var d = [0, 0, 1, 0];
      pushBits(d, 9, len);
      res.data1 = d.concat(bits);
    }
    return res;
  }
  function encode_numeric(str) {
    var len = str.length;
    var bits = [];
    for (var i = 0; i < len; i += 3) {
      var s = str.substr(i, 3);
      var b = Math.ceil(s.length * 10 / 3);
      pushBits(bits, b, parseInt(s, 10));
    }
    var res = {};
    var d = [0, 0, 0, 1];
    pushBits(d, 14, len);
    res.data27 = d.concat(bits);
    if (len < 4096) {
      var d = [0, 0, 0, 1];
      pushBits(d, 12, len);
      res.data10 = d.concat(bits);
    }
    if (len < 1024) {
      var d = [0, 0, 0, 1];
      pushBits(d, 10, len);
      res.data1 = d.concat(bits);
    }
    return res;
  }
  function encode_url(str) {
    var slash = str.indexOf("/", 8) + 1 || str.length;
    var res = encode(str.slice(0, slash).toUpperCase(), false);
    if (slash >= str.length) {
      return res;
    }
    var path_res = encode(str.slice(slash), false);
    res.data27 = res.data27.concat(path_res.data27);
    if (res.data10 && path_res.data10) {
      res.data10 = res.data10.concat(path_res.data10);
    }
    if (res.data1 && path_res.data1) {
      res.data1 = res.data1.concat(path_res.data1);
    }
    return res;
  }
  function encode(data, parse_url) {
    var str;
    var t = typeof data;
    if (t == "string" || t == "number") {
      str = "" + data;
      data = new Buffer(str);
    } else if (Buffer.isBuffer(data)) {
      str = data.toString();
    } else if (Array.isArray(data)) {
      data = new Buffer(data);
      str = data.toString();
    } else {
      throw new Error("Bad data");
    }
    if (/^[0-9]+$/.test(str)) {
      if (data.length > 7089) {
        throw new Error("Too much data");
      }
      return encode_numeric(str);
    }
    if (/^[0-9A-Z \$%\*\+\.\/\:\-]+$/.test(str)) {
      if (data.length > 4296) {
        throw new Error("Too much data");
      }
      return encode_alphanum(str);
    }
    if (parse_url && /^https?:/i.test(str)) {
      return encode_url(str);
    }
    if (data.length > 2953) {
      throw new Error("Too much data");
    }
    return encode_8bit(data);
  }
  encode_1 = encode;
  return encode_1;
}
var errorcode;
var hasRequiredErrorcode;
function requireErrorcode() {
  if (hasRequiredErrorcode) return errorcode;
  hasRequiredErrorcode = 1;
  var GF256_BASE = 285;
  var EXP_TABLE = [1];
  var LOG_TABLE = [];
  for (var i = 1; i < 256; i++) {
    var n = EXP_TABLE[i - 1] << 1;
    if (n > 255) n = n ^ GF256_BASE;
    EXP_TABLE[i] = n;
  }
  for (var i = 0; i < 255; i++) {
    LOG_TABLE[EXP_TABLE[i]] = i;
  }
  function exp(k) {
    while (k < 0) k += 255;
    while (k > 255) k -= 255;
    return EXP_TABLE[k];
  }
  function log(k) {
    if (k < 1 || k > 255) {
      throw Error("Bad log(" + k + ")");
    }
    return LOG_TABLE[k];
  }
  var POLYNOMIALS = [
    [0],
    // a^0 x^0
    [0, 0],
    // a^0 x^1 + a^0 x^0
    [0, 25, 1]
    // a^0 x^2 + a^25 x^1 + a^1 x^0
    // and so on...
  ];
  function generatorPolynomial(num) {
    if (POLYNOMIALS[num]) {
      return POLYNOMIALS[num];
    }
    var prev = generatorPolynomial(num - 1);
    var res = [];
    res[0] = prev[0];
    for (var i2 = 1; i2 <= num; i2++) {
      res[i2] = log(exp(prev[i2]) ^ exp(prev[i2 - 1] + num - 1));
    }
    POLYNOMIALS[num] = res;
    return res;
  }
  errorcode = function calculate_ec(msg, ec_len) {
    msg = [].slice.call(msg);
    var poly = generatorPolynomial(ec_len);
    for (var i2 = 0; i2 < ec_len; i2++) msg.push(0);
    while (msg.length > ec_len) {
      if (!msg[0]) {
        msg.shift();
        continue;
      }
      var log_k = log(msg[0]);
      for (var i2 = 0; i2 <= ec_len; i2++) {
        msg[i2] = msg[i2] ^ exp(poly[i2] + log_k);
      }
      msg.shift();
    }
    return new Buffer(msg);
  };
  return errorcode;
}
var matrix;
var hasRequiredMatrix;
function requireMatrix() {
  if (hasRequiredMatrix) return matrix;
  hasRequiredMatrix = 1;
  function init(version) {
    var N = version * 4 + 17;
    var matrix2 = [];
    var zeros = new Buffer(N);
    zeros.fill(0);
    zeros = [].slice.call(zeros);
    for (var i = 0; i < N; i++) {
      matrix2[i] = zeros.slice();
    }
    return matrix2;
  }
  function fillFinders(matrix2) {
    var N = matrix2.length;
    for (var i = -3; i <= 3; i++) {
      for (var j = -3; j <= 3; j++) {
        var max2 = Math.max(i, j);
        var min2 = Math.min(i, j);
        var pixel2 = max2 == 2 && min2 >= -2 || min2 == -2 && max2 <= 2 ? 128 : 129;
        matrix2[3 + i][3 + j] = pixel2;
        matrix2[3 + i][N - 4 + j] = pixel2;
        matrix2[N - 4 + i][3 + j] = pixel2;
      }
    }
    for (var i = 0; i < 8; i++) {
      matrix2[7][i] = matrix2[i][7] = matrix2[7][N - i - 1] = matrix2[i][N - 8] = matrix2[N - 8][i] = matrix2[N - 1 - i][7] = 128;
    }
  }
  function fillAlignAndTiming(matrix2) {
    var N = matrix2.length;
    if (N > 21) {
      var len = N - 13;
      var delta = Math.round(len / Math.ceil(len / 28));
      if (delta % 2) delta++;
      var res = [];
      for (var p = len + 6; p > 10; p -= delta) {
        res.unshift(p);
      }
      res.unshift(6);
      for (var i = 0; i < res.length; i++) {
        for (var j = 0; j < res.length; j++) {
          var x = res[i], y = res[j];
          if (matrix2[x][y]) continue;
          for (var r = -2; r <= 2; r++) {
            for (var c = -2; c <= 2; c++) {
              var max2 = Math.max(r, c);
              var min2 = Math.min(r, c);
              var pixel2 = max2 == 1 && min2 >= -1 || min2 == -1 && max2 <= 1 ? 128 : 129;
              matrix2[x + r][y + c] = pixel2;
            }
          }
        }
      }
    }
    for (var i = 8; i < N - 8; i++) {
      matrix2[6][i] = matrix2[i][6] = i % 2 ? 128 : 129;
    }
  }
  function fillStub(matrix2) {
    var N = matrix2.length;
    for (var i = 0; i < 8; i++) {
      if (i != 6) {
        matrix2[8][i] = matrix2[i][8] = 128;
      }
      matrix2[8][N - 1 - i] = 128;
      matrix2[N - 1 - i][8] = 128;
    }
    matrix2[8][8] = 128;
    matrix2[N - 8][8] = 129;
    if (N < 45) return;
    for (var i = N - 11; i < N - 8; i++) {
      for (var j = 0; j < 6; j++) {
        matrix2[i][j] = matrix2[j][i] = 128;
      }
    }
  }
  var fillReserved = (function() {
    var FORMATS = Array(32);
    var VERSIONS = Array(40);
    var gf15 = 1335;
    var gf18 = 7973;
    var formats_mask = 21522;
    for (var format = 0; format < 32; format++) {
      var res = format << 10;
      for (var i = 5; i > 0; i--) {
        if (res >>> 9 + i) {
          res = res ^ gf15 << i - 1;
        }
      }
      FORMATS[format] = (res | format << 10) ^ formats_mask;
    }
    for (var version = 7; version <= 40; version++) {
      var res = version << 12;
      for (var i = 6; i > 0; i--) {
        if (res >>> 11 + i) {
          res = res ^ gf18 << i - 1;
        }
      }
      VERSIONS[version] = res | version << 12;
    }
    var EC_LEVELS = { L: 1, M: 0, Q: 3, H: 2 };
    return function fillReserved2(matrix2, ec_level, mask) {
      var N = matrix2.length;
      var format2 = FORMATS[EC_LEVELS[ec_level] << 3 | mask];
      function F(k) {
        return format2 >> k & 1 ? 129 : 128;
      }
      for (var i2 = 0; i2 < 8; i2++) {
        matrix2[8][N - 1 - i2] = F(i2);
        if (i2 < 6) matrix2[i2][8] = F(i2);
      }
      for (var i2 = 8; i2 < 15; i2++) {
        matrix2[N - 15 + i2][8] = F(i2);
        if (i2 > 8) matrix2[8][14 - i2] = F(i2);
      }
      matrix2[7][8] = F(6);
      matrix2[8][8] = F(7);
      matrix2[8][7] = F(8);
      var version2 = VERSIONS[(N - 17) / 4];
      if (!version2) return;
      function V(k) {
        return version2 >> k & 1 ? 129 : 128;
      }
      for (var i2 = 0; i2 < 6; i2++) {
        for (var j = 0; j < 3; j++) {
          matrix2[N - 11 + j][i2] = matrix2[i2][N - 11 + j] = V(i2 * 3 + j);
        }
      }
    };
  })();
  var fillData = /* @__PURE__ */ (function() {
    var MASK_FUNCTIONS = [
      function(i, j) {
        return (i + j) % 2 == 0;
      },
      function(i, j) {
        return i % 2 == 0;
      },
      function(i, j) {
        return j % 3 == 0;
      },
      function(i, j) {
        return (i + j) % 3 == 0;
      },
      function(i, j) {
        return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
      },
      function(i, j) {
        return i * j % 2 + i * j % 3 == 0;
      },
      function(i, j) {
        return (i * j % 2 + i * j % 3) % 2 == 0;
      },
      function(i, j) {
        return (i * j % 3 + (i + j) % 2) % 2 == 0;
      }
    ];
    return function fillData2(matrix2, data, mask) {
      var N = matrix2.length;
      var row, col, dir = -1;
      row = col = N - 1;
      var mask_fn = MASK_FUNCTIONS[mask];
      var len = data.blocks[data.blocks.length - 1].length;
      for (var i = 0; i < len; i++) {
        for (var b = 0; b < data.blocks.length; b++) {
          if (data.blocks[b].length <= i) continue;
          put(data.blocks[b][i]);
        }
      }
      len = data.ec_len;
      for (var i = 0; i < len; i++) {
        for (var b = 0; b < data.ec.length; b++) {
          put(data.ec[b][i]);
        }
      }
      if (col > -1) {
        do {
          matrix2[row][col] = mask_fn(row, col) ? 1 : 0;
        } while (next());
      }
      function put(byte) {
        for (var mask2 = 128; mask2; mask2 = mask2 >> 1) {
          var pixel2 = !!(mask2 & byte);
          if (mask_fn(row, col)) pixel2 = !pixel2;
          matrix2[row][col] = pixel2 ? 1 : 0;
          next();
        }
      }
      function next() {
        do {
          if (col % 2 ^ col < 6) {
            if (dir < 0 && row == 0 || dir > 0 && row == N - 1) {
              col--;
              dir = -dir;
            } else {
              col++;
              row += dir;
            }
          } else {
            col--;
          }
          if (col == 6) {
            col--;
          }
          if (col < 0) {
            return false;
          }
        } while (matrix2[row][col] & 240);
        return true;
      }
    };
  })();
  function calculatePenalty(matrix2) {
    var N = matrix2.length;
    var penalty = 0;
    for (var i = 0; i < N; i++) {
      var pixel2 = matrix2[i][0] & 1;
      var len = 1;
      for (var j = 1; j < N; j++) {
        var p = matrix2[i][j] & 1;
        if (p == pixel2) {
          len++;
          continue;
        }
        if (len >= 5) {
          penalty += len - 2;
        }
        pixel2 = p;
        len = 1;
      }
      if (len >= 5) {
        penalty += len - 2;
      }
    }
    for (var j = 0; j < N; j++) {
      var pixel2 = matrix2[0][j] & 1;
      var len = 1;
      for (var i = 1; i < N; i++) {
        var p = matrix2[i][j] & 1;
        if (p == pixel2) {
          len++;
          continue;
        }
        if (len >= 5) {
          penalty += len - 2;
        }
        pixel2 = p;
        len = 1;
      }
      if (len >= 5) {
        penalty += len - 2;
      }
    }
    for (var i = 0; i < N - 1; i++) {
      for (var j = 0; j < N - 1; j++) {
        var s = matrix2[i][j] + matrix2[i][j + 1] + matrix2[i + 1][j] + matrix2[i + 1][j + 1] & 7;
        if (s == 0 || s == 4) {
          penalty += 3;
        }
      }
    }
    function I(k) {
      return matrix2[i][j + k] & 1;
    }
    function J(k) {
      return matrix2[i + k][j] & 1;
    }
    for (var i = 0; i < N; i++) {
      for (var j = 0; j < N; j++) {
        if (j < N - 6 && I(0) && !I(1) && I(2) && I(3) && I(4) && !I(5) && I(6)) {
          if (j >= 4 && !(I(-4) || I(-3) || I(-2) || I(-1))) {
            penalty += 40;
          }
          if (j < N - 10 && !(I(7) || I(8) || I(9) || I(10))) {
            penalty += 40;
          }
        }
        if (i < N - 6 && J(0) && !J(1) && J(2) && J(3) && J(4) && !J(5) && J(6)) {
          if (i >= 4 && !(J(-4) || J(-3) || J(-2) || J(-1))) {
            penalty += 40;
          }
          if (i < N - 10 && !(J(7) || J(8) || J(9) || J(10))) {
            penalty += 40;
          }
        }
      }
    }
    var numDark = 0;
    for (var i = 0; i < N; i++) {
      for (var j = 0; j < N; j++) {
        if (matrix2[i][j] & 1) numDark++;
      }
    }
    penalty += 10 * Math.floor(Math.abs(10 - 20 * numDark / (N * N)));
    return penalty;
  }
  function getMatrix(data) {
    var matrix2 = init(data.version);
    fillFinders(matrix2);
    fillAlignAndTiming(matrix2);
    fillStub(matrix2);
    var penalty = Infinity;
    var bestMask = 0;
    for (var mask = 0; mask < 8; mask++) {
      fillData(matrix2, data, mask);
      fillReserved(matrix2, data.ec_level, mask);
      var p = calculatePenalty(matrix2);
      if (p < penalty) {
        penalty = p;
        bestMask = mask;
      }
    }
    fillData(matrix2, data, bestMask);
    fillReserved(matrix2, data.ec_level, bestMask);
    return matrix2.map(function(row) {
      return row.map(function(cell) {
        return cell & 1;
      });
    });
  }
  matrix = {
    getMatrix,
    init,
    fillFinders,
    fillAlignAndTiming,
    fillStub,
    fillReserved,
    fillData,
    calculatePenalty
  };
  return matrix;
}
var qrBase;
var hasRequiredQrBase;
function requireQrBase() {
  if (hasRequiredQrBase) return qrBase;
  hasRequiredQrBase = 1;
  var encode = requireEncode();
  var calculateEC = requireErrorcode();
  var matrix2 = requireMatrix();
  function _deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  var EC_LEVELS = ["L", "M", "Q", "H"];
  var versions = [
    [],
    // there is no version 0
    // total number of codewords, (number of ec codewords, number of blocks) * ( L, M, Q, H )
    [26, 7, 1, 10, 1, 13, 1, 17, 1],
    [44, 10, 1, 16, 1, 22, 1, 28, 1],
    [70, 15, 1, 26, 1, 36, 2, 44, 2],
    [100, 20, 1, 36, 2, 52, 2, 64, 4],
    [134, 26, 1, 48, 2, 72, 4, 88, 4],
    // 5
    [172, 36, 2, 64, 4, 96, 4, 112, 4],
    [196, 40, 2, 72, 4, 108, 6, 130, 5],
    [242, 48, 2, 88, 4, 132, 6, 156, 6],
    [292, 60, 2, 110, 5, 160, 8, 192, 8],
    [346, 72, 4, 130, 5, 192, 8, 224, 8],
    // 10
    [404, 80, 4, 150, 5, 224, 8, 264, 11],
    [466, 96, 4, 176, 8, 260, 10, 308, 11],
    [532, 104, 4, 198, 9, 288, 12, 352, 16],
    [581, 120, 4, 216, 9, 320, 16, 384, 16],
    [655, 132, 6, 240, 10, 360, 12, 432, 18],
    // 15
    [733, 144, 6, 280, 10, 408, 17, 480, 16],
    [815, 168, 6, 308, 11, 448, 16, 532, 19],
    [901, 180, 6, 338, 13, 504, 18, 588, 21],
    [991, 196, 7, 364, 14, 546, 21, 650, 25],
    [1085, 224, 8, 416, 16, 600, 20, 700, 25],
    // 20
    [1156, 224, 8, 442, 17, 644, 23, 750, 25],
    [1258, 252, 9, 476, 17, 690, 23, 816, 34],
    [1364, 270, 9, 504, 18, 750, 25, 900, 30],
    [1474, 300, 10, 560, 20, 810, 27, 960, 32],
    [1588, 312, 12, 588, 21, 870, 29, 1050, 35],
    // 25
    [1706, 336, 12, 644, 23, 952, 34, 1110, 37],
    [1828, 360, 12, 700, 25, 1020, 34, 1200, 40],
    [1921, 390, 13, 728, 26, 1050, 35, 1260, 42],
    [2051, 420, 14, 784, 28, 1140, 38, 1350, 45],
    [2185, 450, 15, 812, 29, 1200, 40, 1440, 48],
    // 30
    [2323, 480, 16, 868, 31, 1290, 43, 1530, 51],
    [2465, 510, 17, 924, 33, 1350, 45, 1620, 54],
    [2611, 540, 18, 980, 35, 1440, 48, 1710, 57],
    [2761, 570, 19, 1036, 37, 1530, 51, 1800, 60],
    [2876, 570, 19, 1064, 38, 1590, 53, 1890, 63],
    // 35
    [3034, 600, 20, 1120, 40, 1680, 56, 1980, 66],
    [3196, 630, 21, 1204, 43, 1770, 59, 2100, 70],
    [3362, 660, 22, 1260, 45, 1860, 62, 2220, 74],
    [3532, 720, 24, 1316, 47, 1950, 65, 2310, 77],
    [3706, 750, 25, 1372, 49, 2040, 68, 2430, 81]
    // 40
  ];
  versions = versions.map(function(v, index) {
    if (!index) return {};
    var res = {};
    for (var i = 1; i < 8; i += 2) {
      var length = v[0] - v[i];
      var num_template = v[i + 1];
      var ec_level = EC_LEVELS[i / 2 | 0];
      var level = {
        version: index,
        ec_level,
        data_len: length,
        ec_len: v[i] / num_template,
        blocks: [],
        ec: []
      };
      for (var k = num_template, n = length; k > 0; k--) {
        var block = n / k | 0;
        level.blocks.push(block);
        n -= block;
      }
      res[ec_level] = level;
    }
    return res;
  });
  function getTemplate(message, ec_level) {
    var i = 1;
    var len;
    if (message.data1) {
      len = Math.ceil(message.data1.length / 8);
    } else {
      i = 10;
    }
    for (; i < 10; i++) {
      var version = versions[i][ec_level];
      if (version.data_len >= len) {
        return _deepCopy(version);
      }
    }
    if (message.data10) {
      len = Math.ceil(message.data10.length / 8);
    } else {
      i = 27;
    }
    for (; i < 27; i++) {
      var version = versions[i][ec_level];
      if (version.data_len >= len) {
        return _deepCopy(version);
      }
    }
    len = Math.ceil(message.data27.length / 8);
    for (; i < 41; i++) {
      var version = versions[i][ec_level];
      if (version.data_len >= len) {
        return _deepCopy(version);
      }
    }
    throw new Error("Too much data");
  }
  function fillTemplate(message, template) {
    var blocks = new Buffer(template.data_len);
    blocks.fill(0);
    if (template.version < 10) {
      message = message.data1;
    } else if (template.version < 27) {
      message = message.data10;
    } else {
      message = message.data27;
    }
    var len = message.length;
    for (var i = 0; i < len; i += 8) {
      var b = 0;
      for (var j = 0; j < 8; j++) {
        b = b << 1 | (message[i + j] ? 1 : 0);
      }
      blocks[i / 8] = b;
    }
    var pad = 236;
    for (var i = Math.ceil((len + 4) / 8); i < blocks.length; i++) {
      blocks[i] = pad;
      pad = pad == 236 ? 17 : 236;
    }
    var offset = 0;
    template.blocks = template.blocks.map(function(n) {
      var b2 = blocks.slice(offset, offset + n);
      offset += n;
      template.ec.push(calculateEC(b2, template.ec_len));
      return b2;
    });
    return template;
  }
  function QR(text, ec_level, parse_url) {
    ec_level = EC_LEVELS.indexOf(ec_level) > -1 ? ec_level : "M";
    var message = encode(text, parse_url);
    var data = fillTemplate(message, getTemplate(message, ec_level));
    return matrix2.getMatrix(data);
  }
  qrBase = {
    QR,
    getTemplate,
    fillTemplate
  };
  return qrBase;
}
var crc32 = { exports: {} };
var crc32buffer;
var hasRequiredCrc32buffer;
function requireCrc32buffer() {
  if (hasRequiredCrc32buffer) return crc32buffer;
  hasRequiredCrc32buffer = 1;
  var crc_table = [];
  for (var n = 0; n < 256; n++) {
    var c = crc_table[n] = new Buffer(4);
    c.writeUInt32BE(n, 0);
    for (var k = 0; k < 8; k++) {
      var b0 = c[0] & 1;
      var b1 = c[1] & 1;
      var b2 = c[2] & 1;
      var b3 = c[3] & 1;
      c[0] = c[0] >> 1 ^ (b3 ? 237 : 0);
      c[1] = c[1] >> 1 ^ (b3 ? 184 : 0) ^ (b0 ? 128 : 0);
      c[2] = c[2] >> 1 ^ (b3 ? 131 : 0) ^ (b1 ? 128 : 0);
      c[3] = c[3] >> 1 ^ (b3 ? 32 : 0) ^ (b2 ? 128 : 0);
    }
  }
  function update(c2, buf) {
    var l = buf.length;
    for (var n2 = 0; n2 < l; n2++) {
      var e = crc_table[c2[3] ^ buf[n2]];
      c2[3] = e[3] ^ c2[2];
      c2[2] = e[2] ^ c2[1];
      c2[1] = e[1] ^ c2[0];
      c2[0] = e[0];
    }
  }
  function crc322() {
    var l = arguments.length;
    var c2 = new Buffer(4);
    c2.fill(255);
    for (var i = 0; i < l; i++) {
      update(c2, new Buffer(arguments[i]));
    }
    c2[0] = c2[0] ^ 255;
    c2[1] = c2[1] ^ 255;
    c2[2] = c2[2] ^ 255;
    c2[3] = c2[3] ^ 255;
    return c2.readUInt32BE(0);
  }
  crc32buffer = crc322;
  return crc32buffer;
}
var hasRequiredCrc32;
function requireCrc32() {
  if (hasRequiredCrc32) return crc32.exports;
  hasRequiredCrc32 = 1;
  (function() {
    if (process.arch === "arm") {
      crc32.exports = requireCrc32buffer();
      return;
    }
    var crc_table = [];
    (function() {
      for (var n = 0; n < 256; n++) {
        var c = n;
        for (var k = 0; k < 8; k++) {
          if (c & 1) {
            c = 3988292384 ^ c >>> 1;
          } else {
            c = c >>> 1;
          }
        }
        crc_table[n] = c >>> 0;
      }
    })();
    function update(c, buf) {
      var l = buf.length;
      for (var n = 0; n < l; n++) {
        c = crc_table[(c ^ buf[n]) & 255] ^ c >>> 8;
      }
      return c;
    }
    function crc32$1() {
      var l = arguments.length;
      var c = -1;
      for (var i = 0; i < l; i++) {
        c = update(c, new Buffer(arguments[i]));
      }
      c = (c ^ -1) >>> 0;
      return c;
    }
    crc32.exports = crc32$1;
  })();
  return crc32.exports;
}
var png_1;
var hasRequiredPng;
function requirePng() {
  if (hasRequiredPng) return png_1;
  hasRequiredPng = 1;
  var zlib = require$$0;
  var crc322 = requireCrc32();
  var PNG_HEAD = new Buffer([137, 80, 78, 71, 13, 10, 26, 10]);
  var PNG_IHDR = new Buffer([0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0]);
  var PNG_IDAT = new Buffer([0, 0, 0, 0, 73, 68, 65, 84]);
  var PNG_IEND = new Buffer([0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130]);
  function png(bitmap2, stream) {
    stream.push(PNG_HEAD);
    var IHDR = Buffer.concat([PNG_IHDR]);
    IHDR.writeUInt32BE(bitmap2.size, 8);
    IHDR.writeUInt32BE(bitmap2.size, 12);
    IHDR.writeUInt32BE(crc322(IHDR.slice(4, -4)), 21);
    stream.push(IHDR);
    var IDAT = Buffer.concat([
      PNG_IDAT,
      zlib.deflateSync(bitmap2.data, { level: 9 }),
      new Buffer(4)
    ]);
    IDAT.writeUInt32BE(IDAT.length - 12, 0);
    IDAT.writeUInt32BE(crc322(IDAT.slice(4, -4)), IDAT.length - 4);
    stream.push(IDAT);
    stream.push(PNG_IEND);
    stream.push(null);
  }
  function bitmap(matrix2, size, margin) {
    var N = matrix2.length;
    var X = (N + 2 * margin) * size;
    var data = new Buffer((X + 1) * X);
    data.fill(255);
    for (var i = 0; i < X; i++) {
      data[i * (X + 1)] = 0;
    }
    for (var i = 0; i < N; i++) {
      for (var j = 0; j < N; j++) {
        if (matrix2[i][j]) {
          var offset = ((margin + i) * (X + 1) + (margin + j)) * size + 1;
          data.fill(0, offset, offset + size);
          for (var c = 1; c < size; c++) {
            data.copy(data, offset + c * (X + 1), offset, offset + size);
          }
        }
      }
    }
    return {
      data,
      size: X
    };
  }
  png_1 = {
    bitmap,
    png
  };
  return png_1;
}
var vector;
var hasRequiredVector;
function requireVector() {
  if (hasRequiredVector) return vector;
  hasRequiredVector = 1;
  function matrix2path(matrix2) {
    var N = matrix2.length;
    var filled = [];
    for (var row = -1; row <= N; row++) {
      filled[row] = [];
    }
    var path2 = [];
    for (var row = 0; row < N; row++) {
      for (var col = 0; col < N; col++) {
        if (filled[row][col]) continue;
        filled[row][col] = 1;
        if (isDark(row, col)) {
          if (!isDark(row - 1, col)) {
            path2.push(plot(row, col, "right"));
          }
        } else {
          if (isDark(row, col - 1)) {
            path2.push(plot(row, col, "down"));
          }
        }
      }
    }
    return path2;
    function isDark(row2, col2) {
      if (row2 < 0 || col2 < 0 || row2 >= N || col2 >= N) return false;
      return !!matrix2[row2][col2];
    }
    function plot(row0, col0, dir) {
      filled[row0][col0] = 1;
      var res = [];
      res.push(["M", col0, row0]);
      var row2 = row0;
      var col2 = col0;
      var len = 0;
      do {
        switch (dir) {
          case "right":
            filled[row2][col2] = 1;
            if (isDark(row2, col2)) {
              filled[row2 - 1][col2] = 1;
              if (isDark(row2 - 1, col2)) {
                res.push(["h", len]);
                len = 0;
                dir = "up";
              } else {
                len++;
                col2++;
              }
            } else {
              res.push(["h", len]);
              len = 0;
              dir = "down";
            }
            break;
          case "left":
            filled[row2 - 1][col2 - 1] = 1;
            if (isDark(row2 - 1, col2 - 1)) {
              filled[row2][col2 - 1] = 1;
              if (isDark(row2, col2 - 1)) {
                res.push(["h", -len]);
                len = 0;
                dir = "down";
              } else {
                len++;
                col2--;
              }
            } else {
              res.push(["h", -len]);
              len = 0;
              dir = "up";
            }
            break;
          case "down":
            filled[row2][col2 - 1] = 1;
            if (isDark(row2, col2 - 1)) {
              filled[row2][col2] = 1;
              if (isDark(row2, col2)) {
                res.push(["v", len]);
                len = 0;
                dir = "right";
              } else {
                len++;
                row2++;
              }
            } else {
              res.push(["v", len]);
              len = 0;
              dir = "left";
            }
            break;
          case "up":
            filled[row2 - 1][col2] = 1;
            if (isDark(row2 - 1, col2)) {
              filled[row2 - 1][col2 - 1] = 1;
              if (isDark(row2 - 1, col2 - 1)) {
                res.push(["v", -len]);
                len = 0;
                dir = "left";
              } else {
                len++;
                row2--;
              }
            } else {
              res.push(["v", -len]);
              len = 0;
              dir = "right";
            }
            break;
        }
      } while (row2 != row0 || col2 != col0);
      return res;
    }
  }
  function pushSVGPath(matrix2, stream, margin) {
    matrix2path(matrix2).forEach(function(subpath) {
      var res = "";
      for (var k = 0; k < subpath.length; k++) {
        var item = subpath[k];
        switch (item[0]) {
          case "M":
            res += "M" + (item[1] + margin) + " " + (item[2] + margin);
            break;
          default:
            res += item.join("");
        }
      }
      res += "z";
      stream.push(res);
    });
  }
  function SVG_object(matrix2, margin) {
    var stream = [];
    pushSVGPath(matrix2, stream, margin);
    var result = {
      size: matrix2.length + 2 * margin,
      path: stream.filter(Boolean).join("")
    };
    return result;
  }
  function SVG(matrix2, stream, margin, size) {
    var X = matrix2.length + 2 * margin;
    stream.push('<svg xmlns="http://www.w3.org/2000/svg" ');
    if (size > 0) {
      var XY = X * size;
      stream.push('width="' + XY + '" height="' + XY + '" ');
    }
    stream.push('viewBox="0 0 ' + X + " " + X + '">');
    stream.push('<path d="');
    pushSVGPath(matrix2, stream, margin);
    stream.push('"/></svg>');
    stream.push(null);
  }
  function EPS(matrix2, stream, margin) {
    var N = matrix2.length;
    var scale = 9;
    var X = (N + 2 * margin) * scale;
    stream.push([
      "%!PS-Adobe-3.0 EPSF-3.0",
      "%%BoundingBox: 0 0 " + X + " " + X,
      "/h { 0 rlineto } bind def",
      "/v { 0 exch neg rlineto } bind def",
      "/M { neg " + (N + margin) + " add moveto } bind def",
      "/z { closepath } bind def",
      scale + " " + scale + " scale",
      ""
    ].join("\n"));
    matrix2path(matrix2).forEach(function(subpath) {
      var res = "";
      for (var k = 0; k < subpath.length; k++) {
        var item = subpath[k];
        switch (item[0]) {
          case "M":
            res += item[1] + margin + " " + item[2] + " M ";
            break;
          default:
            res += item[1] + " " + item[0] + " ";
        }
      }
      res += "z\n";
      stream.push(res);
    });
    stream.push("fill\n%%EOF\n");
    stream.push(null);
  }
  function PDF(matrix2, stream, margin) {
    var N = matrix2.length;
    var scale = 9;
    var X = (N + 2 * margin) * scale;
    var data = [
      "%PDF-1.0\n\n",
      "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj\n",
      "2 0 obj << /Type /Pages /Count 1 /Kids [ 3 0 R ] >> endobj\n"
    ];
    data.push("3 0 obj << /Type /Page /Parent 2 0 R /Resources <<>> /Contents 4 0 R /MediaBox [ 0 0 " + X + " " + X + " ] >> endobj\n");
    var path2 = scale + " 0 0 " + scale + " 0 0 cm\n";
    path2 += matrix2path(matrix2).map(function(subpath) {
      var res = "";
      var x, y;
      for (var k = 0; k < subpath.length; k++) {
        var item = subpath[k];
        switch (item[0]) {
          case "M":
            x = item[1] + margin;
            y = N - item[2] + margin;
            res += x + " " + y + " m ";
            break;
          case "h":
            x += item[1];
            res += x + " " + y + " l ";
            break;
          case "v":
            y -= item[1];
            res += x + " " + y + " l ";
            break;
        }
      }
      res += "h";
      return res;
    }).join("\n");
    path2 += "\nf\n";
    data.push("4 0 obj << /Length " + path2.length + " >> stream\n" + path2 + "endstream\nendobj\n");
    var xref = "xref\n0 5\n0000000000 65535 f \n";
    for (var i = 1, l = data[0].length; i < 5; i++) {
      xref += ("0000000000" + l).substr(-10) + " 00000 n \n";
      l += data[i].length;
    }
    data.push(
      xref,
      "trailer << /Root 1 0 R /Size 5 >>\n",
      "startxref\n" + l + "\n%%EOF\n"
    );
    stream.push(data.join(""));
    stream.push(null);
  }
  vector = {
    svg: SVG,
    eps: EPS,
    pdf: PDF,
    svg_object: SVG_object
  };
  return vector;
}
var qr$1;
var hasRequiredQr;
function requireQr() {
  if (hasRequiredQr) return qr$1;
  hasRequiredQr = 1;
  var Readable = require$$0.Readable;
  var QR = requireQrBase().QR;
  var png = requirePng();
  var vector2 = requireVector();
  var fn_noop = function() {
  };
  var BITMAP_OPTIONS = {
    parse_url: false,
    ec_level: "M",
    size: 5,
    margin: 4,
    customize: null
  };
  var VECTOR_OPTIONS = {
    parse_url: false,
    ec_level: "M",
    margin: 1,
    size: 0
  };
  function get_options(options, force_type) {
    if (typeof options === "string") {
      options = { "ec_level": options };
    } else {
      options = options || {};
    }
    var _options = {
      type: String(force_type || options.type || "png").toLowerCase()
    };
    var defaults = _options.type == "png" ? BITMAP_OPTIONS : VECTOR_OPTIONS;
    for (var k in defaults) {
      _options[k] = k in options ? options[k] : defaults[k];
    }
    return _options;
  }
  function qr_image(text, options) {
    options = get_options(options);
    var matrix2 = QR(text, options.ec_level, options.parse_url);
    var stream = new Readable();
    stream._read = fn_noop;
    switch (options.type) {
      case "svg":
      case "pdf":
      case "eps":
        process.nextTick(function() {
          vector2[options.type](matrix2, stream, options.margin, options.size);
        });
        break;
      case "svgpath":
        process.nextTick(function() {
          var obj = vector2.svg_object(matrix2, options.margin, options.size);
          stream.push(obj.path);
          stream.push(null);
        });
        break;
      case "png":
      default:
        process.nextTick(function() {
          var bitmap = png.bitmap(matrix2, options.size, options.margin);
          if (options.customize) {
            options.customize(bitmap);
          }
          png.png(bitmap, stream);
        });
    }
    return stream;
  }
  function qr_image_sync(text, options) {
    options = get_options(options);
    var matrix2 = QR(text, options.ec_level, options.parse_url);
    var stream = [];
    var result;
    switch (options.type) {
      case "svg":
      case "pdf":
      case "eps":
        vector2[options.type](matrix2, stream, options.margin, options.size);
        result = stream.filter(Boolean).join("");
        break;
      case "png":
      default:
        var bitmap = png.bitmap(matrix2, options.size, options.margin);
        if (options.customize) {
          options.customize(bitmap);
        }
        png.png(bitmap, stream);
        result = Buffer.concat(stream.filter(Boolean));
    }
    return result;
  }
  function svg_object(text, options) {
    options = get_options(options, "svg");
    var matrix2 = QR(text, options.ec_level);
    return vector2.svg_object(matrix2, options.margin);
  }
  qr$1 = {
    matrix: QR,
    image: qr_image,
    imageSync: qr_image_sync,
    svgObject: svg_object
  };
  return qr$1;
}
var hasRequiredOled;
function requireOled() {
  if (hasRequiredOled) return oled;
  hasRequiredOled = 1;
  Object.defineProperty(oled, "__esModule", { value: true });
  var qr2 = null;
  try {
    qr2 = requireQr();
  } catch (err) {
  }
  var Protocol;
  (function(Protocol2) {
    Protocol2[Protocol2["I2C"] = 0] = "I2C";
    Protocol2[Protocol2["SPI"] = 1] = "SPI";
  })(Protocol || (Protocol = {}));
  var TransferType;
  (function(TransferType2) {
    TransferType2[TransferType2["Command"] = 0] = "Command";
    TransferType2[TransferType2["Data"] = 1] = "Data";
  })(TransferType || (TransferType = {}));
  var Oled2 = (function() {
    function Oled3(board, five2, opts) {
      this.HEIGHT = opts.height || 32;
      this.WIDTH = opts.width || 128;
      this.ADDRESS = opts.address || 60;
      this.PROTOCOL = opts.address ? Protocol.I2C : Protocol.SPI;
      this.MICROVIEW = opts.microview || false;
      this.SECONDARYPIN = opts.secondaryPin || 12;
      this.RESETPIN = opts.resetPin === void 0 ? 4 : opts.resetPin;
      this.DATA = opts.data || 64;
      this.COMMAND = opts.command || 0;
      this.cursor_x = 0;
      this.cursor_y = 0;
      this.buffer = Buffer.alloc(this.WIDTH * this.HEIGHT / 8);
      this.buffer.fill(0);
      this.dirtyBytes = [];
      this.board = board;
      this.five = five2;
      var config = {
        "128x32": {
          multiplex: 31,
          compins: 2,
          coloffset: 0
        },
        "128x64": {
          multiplex: 63,
          compins: 18,
          coloffset: 0
        },
        "96x16": {
          multiplex: 15,
          compins: 2,
          coloffset: 0
        },
        "64x48": {
          multiplex: 47,
          compins: 18,
          coloffset: this.MICROVIEW ? 32 : 0
        }
      };
      if (this.MICROVIEW) {
        this.SPIconfig = {
          dcPin: 8,
          ssPin: 10,
          rstPin: 7,
          clkPin: 13,
          mosiPin: 11
        };
      } else if (this.PROTOCOL === Protocol.SPI) {
        this.SPIconfig = {
          dcPin: 11,
          ssPin: this.SECONDARYPIN,
          rstPin: 13,
          clkPin: 10,
          mosiPin: 9
        };
      }
      var screenSize = "".concat(this.WIDTH, "x").concat(this.HEIGHT);
      this.screenConfig = config[screenSize];
      if (this.PROTOCOL === Protocol.I2C) {
        this._setUpI2C(opts);
      } else {
        this._setUpSPI();
      }
      this._initialise();
    }
    Oled3.prototype._initialise = function() {
      var initSeq = [
        Oled3.DISPLAY_OFF,
        Oled3.SET_DISPLAY_CLOCK_DIV,
        128,
        Oled3.SET_MULTIPLEX,
        this.screenConfig.multiplex,
        Oled3.SET_DISPLAY_OFFSET,
        0,
        Oled3.SET_START_LINE,
        Oled3.CHARGE_PUMP,
        20,
        Oled3.MEMORY_MODE,
        0,
        Oled3.SEG_REMAP,
        Oled3.COM_SCAN_DEC,
        Oled3.SET_COM_PINS,
        this.screenConfig.compins,
        Oled3.SET_CONTRAST,
        143,
        Oled3.SET_PRECHARGE,
        241,
        Oled3.SET_VCOM_DETECT,
        64,
        Oled3.DISPLAY_ALL_ON_RESUME,
        Oled3.NORMAL_DISPLAY,
        Oled3.DISPLAY_ON
      ];
      for (var i = 0; i < initSeq.length; i++) {
        this._transfer(TransferType.Command, initSeq[i]);
      }
    };
    Oled3.prototype._setUpSPI = function() {
      this.dcPin = new this.five.Pin(this.SPIconfig.dcPin);
      this.ssPin = new this.five.Pin(this.SPIconfig.ssPin);
      this.clkPin = new this.five.Pin(this.SPIconfig.clkPin);
      this.mosiPin = new this.five.Pin(this.SPIconfig.mosiPin);
      this.rstPin = new this.five.Pin(this.SPIconfig.rstPin);
      this.rstPin.low();
      this.rstPin.high();
      this.ssPin.high();
    };
    Oled3.prototype._setUpI2C = function(opts) {
      this.board.io.i2cConfig(opts);
      if (this.rstPin) {
        this.rstPin = new this.five.Pin({
          pin: this.RESETPIN,
          board: this.board
        });
        this.rstPin.low();
        this.rstPin.high();
      }
    };
    Oled3.prototype._transfer = function(type2, val) {
      var control;
      if (type2 === TransferType.Data) {
        control = this.DATA;
      } else if (type2 === TransferType.Command) {
        control = this.COMMAND;
      } else {
        return;
      }
      if (this.PROTOCOL === Protocol.I2C) {
        this.board.io.i2cWrite(this.ADDRESS, [control, val]);
      } else {
        this._writeSPI(val, type2);
      }
    };
    Oled3.prototype._writeSPI = function(byte, mode) {
      if (mode === TransferType.Command) {
        this.dcPin.low();
      } else {
        this.dcPin.high();
      }
      this.ssPin.low();
      for (var bit = 7; bit >= 0; bit--) {
        this.clkPin.low();
        if (byte & 1 << bit) {
          this.mosiPin.high();
        } else {
          this.mosiPin.low();
        }
        this.clkPin.high();
      }
      this.ssPin.high();
    };
    Oled3.prototype._readI2C = function(fn) {
      this.board.io.i2cReadOnce(this.ADDRESS, 1, function(data) {
        fn(data);
      });
    };
    Oled3.prototype._waitUntilReady = function(callback) {
      var oled2 = this;
      var tick = function(callback2) {
        oled2._readI2C(function(byte) {
          var busy = byte >> 7 & 1;
          if (!busy) {
            callback2();
          } else {
            console.log("I'm busy!");
            setTimeout(tick, 0);
          }
        });
      };
      if (this.PROTOCOL === Protocol.I2C) {
        setTimeout(function() {
          tick(callback);
        }, 0);
      } else {
        callback();
      }
    };
    Oled3.prototype.setCursor = function(x, y) {
      this.cursor_x = x;
      this.cursor_y = y;
    };
    Oled3.prototype._invertColor = function(color) {
      return color === 0 ? 1 : 0;
    };
    Oled3.prototype.writeString = function(font2, size, string, color, wrap, linespacing, sync) {
      var immed = typeof sync === "undefined" ? true : sync;
      var wordArr = string.split(" ");
      var len = wordArr.length;
      var offset = this.cursor_x;
      var padding = 0;
      var letspace = 1;
      var leading = linespacing || 2;
      for (var i = 0; i < len; i += 1) {
        if (i < len - 1)
          wordArr[i] += " ";
        var stringArr = wordArr[i].split("");
        var slen = stringArr.length;
        var compare = font2.width * size * slen + size * (len - 1);
        if (wrap && len > 1 && offset >= this.WIDTH - compare) {
          offset = 1;
          this.cursor_y += font2.height * size + size + leading;
          this.setCursor(offset, this.cursor_y);
        }
        for (var i_1 = 0; i_1 < slen; i_1 += 1) {
          var charBuf = this._findCharBuf(font2, stringArr[i_1]);
          var charBytes = this._readCharBytes(charBuf);
          this._drawChar(font2, charBytes, size, color, false);
          this.fillRect(offset - padding, this.cursor_y, padding, font2.height * size, this._invertColor(color), false);
          padding = stringArr[i_1] === " " ? 0 : size + letspace;
          offset += font2.width * size + padding;
          if (wrap && offset >= this.WIDTH - font2.width - letspace) {
            offset = 1;
            this.cursor_y += font2.height * size + size + leading;
          }
          this.setCursor(offset, this.cursor_y);
        }
      }
      if (immed) {
        this._updateDirtyBytes(this.dirtyBytes);
      }
    };
    Oled3.prototype._drawChar = function(font2, byteArray, size, color, sync) {
      var x = this.cursor_x;
      var y = this.cursor_y;
      var c = 0;
      var pagePos = 0;
      for (var i = 0; i < byteArray.length; i += 1) {
        pagePos = Math.floor(i / font2.width) * 8;
        for (var j = 0; j < 8; j += 1) {
          var pixelState = byteArray[i][j] === 1 ? color : this._invertColor(color);
          var xpos = void 0;
          var ypos = void 0;
          if (size === 1) {
            xpos = x + c;
            ypos = y + j + pagePos;
            this.drawPixel([xpos, ypos, pixelState], false);
          } else {
            xpos = x + i * size;
            ypos = y + j * size;
            this.fillRect(xpos, ypos, size, size, pixelState, false);
          }
        }
        c = c < font2.width - 1 ? c += 1 : 0;
      }
    };
    Oled3.prototype._readCharBytes = function(byteArray) {
      var bitArr = [];
      var bitCharArr = [];
      for (var i = 0; i < byteArray.length; i += 1) {
        var byte = byteArray[i];
        for (var j = 0; j < 8; j += 1) {
          var bit = byte >> j & 1;
          bitArr.push(bit);
        }
        bitCharArr.push(bitArr);
        bitArr = [];
      }
      return bitCharArr;
    };
    Oled3.prototype._findCharBuf = function(font2, c) {
      var charLength = Math.ceil(font2.width * font2.height / 8);
      var cBufPos = font2.lookup.indexOf(c) * charLength;
      return font2.fontData.slice(cBufPos, cBufPos + charLength);
    };
    Oled3.prototype.update = function() {
      var _this = this;
      this._waitUntilReady(function() {
        var displaySeq = [
          Oled3.COLUMN_ADDR,
          _this.screenConfig.coloffset,
          _this.screenConfig.coloffset + _this.WIDTH - 1,
          Oled3.PAGE_ADDR,
          0,
          _this.HEIGHT / 8 - 1
        ];
        var displaySeqLen = displaySeq.length;
        var bufferLen = _this.buffer.length;
        for (var i = 0; i < displaySeqLen; i += 1) {
          _this._transfer(TransferType.Command, displaySeq[i]);
        }
        for (var i = 0; i < bufferLen; i += 1) {
          _this._transfer(TransferType.Data, _this.buffer[i]);
        }
      });
      this.dirtyBytes = [];
    };
    Oled3.prototype.updateDirty = function() {
      this._updateDirtyBytes(this.dirtyBytes);
    };
    Oled3.prototype.dimDisplay = function(bool) {
      var contrast;
      if (bool) {
        contrast = 0;
      } else {
        contrast = 207;
      }
      this._transfer(TransferType.Command, Oled3.SET_CONTRAST);
      this._transfer(TransferType.Command, contrast);
    };
    Oled3.prototype.turnOffDisplay = function() {
      this._transfer(TransferType.Command, Oled3.DISPLAY_OFF);
    };
    Oled3.prototype.turnOnDisplay = function() {
      this._transfer(TransferType.Command, Oled3.DISPLAY_ON);
    };
    Oled3.prototype.clearDisplay = function(sync) {
      var immed = typeof sync === "undefined" ? true : sync;
      for (var i = 0; i < this.buffer.length; i += 1) {
        if (this.buffer[i] !== 0) {
          this.buffer[i] = 0;
          if (this.dirtyBytes.indexOf(i) === -1) {
            this.dirtyBytes.push(i);
          }
        }
      }
      if (immed) {
        this._updateDirtyBytes(this.dirtyBytes);
      }
    };
    Oled3.prototype.invertDisplay = function(bool) {
      if (bool) {
        this._transfer(TransferType.Command, Oled3.INVERT_DISPLAY);
      } else {
        this._transfer(TransferType.Command, Oled3.NORMAL_DISPLAY);
      }
    };
    Oled3.prototype.drawBitmap = function(pixels, sync) {
      var immed = typeof sync === "undefined" ? true : sync;
      for (var i = 0; i < pixels.length; i++) {
        var x = Math.floor(i % this.WIDTH);
        var y = Math.floor(i / this.WIDTH);
        this.drawPixel([x, y, pixels[i]], false);
      }
      if (immed) {
        this._updateDirtyBytes(this.dirtyBytes);
      }
    };
    Oled3.prototype._isSinglePixel = function(pixels) {
      return typeof pixels[0] !== "object";
    };
    Oled3.prototype.drawPixel = function(pixels, sync) {
      var _this = this;
      var immed = typeof sync === "undefined" ? true : sync;
      if (this._isSinglePixel(pixels))
        pixels = [pixels];
      pixels.forEach(function(el) {
        var x = el[0], y = el[1], color = el[2];
        if (x > _this.WIDTH || y > _this.HEIGHT)
          return;
        var byte = 0;
        var page = Math.floor(y / 8);
        var pageShift = 1 << y - 8 * page;
        page === 0 ? byte = x : byte = x + _this.WIDTH * page;
        if (color === 0) {
          _this.buffer[byte] &= ~pageShift;
        } else {
          _this.buffer[byte] |= pageShift;
        }
        if (_this.dirtyBytes.indexOf(byte) === -1) {
          _this.dirtyBytes.push(byte);
        }
      }, this);
      if (immed) {
        this._updateDirtyBytes(this.dirtyBytes);
      }
    };
    Oled3.prototype._updateDirtyBytes = function(byteArray) {
      var _this = this;
      var blen = byteArray.length;
      this._waitUntilReady(function() {
        var pageStart = Infinity;
        var pageEnd = 0;
        var colStart = Infinity;
        var colEnd = 0;
        var any = false;
        for (var i = 0; i < blen; i += 1) {
          var b = byteArray[i];
          if (b >= 0 && b < _this.buffer.length) {
            var page = b / _this.WIDTH | 0;
            if (page < pageStart)
              pageStart = page;
            if (page > pageEnd)
              pageEnd = page;
            var col = b % _this.WIDTH;
            if (col < colStart)
              colStart = col;
            if (col > colEnd)
              colEnd = col;
            any = true;
          }
        }
        if (!any)
          return;
        var displaySeq = [
          Oled3.COLUMN_ADDR,
          colStart,
          colEnd,
          Oled3.PAGE_ADDR,
          pageStart,
          pageEnd
        ];
        var displaySeqLen = displaySeq.length;
        for (var i = 0; i < displaySeqLen; i += 1) {
          _this._transfer(TransferType.Command, displaySeq[i]);
        }
        for (var i = pageStart; i <= pageEnd; i += 1) {
          for (var j = colStart; j <= colEnd; j += 1) {
            _this._transfer(TransferType.Data, _this.buffer[_this.WIDTH * i + j]);
          }
        }
      });
      this.dirtyBytes = [];
    };
    Oled3.prototype.drawLine = function(x0, y0, x1, y1, color, sync) {
      var immed = typeof sync === "undefined" ? true : sync;
      var dx = Math.abs(x1 - x0);
      var sx = x0 < x1 ? 1 : -1;
      var dy = Math.abs(y1 - y0);
      var sy = y0 < y1 ? 1 : -1;
      var err = (dx > dy ? dx : -dy) / 2;
      while (true) {
        this.drawPixel([x0, y0, color], false);
        if (x0 === x1 && y0 === y1)
          break;
        var e2 = err;
        if (e2 > -dx) {
          err -= dy;
          x0 += sx;
        }
        if (e2 < dy) {
          err += dx;
          y0 += sy;
        }
      }
      if (immed) {
        this._updateDirtyBytes(this.dirtyBytes);
      }
    };
    Oled3.prototype.drawRect = function(x, y, w, h, color, sync) {
      var immed = typeof sync === "undefined" ? true : sync;
      this.drawLine(x, y, x + w, y, color, false);
      this.drawLine(x, y + 1, x, y + h - 1, color, false);
      this.drawLine(x + w, y + 1, x + w, y + h - 1, color, false);
      this.drawLine(x, y + h - 1, x + w, y + h - 1, color, false);
      if (immed) {
        this._updateDirtyBytes(this.dirtyBytes);
      }
    };
    Oled3.prototype.drawQRCode = function(x, y, data, margin, sync) {
      if (margin === void 0) {
        margin = 4;
      }
      if (qr2) {
        var immed = typeof sync === "undefined" ? true : sync;
        var matrix2 = qr2.matrix(data);
        var pixels = matrix2.flat();
        var bitmap = pixels.map(function(pixel2) {
          return pixel2 ? 0 : 1;
        });
        var width = Math.sqrt(pixels.length);
        this.fillRect(x, y, width + margin * 2, width + margin * 2, 1);
        for (var i = 0; i < bitmap.length; i++) {
          var px = Math.floor(i % width);
          var py = Math.floor(i / width);
          px += margin + x;
          py += margin + y;
          this.drawPixel([px, py, bitmap[i]], false);
        }
        if (immed) {
          this._updateDirtyBytes(this.dirtyBytes);
        }
      } else {
        console.log("Missing optional dependency: qr-image");
      }
    };
    Oled3.prototype.fillRect = function(x, y, w, h, color, sync) {
      var immed = typeof sync === "undefined" ? true : sync;
      for (var i = x; i < x + w; i += 1) {
        this.drawLine(i, y, i, y + h - 1, color, false);
      }
      if (immed) {
        this._updateDirtyBytes(this.dirtyBytes);
      }
    };
    Oled3.prototype.drawCircle = function(x0, y0, r, color, sync) {
      var immed = typeof sync === "undefined" ? true : sync;
      var f = 1 - r;
      var ddF_x = 1;
      var ddF_y = -2 * r;
      var x = 0;
      var y = r;
      this.drawPixel([
        [x0, y0 + r, color],
        [x0, y0 - r, color],
        [x0 + r, y0, color],
        [x0 - r, y0, color]
      ], false);
      while (x < y) {
        if (f >= 0) {
          y--;
          ddF_y += 2;
          f += ddF_y;
        }
        x++;
        ddF_x += 2;
        f += ddF_x;
        this.drawPixel([
          [x0 + x, y0 + y, color],
          [x0 - x, y0 + y, color],
          [x0 + x, y0 - y, color],
          [x0 - x, y0 - y, color],
          [x0 + y, y0 + x, color],
          [x0 - y, y0 + x, color],
          [x0 + y, y0 - x, color],
          [x0 - y, y0 - x, color]
        ], false);
      }
      if (immed) {
        this._updateDirtyBytes(this.dirtyBytes);
      }
    };
    Oled3.prototype.startScroll = function(dir, start, stop) {
      var _this = this;
      var cmdSeq = [];
      switch (dir) {
        case "right":
          cmdSeq.push(Oled3.RIGHT_HORIZONTAL_SCROLL);
          break;
        case "left":
          cmdSeq.push(Oled3.LEFT_HORIZONTAL_SCROLL);
          break;
        case "left diagonal":
          cmdSeq.push(Oled3.SET_VERTICAL_SCROLL_AREA, 0, this.HEIGHT, Oled3.VERTICAL_AND_LEFT_HORIZONTAL_SCROLL, 0, start, 0, stop, 1, Oled3.ACTIVATE_SCROLL);
          break;
        case "right diagonal":
          cmdSeq.push(Oled3.SET_VERTICAL_SCROLL_AREA, 0, this.HEIGHT, Oled3.VERTICAL_AND_RIGHT_HORIZONTAL_SCROLL, 0, start, 0, stop, 1, Oled3.ACTIVATE_SCROLL);
          break;
      }
      this._waitUntilReady(function() {
        if (dir === "right" || dir === "left") {
          cmdSeq.push(0, start, 0, stop, 0, 255, Oled3.ACTIVATE_SCROLL);
        }
        for (var i = 0; i < cmdSeq.length; i += 1) {
          _this._transfer(TransferType.Command, cmdSeq[i]);
        }
      });
    };
    Oled3.prototype.stopScroll = function() {
      this._transfer(TransferType.Command, Oled3.DEACTIVATE_SCROLL);
    };
    Oled3.DISPLAY_OFF = 174;
    Oled3.DISPLAY_ON = 175;
    Oled3.SET_DISPLAY_CLOCK_DIV = 213;
    Oled3.SET_MULTIPLEX = 168;
    Oled3.SET_DISPLAY_OFFSET = 211;
    Oled3.SET_START_LINE = 0;
    Oled3.CHARGE_PUMP = 141;
    Oled3.EXTERNAL_VCC = false;
    Oled3.MEMORY_MODE = 32;
    Oled3.SEG_REMAP = 161;
    Oled3.COM_SCAN_DEC = 200;
    Oled3.COM_SCAN_INC = 192;
    Oled3.SET_COM_PINS = 218;
    Oled3.SET_CONTRAST = 129;
    Oled3.SET_PRECHARGE = 217;
    Oled3.SET_VCOM_DETECT = 219;
    Oled3.DISPLAY_ALL_ON_RESUME = 164;
    Oled3.NORMAL_DISPLAY = 166;
    Oled3.COLUMN_ADDR = 33;
    Oled3.PAGE_ADDR = 34;
    Oled3.INVERT_DISPLAY = 167;
    Oled3.ACTIVATE_SCROLL = 47;
    Oled3.DEACTIVATE_SCROLL = 46;
    Oled3.SET_VERTICAL_SCROLL_AREA = 163;
    Oled3.RIGHT_HORIZONTAL_SCROLL = 38;
    Oled3.LEFT_HORIZONTAL_SCROLL = 39;
    Oled3.VERTICAL_AND_RIGHT_HORIZONTAL_SCROLL = 41;
    Oled3.VERTICAL_AND_LEFT_HORIZONTAL_SCROLL = 42;
    return Oled3;
  })();
  oled.default = Oled2;
  return oled;
}
var oledExports = requireOled();
const Oled = /* @__PURE__ */ getDefaultExportFromCjs(oledExports);
var qrExports = requireQr();
const qr = /* @__PURE__ */ getDefaultExportFromCjs(qrExports);
const OLED_WIDTH = 128;
const OLED_HEIGHT = 64;
const dataToQRCodeBuffer = (data) => {
  return addQrCodeToBuffer(1, 1, data, 4);
};
class OLED extends Oled {
  constructor({
    board,
    five: five2,
    isRotated = false,
    isMirrored = false
  }) {
    super(board, five2, {
      width: 128,
      height: 64,
      address: 60,
      resetPin: null
    });
    this.previousBitmap = null;
    this.drawingIsBlocked = false;
    this.drawingBuffer = Array(OLED_WIDTH * OLED_HEIGHT).fill(null);
    this.isRotated = isRotated;
    this.isMirrored = isMirrored;
    this.clearDisplay = () => {
      this.drawBitmapOptimized(Array(OLED_WIDTH * OLED_HEIGHT).fill(0));
    };
  }
  drawString(string) {
    const buffer = addStringToBuffer(1, 1, string, 1);
    this.drawBitmapOptimized(buffer);
  }
  drawQRCodeNew(data) {
    const buffer = addQrCodeToBuffer(1, 1, data, 4);
    this.drawBitmapOptimized(buffer);
  }
  drawValue(label, value, apply = true) {
    const buffer = addTextToBuffer([
      { x: 1, y: 1, string: label, size: 1 },
      { x: 1, y: 24, string: value, size: 2 }
    ]);
    if (apply) {
      this.drawBitmapOptimized(buffer);
    }
    return buffer;
  }
  drawBitmapOptimized(bitmap) {
    if (this.previousBitmap) {
      const updatePixels = [];
      for (let i = 0; i < bitmap.length; i++) {
        if (this.previousBitmap[i] !== bitmap[i]) {
          const [col, row] = indexToCoords(i);
          updatePixels.push([col, row, bitmap[i]]);
        }
      }
      this.updatePixelsBlocking(updatePixels);
      this.previousBitmap = bitmap;
    } else {
      if (this.isRotated) {
        const drawingBitmap = rotateBitmap([...bitmap]);
        this.drawBitmap(drawingBitmap);
      } else {
        this.drawBitmap(bitmap);
      }
      this.previousBitmap = bitmap;
    }
  }
  redraw() {
    if (this.previousBitmap) {
      let drawingBitmap = [...this.previousBitmap];
      if (this.isRotated) {
        drawingBitmap = rotateBitmap(drawingBitmap);
      }
      this.drawBitmap(drawingBitmap);
    }
  }
  updatePixelsBlocking(pixels) {
    if (this.drawingIsBlocked) {
      pixels.forEach(([col, row, color]) => {
        const index = coordsToIndex(col, row);
        this.drawingBuffer[index] = color;
      });
      return;
    }
    const blockingTime = 50 + 2e3 / 8096 * pixels.length;
    this.drawingIsBlocked = true;
    setTimeout(() => {
      this.drawingIsBlocked = false;
      const pixels2 = [];
      this.drawingBuffer.forEach((color, i) => {
        if (color !== null) {
          const [col, row] = indexToCoords(i);
          pixels2.push([col, row, color]);
        }
      });
      this.drawingBuffer = Array(OLED_WIDTH * OLED_HEIGHT).fill(null);
      if (pixels2.length > 0) {
        this.updatePixelsBlocking(pixels2);
      }
    }, blockingTime);
    if (this.isRotated) {
      const drawingPixels = pixels.map((p) => {
        const [newCol, newRow] = rotateCoords(p[0], p[1]);
        return [newCol, newRow, p[2]];
      });
      this.drawPixel(drawingPixels);
    } else {
      this.drawPixel(pixels);
    }
  }
  rotate() {
    this.isRotated = !this.isRotated;
    this.redraw();
  }
  mirror() {
    this._transfer(0, Oled.SEG_REMAP);
    if (this.isMirrored) {
      this._transfer(0, Oled.COM_SCAN_DEC);
      this.isMirrored = false;
    } else {
      this._transfer(0, Oled.COM_SCAN_INC);
      this.isMirrored = true;
    }
  }
}
const getClearBuffer = () => Array(OLED_WIDTH * OLED_HEIGHT).fill(0);
const addQrCodeToBuffer = (x, y, data, margin = 2, size = 2, buffer = getClearBuffer()) => {
  const matrix2 = qr.matrix(data);
  const pixels = matrix2.flat();
  const width = Math.sqrt(pixels.length);
  for (let xi = x; xi < x + width * size + 2 * margin; xi++) {
    for (let yi = y; yi < y + width * size + 2 * margin; yi++) {
      const index = coordsToIndex(xi, yi);
      buffer[index] = 1;
    }
  }
  for (let i = 0; i < pixels.length; i++) {
    let px = Math.floor(i % width) * size;
    let py = Math.floor(i / width) * size;
    px += margin + x;
    py += margin + y;
    for (let xi = px; xi < px + size; xi++) {
      for (let yi = py; yi < py + size; yi++) {
        const index = coordsToIndex(xi, yi);
        buffer[index] = pixels[i] ? 0 : 1;
      }
    }
  }
  return buffer;
};
const addCharToBuffer = (x, y, byteArray, size, buffer = getClearBuffer()) => {
  for (let i = 0; i < byteArray.length; i += 1) {
    for (let j = 0; j < 8; j += 1) {
      const pixelState = byteArray[i][j];
      let xpos;
      let ypos;
      if (size === 1) {
        xpos = x + i;
        ypos = y + j;
        const index = coordsToIndex(xpos, ypos);
        buffer[index] = pixelState ? 1 : 0;
      } else {
        xpos = x + i * size;
        ypos = y + j * size;
        for (let xi = 0; xi < size; xi++) {
          for (let yi = 0; yi < size; yi++) {
            const index = coordsToIndex(xpos + xi, ypos + yi);
            buffer[index] = pixelState ? 1 : 0;
          }
        }
      }
    }
  }
  return buffer;
};
const findCharBuf = (c) => {
  const cBufPos = font.lookup.indexOf(c) * font.width;
  const cBuf = font.fontData.slice(
    cBufPos,
    cBufPos + font.width
  );
  return cBuf;
};
const readCharBytes = (byteArray, charHeight) => {
  let bitArr = [];
  const bitCharArr = [];
  for (let i = 0; i < byteArray.length; i += 1) {
    const byte = byteArray[i];
    for (let j = 0; j < charHeight; j += 1) {
      const bit = byte >> j & 1;
      bitArr.push(bit);
    }
    bitCharArr.push(bitArr);
    bitArr = [];
  }
  return bitCharArr;
};
const LETTER_SPACING = 2;
const LINE_SPACING = 3;
const addStringToBuffer = (x, y, string, size = 1, buffer = getClearBuffer()) => {
  const charsPerRow = Math.floor(
    (OLED_WIDTH - x) / (font.width + LETTER_SPACING) * size
  );
  const wordArr = string.split(" ");
  let acc = "";
  while (wordArr.length > 0) {
    let word = wordArr[0];
    let hasLinebreak = false;
    if (word.includes("\n")) {
      const s = word.split("\n");
      hasLinebreak = true;
      word = s.shift();
      wordArr.splice(1, 0, s.join("\n"));
    }
    const wordLength = word.length;
    let charsTillEndOfRow = charsPerRow - acc.length % charsPerRow;
    if (wordLength + 1 > charsTillEndOfRow) {
      for (let j = 0; j < charsTillEndOfRow; j++) {
        acc += " ";
      }
    } else if (acc.length % charsPerRow !== 0) {
      word = " " + word;
    }
    acc += word;
    if (hasLinebreak && (word.length === 0 || acc.length % charsPerRow !== 0)) {
      charsTillEndOfRow = charsPerRow - acc.length % charsPerRow;
      for (let j = 0; j < charsTillEndOfRow; j++) {
        acc += " ";
      }
    }
    wordArr.shift();
  }
  acc.split("").forEach((char, char_index) => {
    const charBuf = findCharBuf(char);
    const bytes = readCharBytes(charBuf, font.height);
    const lineY = Math.floor(char_index / charsPerRow);
    const charX = char_index - lineY * charsPerRow;
    const xpos = x + charX * ((font.width + LETTER_SPACING) * size);
    const ypos = y + lineY * ((font.height + LINE_SPACING) * size);
    buffer = addCharToBuffer(xpos, ypos, bytes, size, buffer);
  });
  return buffer;
};
const addTextToBuffer = (text, buffer = getClearBuffer()) => {
  text.forEach((t) => {
    buffer = addStringToBuffer(t.x, t.y, t.string, t.size, buffer);
  });
  return buffer;
};
const indexToCoords = (i) => {
  const row = Math.floor(i / OLED_WIDTH);
  const col = i - OLED_WIDTH * row;
  return [col, row];
};
const coordsToIndex = (col, row) => {
  return col + row * OLED_WIDTH;
};
const rotateCoords = (col, row) => {
  row = OLED_HEIGHT - row - 1;
  col = OLED_WIDTH - col - 1;
  return [col, row];
};
const rotateBitmap = (bitmap) => {
  return bitmap.reverse();
};
class SignalTower extends EventEmitter {
  constructor() {
    super();
    this.value = void 0;
  }
  send(message) {
    this.value = message;
    this.emit("send", this.value);
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
  send(message) {
    this.emit("send", message);
    this.integration?.ioNamespace.emit(this.messageEventName, {
      [this.format.message]: message.message,
      [this.format.value]: message.value
    });
  }
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
  start() {
    this.emit("start", this.value / 1e3);
    if (this.interval) {
      return;
    }
    this.startInterval();
  }
  stop() {
    clearInterval(this.interval);
    this.interval = void 0;
    this.emit("stop", this.value / 1e3);
  }
  reset() {
    this.startInterval();
    this.value = 0;
    this.emit("change", this.value / 1e3);
    this.emit("reset", 0);
  }
  setTo(value) {
    this.value = value * 1e3;
    this.emit("change", this.value / 1e3);
    this.emit("set", this.value / 1e3);
  }
}
const utils = {
  rgbToHex: (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  },
  hexToRgb: (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
    ] : null;
  }
};
export {
  BLOKDOTS_SOCKET_IO_SERVER_DEFAULT_PORT,
  Counter,
  Encoder,
  FigmaIntegration,
  Hapticlabs,
  InvertableSensor,
  Joystick,
  LEDStrip,
  Led,
  Metronome,
  OLED_HEIGHT,
  OLED_WIDTH,
  OLED as Oled,
  Relay,
  SignalTower,
  SocketIOIntegration,
  Stepper,
  Timer,
  addTextToBuffer,
  dataToQRCodeBuffer,
  getBlokdotsSocketIOServer,
  getBlokdotsSocketIOServerAddress,
  utils
};
