import EventEmitter from "events";

import {
  type BlokdotsSocketIOServer,
  type Integration,
  default as getBlokdotsSocketIOServer,
} from "../BlokdotsSocketIOServer";

const INTEGRATION_NAME = "figma";

type ReactionMessageBase = {
  target: string;
  timestamp: number;
};

type RotationReactionMessage = ReactionMessageBase & {
  reaction: "rotate";
  parameters: {
    value: number;
    relation: "by" | "to";
    origin: "center" | "top left";
  };
};

type TextReactionMessage = ReactionMessageBase & {
  reaction: "setText";
  parameters: {
    string: string;
  };
};

type PositionReactionMessage = ReactionMessageBase & {
  reaction: "setPosition";
  parameters: {
    x?: number;
    y?: number;
    relation: "by" | "to";
  };
};

type SizeReactionMessage = ReactionMessageBase & {
  reaction: "setSize";
  parameters: {
    width?: number;
    height?: number;
    relation: "by" | "to";
  };
};

type OpacityReactionMessage = ReactionMessageBase & {
  reaction: "setOpacity";
  parameters: {
    value: number;
  };
};

type ColorReactionMessage = ReactionMessageBase & {
  reaction: "setColor";
  parameters: {
    value: string;
  };
};

export type ReactionMessage =
  | RotationReactionMessage
  | TextReactionMessage
  | PositionReactionMessage
  | SizeReactionMessage
  | OpacityReactionMessage
  | ColorReactionMessage;

type _FigmaNode = {
  id: string;
  name: string;
  type: string;
  page: {
    id: string;
    name: string;
  };
};

interface FigmaIntegrationEvents {
  reaction: (message: ReactionMessage) => void;
}

declare interface FigmaIntegration {
  on<U extends keyof FigmaIntegrationEvents>(
    event: U,
    listener: FigmaIntegrationEvents[U]
  ): this;

  emit<U extends keyof FigmaIntegrationEvents>(
    event: U,
    ...args: Parameters<FigmaIntegrationEvents[U]>
  ): boolean;
}

/**
 * Integration that sends commands to Figma prototypes and receives interaction events from them.
 */
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

  /** Send a reaction command to the connected Figma prototype. */
  sendReaction(message: ReactionMessage) {
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
      integrationName: INTEGRATION_NAME,
    });
  }

  /** Rotate a Figma layer by or to a given angle. */
  rotate(
    parameters: { layer: string } & RotationReactionMessage["parameters"]
  ) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "rotate",
      parameters: {
        value: parameters.value,
        relation: parameters.relation,
        origin: parameters.origin,
      },
      timestamp: Date.now(),
    });
  }

  /** Set the text content of a Figma layer. */
  setText(parameters: { layer: string } & TextReactionMessage["parameters"]) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "setText",
      parameters: { string: parameters.string },
      timestamp: Date.now(),
    });
  }

  /** Move a Figma layer to or by a given x/y position. */
  setPosition(
    parameters: {
      layer: string;
    } & PositionReactionMessage["parameters"]
  ) {
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

  /** Set the opacity (0–100) of a Figma layer. */
  setOpacity(
    parameters: { layer: string } & OpacityReactionMessage["parameters"]
  ) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "setOpacity",
      parameters: { value: parameters.value / 100 },
      timestamp: Date.now(),
    });
  }

  /** Resize a Figma layer to or by a given width/height. */
  setSize(
    parameters: {
      layer: string;
    } & SizeReactionMessage["parameters"]
  ) {
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

  /** Set the fill colour of a Figma layer. */
  setColor(parameters: { layer: string } & ColorReactionMessage["parameters"]) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "setColor",
      parameters: { value: parameters.value },
      timestamp: Date.now(),
    });
  }
}

export default FigmaIntegration;
