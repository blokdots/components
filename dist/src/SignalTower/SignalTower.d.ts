import { default as EventEmitter } from 'events';
declare class SignalTower extends EventEmitter {
    value?: string;
    constructor();
    send(message: string): void;
}
export default SignalTower;
