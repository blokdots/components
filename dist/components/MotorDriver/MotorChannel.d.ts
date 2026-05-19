export type MotorChannelId = "M1" | "M2";
/**
 * Represents a single DC motor channel on the Grove I2C Motor Driver.
 *
 * Instances are created by MotorDriver and exposed as `driver.M1` / `driver.M2`.
 * The channel sends W: commands to the Arduino via the parent driver.
 */
export declare class MotorChannel {
    private readonly sendFn;
    private readonly channel;
    constructor(sendFn: (cmd: string) => void, channel: MotorChannelId);
    /**
     * Run the motor at the given signed speed.
     * @param speed -255 (full reverse) to 255 (full forward). 0 = stop.
     */
    run(speed: number): void;
    /**
     * Stop the motor (equivalent to `run(0)`).
     */
    stop(): void;
}
