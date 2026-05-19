import { default as EventEmitter } from 'events';
export interface SignalTowerEventMap {
    send: (message: string) => void;
}
/**
 * Signal Tower is a software abstraction for broadcasting and receiving named events within a project.
 * Use it to send a message from one part of your project and react to it from another.
 */
declare class SignalTower extends EventEmitter {
    value?: string;
    constructor();
    /** Broadcast a message to any listeners on this Signal Tower. */
    send(message: string): void;
}
export default SignalTower;
