import five from "johnny-five";
declare class HapticLabs {
    value: {
        pin1: 1 | 0;
        pin2: 1 | 0;
    };
    pin1: five.Pin;
    pin2: five.Pin;
    constructor({ slot, board, initialValue, }: {
        slot: number;
        board: five.Board;
        initialValue?: {
            pin1: 1 | 0;
            pin2: 1 | 0;
        };
    });
    playTrack1(): void;
    stopTrack1(): void;
    playTrack2(): void;
    stopTrack2(): void;
}
export default HapticLabs;
