declare const EventEmitter: any;
export type ReactionMessage = {
    target: string;
    reaction: "rotate" | "setText" | "setPosition" | "setRotation" | "setSize" | "setOpacity" | "setColor";
    parameters: any;
    timestamp: number;
};
declare class FigmaIntegration extends EventEmitter {
    constructor();
    sendReaction(message: ReactionMessage, shouldUpdateState?: boolean): void;
    cleanUp(): void;
    rotate(parameters: {
        layer: string;
        value: number;
        relation: string;
    }): void;
    setText(parameters: {
        layer: string;
        string: string;
    }): void;
    setPosition(parameters: {
        layer: string;
        x: number;
        y: number;
        relation: string;
    }): void;
    setOpacity(parameters: {
        layer: string;
        value: number;
    }): void;
    setSize(parameters: {
        layer: string;
        width: number;
        height: number;
        relation: string;
    }): void;
    setColor(parameters: {
        layer: string;
        value: string;
    }): void;
}
export default FigmaIntegration;