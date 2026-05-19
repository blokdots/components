/**
 * Represents a single haptic track on the Hapticlabs controller.
 *
 * Instances are created by Hapticlabs and exposed as `hapticlabs.track1` / `hapticlabs.track2`.
 * The track sends W: commands to the Arduino via the parent controller.
 */
export class HapticTrack {
  private readonly sendFn: (cmd: string) => void;
  private readonly trackNumber: number;

  constructor(sendFn: (cmd: string) => void, trackNumber: number) {
    this.sendFn = sendFn;
    this.trackNumber = trackNumber;
  }

  /** Activate the haptic track (continuous). */
  play(): void {
    this.sendFn(`PLAY${this.trackNumber}`);
  }

  /** Deactivate the haptic track. */
  stop(): void {
    this.sendFn(`STOP${this.trackNumber}`);
  }

  /** Trigger the haptic track for a specific duration (ms), then auto-stop. */
  trigger(durationMs: number): void {
    this.sendFn(
      `TRIGGER${this.trackNumber}:${Math.round(Math.max(1, durationMs))}`
    );
  }
}
