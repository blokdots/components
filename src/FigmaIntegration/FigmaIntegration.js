import { default as getBlokdotsSocketIOServer } from "../BlokdotsSocketIOServer";

const EventEmitter = require("events");

const INTEGRATION_NAME = "figma";

class FigmaIntegration extends EventEmitter {
  constructor() {
    super();

    this.server = null;
    this.integration = null;

    getBlokdotsSocketIOServer().then((server) => {
      this.server = server;
      this.integration = server.registerIntegration({
        integrationName: INTEGRATION_NAME,
      });
    });
  }

  sendReaction(message, shouldUpdateState = true) {
    this.emit("reaction", message);

    this.integration.ioNamespace.emit("reaction", message);

    if (shouldUpdateState) {
      this.emit("updateState", message);
    }
  }

  cleanUp() {
    this.server.unregisterIntegration({
      integrationName: INTEGRATION_NAME,
    });
  }

  rotate(parameters) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "rotate",
      parameters: { value: parameters.value, relation: parameters.relation },
      timestamp: Date.now(),
    });
  }

  setText(parameters) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "setText",
      parameters: { string: parameters.string },
      timestamp: Date.now(),
    });
  }

  setPosition(parameters) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "setPosition",
      parameters: {
        x: parameters.x,
        y: parameters.y,
        relation: parameters.relation,
      },
      timestamp: Date.now(),
    });
  }

  setOpacity(parameters) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "setOpacity",
      parameters: { value: parseFloat(parameters.value) / 100 },
      timestamp: Date.now(),
    });
  }

  setSize(parameters) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "setSize",
      parameters: {
        width: parameters.width,
        height: parameters.height,
        relation: parameters.relation,
      },
      timestamp: Date.now(),
    });
  }

  setColor(parameters) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "setColor",
      parameters: { value: parameters.value },
      timestamp: Date.now(),
    });
  }
}

export default FigmaIntegration;
