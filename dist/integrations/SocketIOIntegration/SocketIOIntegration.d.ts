import { default as EventEmitter } from 'events';
import { BlokdotsSocketIOServer, Integration } from '../BlokdotsSocketIOServer';
/**
 * Integration that sends and receives messages over a Socket.IO connection, enabling communication with external apps and services.
 */
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
    /** Send a message with an optional value to all connected Socket.IO clients. */
    send(message: {
        message: string;
        value?: any;
    }): void;
    /** Disconnect from the Socket.IO server and release all event handlers. */
    cleanUp(): void;
}
export default SocketIOIntegration;
