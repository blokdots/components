import { DigitalActor } from "../../componentBases";

/**
 * LED component for digital output (on/off only).
 * Extends DigitalActor with LED-specific terminology.
 */
export class Led extends DigitalActor {
  /**
   * Set the brightness of the LED (0 = off, 1 = on).
   * Alias for on()/off() with LED-specific naming.
   * @param value - 0 (off) or 1 (on)
   */
  brightness(value: 0 | 1): this {
    if (value === 1) {
      return this.on();
    } else {
      return this.off();
    }
  }
}
