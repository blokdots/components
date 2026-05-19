/**
 * Represents a single haptic track on the Hapticlabs controller.
 *
 * Instances are created by Hapticlabs and exposed as `hapticlabs.track1` / `hapticlabs.track2`.
 * The track sends W: commands to the Arduino via the parent controller.
 */
export declare class HapticTrack {
    private readonly sendFn;
    private readonly trackNumber;
    constructor(sendFn: (cmd: string) => void, trackNumber: number);
    /** Activate the haptic track (continuous). */
    play(): void;
    /** Deactivate the haptic track. */
    stop(): void;
    /** Trigger the haptic track for a specific duration (ms), then auto-stop. */
    trigger(durationMs: number): void;
}
