import { AnalogActor } from '../../componentBases';
/**
 * Dimmable LED component for PWM output (0-255).
 * Extends AnalogActor with LED-specific terminology.
 */
export declare class LedDimmable extends AnalogActor {
    /**
     * Set the brightness of the LED.
     * Alias for set() with LED-specific naming.
     * @param value - Brightness value between minValue and maxValue (0-255 by default)
     */
    brightness(value: number): this;
}
