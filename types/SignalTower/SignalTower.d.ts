/// <reference types="node" />
import EventEmitter from "events";
declare class SignalTower extends EventEmitter {
    value: any;
    constructor();
    send(message: any): void;
}
export default SignalTower;
