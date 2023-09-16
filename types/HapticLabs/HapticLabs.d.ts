import five from "johnny-five";
declare class HapticLabs {
    value: {
        track1: 1 | 0;
        track2: 1 | 0;
    };
    track1: five.Pin;
    track2: five.Pin;
    constructor({ slot, board, initialValue, }: {
        slot: number;
        board: five.Board;
        initialValue?: {
            track1: 1 | 0;
            track2: 1 | 0;
        };
    });
    playTrack1(): void;
    stopTrack1(): void;
    playTrack2(): void;
    stopTrack2(): void;
}
export default HapticLabs;
