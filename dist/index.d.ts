/// <reference types="node" />
import { Namespace, Server, Socket, DisconnectReason } from 'socket.io';
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
    constructor({ slot, board, initialValue, debounce, }: {
        slot: number;
        board: Board;
        initialValue?: number;
        debounce?: number;
    });
    handleWaveform(): void;
    cleanUp(): void;
}

type ReactionMessage = {
    target: string;
    reaction: "rotate" | "setText" | "setPosition" | "setRotation" | "setSize" | "setOpacity" | "setColor";
    parameters: any;
    timestamp: number;
};
declare class FigmaIntegration extends EventEmitter {
    server?: BlokdotsSocketIOServer;
    integration?: Integration;
    constructor();
    sendReaction(message: ReactionMessage, shouldEmitSentReaction?: boolean): void;
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

declare class HapticLabs {
    value: number;
    track1: five.Pin;
    track2: five.Pin;
    constructor({ slot, board, initialValue, }: {
        slot: number;
        board: five.Board;
        initialValue?: number;
    });
}

declare class InvertableSensor extends EventEmitter {
    j5Object: five.Sensor;
    invert: boolean;
    constructor({ invert, pin, board, threshold, ...componentProps }: {
        invert?: boolean;
        threshold?: number;
        pin: string | number;
        board: five.Board;
    });
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
    constructor({ slot, board, invertX, invertY, }: {
        slot: string;
        board: five.Board;
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
    constructor({ pin, board, ledCount, }: {
        pin: number;
        board: any;
        ledCount?: number;
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
declare class OLED extends Oled {
    previousBitmap: Color[] | null;
    drawingIsBlocked: boolean;
    drawingBuffer: Array<Color | null>;
    constructor({ board, five }: {
        board: any;
        five: any;
    });
    drawString(string: string): void;
    drawQRCodeNew(data: string, apply?: boolean): Color[];
    drawValue(label: string, value: string, apply?: boolean): Color[];
    drawBitmapOptimized(bitmap: Color[]): void;
    updatePixelsBlocking(pixels: Pixel[]): void;
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
    value: any;
    constructor();
    send(message: any): void;
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
        direction: "in" | "out";
    }, shouldUpdateState?: boolean): void;
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

export { BLOKDOTS_SOCKET_IO_SERVER_DEFAULT_PORT, Counter, Encoder, FigmaIntegration, ReactionMessage as FigmaReactionMessage, HapticLabs, InvertableSensor, Joystick, LEDStrip, Metronome, OLED_HEIGHT, OLED_WIDTH, OLED as Oled, SignalTower, SocketIOIntegration, Timer, addTextToBuffer, getBlokdotsSocketIOServer, getBlokdotsSocketIOServerAddress, utils };
