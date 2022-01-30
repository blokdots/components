import { default as getBlokdotsSocketIOServer } from "../BlokdotsSocketIOServer";

const EventEmitter = require("events");

class SocketIOIntegration extends EventEmitter {
  constructor(
    integrationName = "blokdots",
    messageEventName = "blokdots",
    format = { message: "msg", value: "val" }
  ) {
    super();

    this.integrationName = integrationName;
    this.messageEventName = messageEventName;
    this.format = format;

    this.server = null;
    this.integration = null;

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

  onMessage(data) {
    const message = {
      message: data[this.format.message],
      value: data[this.format.value],
      direction: "in",
    };

    this.emit("received", message);
    this.emit("updateState", message);
  }

  send(message, shouldUpdateState = true) {
    if (!message.direction) message.direction = "out";

    this.emit("send", message);

    this.integration.ioNamespace.emit(this.messageEventName, {
      [this.format.message]: message.message,
      [this.format.value]: message.value,
    });

    if (shouldUpdateState) {
      this.emit("updateState", message);
    }
  }

  cleanUp() {
    this.server.unregisterIntegration({
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
