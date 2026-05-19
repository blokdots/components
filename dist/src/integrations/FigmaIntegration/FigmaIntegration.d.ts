import { default as EventEmitter } from 'events';
import { BlokdotsSocketIOServer, Integration } from '../BlokdotsSocketIOServer';
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
export type ReactionMessage = RotationReactionMessage | TextReactionMessage | PositionReactionMessage | SizeReactionMessage | OpacityReactionMessage | ColorReactionMessage;
interface FigmaIntegrationEvents {
    reaction: (message: ReactionMessage) => void;
}
declare interface FigmaIntegration {
    on<U extends keyof FigmaIntegrationEvents>(event: U, listener: FigmaIntegrationEvents[U]): this;
    emit<U extends keyof FigmaIntegrationEvents>(event: U, ...args: Parameters<FigmaIntegrationEvents[U]>): boolean;
}
/**
 * Integration that sends commands to Figma prototypes and receives interaction events from them.
 */
declare class FigmaIntegration extends EventEmitter {
    server?: BlokdotsSocketIOServer;
    integration?: Integration;
    constructor();
    /** Send a reaction command to the connected Figma prototype. */
    sendReaction(message: ReactionMessage): void;
    /** Disconnect from the Figma integration server and release resources. */
    cleanUp(): void;
    /** Rotate a Figma layer by or to a given angle. */
    rotate(parameters: {
        layer: string;
    } & RotationReactionMessage["parameters"]): void;
    /** Set the text content of a Figma layer. */
    setText(parameters: {
        layer: string;
    } & TextReactionMessage["parameters"]): void;
    /** Move a Figma layer to or by a given x/y position. */
    setPosition(parameters: {
        layer: string;
    } & PositionReactionMessage["parameters"]): void;
    /** Set the opacity (0–100) of a Figma layer. */
    setOpacity(parameters: {
        layer: string;
    } & OpacityReactionMessage["parameters"]): void;
    /** Resize a Figma layer to or by a given width/height. */
    setSize(parameters: {
        layer: string;
    } & SizeReactionMessage["parameters"]): void;
    /** Set the fill colour of a Figma layer. */
    setColor(parameters: {
        layer: string;
    } & ColorReactionMessage["parameters"]): void;
}
export default FigmaIntegration;
