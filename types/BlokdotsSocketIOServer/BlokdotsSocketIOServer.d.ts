import { Server, Socket, Namespace, DisconnectReason } from "socket.io";
export declare const BLOKDOTS_SOCKET_IO_SERVER_DEFAULT_PORT = 8777;
export declare const getBlokdotsSocketIOServerAddress: () => string | null;
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
export interface Integration {
    id: string;
    url: string;
    connections: number;
    handlers: Array<Handler>;
    onClientConnect: Array<OnClientConnectListener>;
    onClientDisconnect: Array<OnClientDisconnectListener>;
    ioNamespace: Namespace;
    emit: (event: string, data: any) => void;
}
export declare class BlokdotsSocketIOServer {
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
export default getBlokdotsSocketIOServer;
