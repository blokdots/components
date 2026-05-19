import { ComponentBase, ComponentBaseOptions } from '../../componentBases';
import { HapticTrack } from './HapticTrack';
export interface HapticlabsOptions extends ComponentBaseOptions {
    pin1: number;
    pin2: number;
}
export interface HapticlabsEventMap {
    change: (value: HapticlabsValue) => void;
    [event: string]: (...args: any[]) => void;
}
export interface HapticlabsValue {
    pin1: number;
    pin2: number;
}
/**
 * Hapticlabs dual-channel haptic feedback controller.
 * Controls two digital output pins for haptic actuators.
 *
 * Usage:
 *   hapticlabs.track1.play()         → activate track 1 continuously
 *   hapticlabs.track1.stop()         → deactivate track 1
 *   hapticlabs.track1.trigger(500)   → trigger track 1 for 500ms then auto-stop
 *   hapticlabs.track2.play()         → activate track 2 continuously
 *   hapticlabs.stopAll()             → deactivate both tracks
 *
 * Protocol commands:
 *   W:D5:PLAY1          → activate track 1
 *   W:D5:STOP1          → deactivate track 1
 *   W:D5:TRIGGER1:500   → trigger track 1 for 500ms then auto-stop
 *   W:D5:PLAY2          → activate track 2
 *   W:D5:STOP2          → deactivate track 2
 *   W:D5:TRIGGER2:500   → trigger track 2 for 500ms then auto-stop
 *   W:D5:STOPALL        → deactivate both tracks
 */
export declare class Hapticlabs extends ComponentBase<HapticlabsValue, HapticlabsEventMap> {
    readonly track1: HapticTrack;
    readonly track2: HapticTrack;
    constructor(options: HapticlabsOptions);
    handleData(_data: unknown): void;
    private send;
    stopAll(): void;
    cleanup(): void;
}
