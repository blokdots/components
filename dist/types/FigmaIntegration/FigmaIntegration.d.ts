/// <reference types="node" />
import EventEmitter from "events";
import { BlokdotsSocketIOServer, Integration } from "../BlokdotsSocketIOServer";
type ReactionMessageBase = {
    target: string;
    timestamp: number;
};
type RotationReactionMessage = ReactionMessageBase & {
    reaction: "rotate";
    parameters: {
        value: number;
        relation: "by" | "to";
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
        x: number;
        y: number;
        relation: "by" | "to";
    };
};
type SizeReactionMessage = ReactionMessageBase & {
    reaction: "setSize";
    parameters: {
        width: number;
        height: number;
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
declare class FigmaIntegration extends EventEmitter {
    server?: BlokdotsSocketIOServer;
    integration?: Integration;
    constructor();
    sendReaction(message: ReactionMessage): void;
    cleanUp(): void;
    rotate(parameters: {
        layer: string;
    } & RotationReactionMessage["parameters"]): void;
    setText(parameters: {
        layer: string;
    } & TextReactionMessage["parameters"]): void;
    setPosition(parameters: {
        layer: string;
    } & PositionReactionMessage["parameters"]): void;
    setOpacity(parameters: {
        layer: string;
    } & OpacityReactionMessage["parameters"]): void;
    setSize(parameters: {
        layer: string;
    } & SizeReactionMessage["parameters"]): void;
    setColor(parameters: {
        layer: string;
    } & ColorReactionMessage["parameters"]): void;
}
export default FigmaIntegration;
