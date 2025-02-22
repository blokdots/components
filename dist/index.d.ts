import { Server, DisconnectReason, Namespace, Socket } from 'socket.io';
import EventEmitter from 'events';
import five, { Board } from 'johnny-five';
import pixel from 'node-pixel';
import Oled, { Color, Pixel } from 'oled-js';

declare const BLOKDOTS_SOCKET_IO_SERVER_DEFAULT_PORT = 8777;
declare const getBlokdotsSocketIOServerAddress: () => string | null;
type OnClientConnectListener = ({ integration, connections, }: {
    integration: string;
    connections: number;
}) => void;
type OnClientDisconnectListener = ({ integration, connections, reason, }: {
    integration: string;
    connections: number;
    reason: DisconnectReason;
}) => void;
type Handler = {
    eventName: string;
    callback: (...args: any[]) => void;
};
interface Integration {
    id: string;
    url: string;
    connections: number;
    handlers: Array<Handler>;
    onClientConnect: Array<OnClientConnectListener>;
    onClientDisconnect: Array<OnClientDisconnectListener>;
    ioNamespace: Namespace;
    emit: (event: string, data: any) => void;
}
declare class BlokdotsSocketIOServer {
    io: Server | null;
    activeIntegrations: {
        [key: string]: Integration;
    };
    constructor();
    init(): Promise<unknown>;
    start(): void;
    emitInfo(socket?: Socket): void;
    stop(callback: () => void): void;
    registerIntegration({ integrationName, handlers, onClientConnect, onClientDisconnect, }: {
        integrationName: string;
        handlers?: Array<Handler>;
        onClientConnect?: OnClientConnectListener;
        onClientDisconnect?: OnClientDisconnectListener;
    }): Integration | undefined;
    unregisterIntegration({ integrationName, handlers, onClientConnect, onClientDisconnect, }: {
        integrationName: string;
        handlers?: Array<Handler>;
        onClientConnect?: OnClientConnectListener;
        onClientDisconnect?: OnClientConnectListener;
    }): void;
}
declare const getBlokdotsSocketIOServer: () => Promise<BlokdotsSocketIOServer>;

declare class Counter extends EventEmitter {
    value: number;
    constructor(initialValue?: number);
    countUp(): void;
    countDown(): void;
    setCountTo(value: number): void;
}

declare class Encoder extends EventEmitter {
    value: number;
    waveform: string;
    waveformTimeout?: NodeJS.Timeout;
    upButton: five.Button;
    downButton: five.Button;
    constructor({ pin1, pin2, board, initialValue, debounce, }: {
        pin1: number | string;
        pin2: number | string;
        board?: Board;
        initialValue?: number;
        debounce?: number;
    });
    countUp(): void;
    countDown(): void;
    setCountTo(value: number): void;
    handleWaveform(): void;
    cleanUp(): void;
}

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
type ReactionMessage = RotationReactionMessage | TextReactionMessage | PositionReactionMessage | SizeReactionMessage | OpacityReactionMessage | ColorReactionMessage;
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

declare class Hapticlabs {
    value: {
        pin1: 1 | 0;
        pin2: 1 | 0;
    };
    pin1: five.Pin;
    pin2: five.Pin;
    constructor({ pin1, pin2, board, initialValue, }: {
        pin1: number;
        pin2: number;
        board?: five.Board;
        initialValue?: {
            pin1: 1 | 0;
            pin2: 1 | 0;
        };
    });
    playTrack1(): void;
    stopTrack1(): void;
    playTrack2(): void;
    stopTrack2(): void;
}

declare class InvertableSensor extends EventEmitter {
    j5Object: five.Sensor;
    invert: boolean;
    constructor({ invert, board, ...sensorOptions }: {
        invert?: boolean;
        board: five.Board;
    } & five.SensorOption);
    transformValue: (value: number) => number;
    cleanUp(): void;
}

type JoystickValue = {
    x: number;
    y: number;
    pressed: boolean;
};
declare class Joystick extends EventEmitter {
    j5Object: five.Joystick;
    invertX: boolean;
    invertY: boolean;
    previousX?: number;
    constructor({ pin1, pin2, board, invertX, invertY, }: {
        pin1: `A${number}`;
        pin2: `A${number}`;
        board?: five.Board;
        invertX?: boolean;
        invertY?: boolean;
    });
    transformValue: (value: {
        x: number;
        y: number;
    }) => JoystickValue;
    cleanUp(): void;
}

declare class LEDStrip extends pixel.Strip {
    constructor({ pin, board, ledCount, gamma, colorOrder, }: {
        pin: number;
        board: five.Board;
        ledCount?: number;
        gamma?: number;
        colorOrder?: "GRB" | "RGB" | "BRG";
    });
}

declare class Metronome extends EventEmitter {
    frequency: number;
    interval?: NodeJS.Timeout;
    constructor(frequency?: number);
    start(): void;
    stop(): void;
    setFrequency(frequency: number): void;
}

declare const OLED_WIDTH = 128;
declare const OLED_HEIGHT = 64;
declare const dataToQRCodeBuffer: (data: string) => Color[];
declare class OLED extends Oled {
    previousBitmap: Color[] | null;
    drawingIsBlocked: boolean;
    drawingBuffer: Array<Color | null>;
    isRotated: boolean;
    isMirrored: boolean;
    constructor({ board, five, isRotated, isMirrored, }: {
        board: five.Board;
        five: any;
        isRotated?: boolean;
        isMirrored?: boolean;
    });
    drawString(string: string): void;
    drawQRCodeNew(data: string): void;
    drawValue(label: string, value: string, apply?: boolean): Color[];
    drawBitmapOptimized(bitmap: Color[]): void;
    redraw(): void;
    updatePixelsBlocking(pixels: Pixel[]): void;
    rotate(): void;
    mirror(): void;
}
/**
 * Adds the text to the buffer given, if none is given a clear one is created
 */
declare const addTextToBuffer: (text: {
    x: number;
    y: number;
    size: number;
    string: string;
}[], buffer?: Color[]) => Color[];

declare class SignalTower extends EventEmitter {
    value?: string;
    constructor();
    send(message: string): void;
}

declare class SocketIOIntegration extends EventEmitter {
    integrationName: string;
    messageEventName: string;
    format: {
        message: string;
        value: string;
    };
    server?: BlokdotsSocketIOServer;
    integration?: Integration;
    constructor(integrationName?: string, messageEventName?: string, format?: {
        message: string;
        value: string;
    });
    onMessage(data: {
        [key: string]: any;
    }): void;
    send(message: {
        message: string;
        value?: any;
    }): void;
    cleanUp(): void;
}

declare class Timer extends EventEmitter {
    value: number;
    interval?: NodeJS.Timeout;
    constructor(value?: number);
    startInterval(): void;
    start(): void;
    stop(): void;
    reset(): void;
    setTo(value: number): void;
}

declare const utils: {
    rgbToHex: (r: number, g: number, b: number) => string;
    hexToRgb: (hex: string) => [number, number, number] | null;
};

export { BLOKDOTS_SOCKET_IO_SERVER_DEFAULT_PORT, Counter, Encoder, FigmaIntegration, type ReactionMessage as FigmaReactionMessage, Hapticlabs, InvertableSensor, Joystick, LEDStrip, Metronome, OLED_HEIGHT, OLED_WIDTH, OLED as Oled, SignalTower, SocketIOIntegration, Timer, addTextToBuffer, dataToQRCodeBuffer, getBlokdotsSocketIOServer, getBlokdotsSocketIOServerAddress, utils };
