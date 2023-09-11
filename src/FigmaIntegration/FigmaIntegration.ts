import EventEmitter from "events";
import {
  BlokdotsSocketIOServer,
  Integration,
  default as getBlokdotsSocketIOServer,
} from "../BlokdotsSocketIOServer";

const INTEGRATION_NAME = "figma";

export type ReactionMessage = {
  target: string;
  reaction:
    | "rotate"
    | "setText"
    | "setPosition"
    | "setRotation"
    | "setSize"
    | "setOpacity"
    | "setColor";
  parameters: any;
  timestamp: number;
};

class FigmaIntegration extends EventEmitter {
  server?: BlokdotsSocketIOServer;
  integration?: Integration;

  constructor() {
    super();

    this.server;
    this.integration;

    getBlokdotsSocketIOServer().then((server) => {
      this.server = server;
      this.integration = server.registerIntegration({
        integrationName: INTEGRATION_NAME,
      });
    });
  }

  sendReaction(message: ReactionMessage, shouldEmitSentReaction = true) {
    this.emit("reaction", message);

    if (!this.integration) {
      console.error("Integration not initialized");
      return;
    }

    this.integration.ioNamespace.emit("reaction", message);

    if (shouldEmitSentReaction) {
      this.emit("sentReaction", message);
    }
  }

  cleanUp() {
    this.server?.unregisterIntegration({
      integrationName: INTEGRATION_NAME,
    });
  }

  rotate(parameters: { layer: string; value: number; relation: string }) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "rotate",
      parameters: { value: parameters.value, relation: parameters.relation },
      timestamp: Date.now(),
    });
  }

  setText(parameters: { layer: string; string: string }) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "setText",
      parameters: { string: parameters.string },
      timestamp: Date.now(),
    });
  }

  setPosition(parameters: {
    layer: string;
    x: number;
    y: number;
    relation: string;
  }) {
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

  setOpacity(parameters: { layer: string; value: number }) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "setOpacity",
      parameters: { value: parameters.value / 100 },
      timestamp: Date.now(),
    });
  }

  setSize(parameters: {
    layer: string;
    width: number;
    height: number;
    relation: string;
  }) {
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

  setColor(parameters: { layer: string; value: string }) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "setColor",
      parameters: { value: parameters.value },
      timestamp: Date.now(),
    });
  }
}

export default FigmaIntegration;
