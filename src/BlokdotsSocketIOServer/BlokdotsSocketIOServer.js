import { Server } from "socket.io";
import WebSocket from "ws";
import { networkInterfaces } from "os";

import setupHttpServer from "./setupHttpServer";

export const BLOKDOTS_SOCKET_IO_SERVER_DEFAULT_PORT = 8777;

export const getBlokdotsSocketIOServerAddress = () => {
  const currentIP = Object.values(networkInterfaces())
    .flat()
    .find((i) => i.family === "IPv4" && !i.internal).address;

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
      resolve();
    });
  }

  start() {
    const httpServer = setupHttpServer();

    this.io = new Server(httpServer, {
      wsEngine: WebSocket.Server,
      pingInterval: 5000,
      pingTimeout: 5000,
      allowEIO3: true, // support older websocket clients
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });

    httpServer.listen(BLOKDOTS_SOCKET_IO_SERVER_DEFAULT_PORT, "0.0.0.0");

    // Sockets can connect to the general namespace to get updates about
    // all available integrations
    this.io.on("connection", (socket) => {
      // Updates are emitted whenever something about an integration changes,
      // but they can also be explicitely requested
      socket.on("requestInfo", () => {
        this.emitInfo(socket);
      });

      this.emitInfo(socket);
    });
  }

  emitInfo(socket) {
    // If no specific socket requested it, we send it to all
    // sockets in the general namespace
    if (!socket) socket = this.io.sockets;

    socket.emit("info", {
      url: getBlokdotsSocketIOServerAddress(),
      integrations: Object.values(this.activeIntegrations).map((i) => ({
        id: i.id,
        url: i.url,
        connections: i.ioNamespace.sockets.size,
      })),
    });
  }

  stop(callback) {
    this.io.closeServer(callback);
  }

  registerIntegration({
    integrationName,
    handlers = [],
    onClientConnect,
    onClientDisconnect,
  }) {
    let integration = this.activeIntegrations[integrationName];

    // The namespace already exists
    if (integration) {
      // Add the new handlers to the list of handlers to register for new connections
      integration.handlers = integration.handlers.concat(handlers);
      onClientConnect && integration.onClientConnect.push(onClientConnect);
      onClientDisconnect &&
        integration.onClientDisconnect.push(onClientDisconnect);

      // Register the new handlers on the already existing connections
      for (let [, socket] of integration.ioNamespace.sockets) {
        handlers.forEach(({ eventName, callback }) => {
          socket.on(eventName, callback);
        });
      }
    } else {
      // Initialize the namespace for the first time
      this.activeIntegrations[integrationName] = {
        id: integrationName,
        url: `${getBlokdotsSocketIOServerAddress()}/${integrationName}`,
        handlers: [...handlers],
        ioNamespace: this.io.of("/" + integrationName),
        onClientConnect: onClientConnect ? [onClientConnect] : [],
        onClientDisconnect: onClientDisconnect ? [onClientDisconnect] : [],
      };

      integration = this.activeIntegrations[integrationName];

      // When a new socket connects to this namespace
      integration.ioNamespace.on("connection", (socket) => {
        // console.info("🕹 Client connected to", integrationName);

        // We register all existing handlers to this new socket
        integration.handlers.forEach(({ eventName, callback }) => {
          socket.on(eventName, callback);
        });

        // We emit a message to all other sockets …
        integration.ioNamespace.emit("client-connect", {
          integration: integrationName,
          connections: integration.ioNamespace.sockets.size,
        });

        // … as well as to the integration registerers
        integration.onClientConnect.forEach((h) => {
          h({
            integration: integrationName,
            connections: integration.ioNamespace.sockets.size,
          });
        });

        this.emitInfo();

        socket.on("disconnect", (reason) => {
          // We emit a message to all other sockets …
          integration.ioNamespace.emit("client-disconnect", {
            reason: reason,
            integration: integrationName,
            connections: integration.ioNamespace.sockets.size,
          });

          // … as well as to the integration registerers
          integration.onClientDisconnect.forEach((h) => {
            h({
              reason: reason,
              integration: integrationName,
              connections: integration.ioNamespace.sockets.size,
            });
          });

          this.emitInfo();
        });
      });

      this.emitInfo();
    }

    return {
      ...integration,
      connections: integration.ioNamespace.sockets.size,
    };
  }

  unregisterIntegration({
    integrationName,
    handlers = [],
    onClientConnect,
    onClientDisconnect,
  }) {
    let integration = this.activeIntegrations[integrationName];

    if (!integration) {
      return;
    }

    // Remove the handlers from the list of handlers to register for new connections
    integration.handlers = integration.handlers.filter((h) =>
      handlers.some(
        (hU) => hU.eventName === h.eventName && hU.callback === h.callback
      )
    );

    integration.onClientConnect = integration.onClientConnect.filter(
      (h) => h !== onClientConnect
    );
    integration.onClientDisconnect = integration.onClientDisconnect.filter(
      (h) => h !== onClientDisconnect
    );

    // Remove the handlers from the existing connections
    for (let [, socket] of integration.ioNamespace.sockets) {
      handlers.forEach(({ eventName, callback }) => {
        socket.off(eventName, callback);
      });
    }

    // Nobody is listening anymore, remove the integration
    if (integration.handlers.length === 0) {
      integration.ioNamespace.disconnectSockets();
      delete this.activeIntegrations[integrationName];

      this.emitInfo();
    }
  }
}

let blokdotsSocketIOServer = null;

const getBlokdotsSocketIOServer = async () => {
  return new Promise((resolve) => {
    // If the server hasn’t been setup yet, do that, then resolve the promise
    if (blokdotsSocketIOServer === null) {
      blokdotsSocketIOServer = new BlokdotsSocketIOServer();
      blokdotsSocketIOServer.init().then(() => {
        resolve(blokdotsSocketIOServer);
      });
    } else {
      // Else resolve the promise with the existing server immediately
      resolve(blokdotsSocketIOServer);
    }
  });
};

export default getBlokdotsSocketIOServer;
