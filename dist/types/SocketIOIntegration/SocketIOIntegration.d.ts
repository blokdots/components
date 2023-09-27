/// <reference types="node" />
import { BlokdotsSocketIOServer, Integration } from "../BlokdotsSocketIOServer";
import EventEmitter from "events";
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
export default SocketIOIntegration;
