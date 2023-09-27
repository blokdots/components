import {
  default as getBlokdotsSocketIOServer,
  BlokdotsSocketIOServer,
  Integration,
} from "../BlokdotsSocketIOServer";

import EventEmitter from "events";

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
      value: data[this.format.value],
    };

    this.emit("received", message);
  }

  send(
    message: { message: string; value?: any; },
  ) {
    this.emit("send", message);

    this.integration?.emit(this.messageEventName, {
      [this.format.message]: message.message,
      [this.format.value]: message.value,
    });
  }

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
