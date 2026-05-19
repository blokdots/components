import EventEmitter from "events";

import {
  default as getBlokdotsSocketIOServer,
  type BlokdotsSocketIOServer,
  type Integration,
} from "../BlokdotsSocketIOServer";

/**
 * Integration that sends and receives messages over a Socket.IO connection, enabling communication with external apps and services.
 */
class SocketIOIntegration extends EventEmitter {
  integrationName: string;
  messageEventName: string;
  format: { message: string; value: string };
  server?: BlokdotsSocketIOServer;
  integration?: Integration;

  constructor(
    integrationName = "blokdots",
    messageEventName = "blokdots",
    format = { message: "msg", value: "val" }
  ) {
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
            callback: this.onMessage,
          },
        ],
      });
    });
  }

  onMessage(data: { [key: string]: any }) {
    const message = {
      message: data[this.format.message],
      value:
        data[this.format.value] === undefined ||
        data[this.format.value] === null ||
        data[this.format.value] === ""
          ? undefined
          : !isNaN(+data[this.format.value])
            ? +data[this.format.value]
            : data[this.format.value],
    };

    this.emit("received", message);
  }

  /** Send a message with an optional value to all connected Socket.IO clients. */
  send(message: { message: string; value?: any }) {
    this.emit("send", message);

    this.integration?.ioNamespace.emit(this.messageEventName, {
      [this.format.message]: message.message,
      [this.format.value]: message.value,
    });
  }

  /** Disconnect from the Socket.IO server and release all event handlers. */
  cleanUp() {
    this.server?.unregisterIntegration({
      integrationName: this.integrationName,
      handlers: [
        {
          eventName: this.messageEventName,
          callback: this.onMessage,
        },
      ],
    });
  }
}

export default SocketIOIntegration;
