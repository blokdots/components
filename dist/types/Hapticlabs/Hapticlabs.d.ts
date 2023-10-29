import five from "johnny-five";
declare class Hapticlabs {
    value: {
        pin1: 1 | 0;
        pin2: 1 | 0;
    };
    pin1: five.Pin;
    pin2: five.Pin;
    constructor({ pin1, pin2, board, initialValue, }: {
        pin1: number;
        pin2: number;
        board?: five.Board;
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
export default Hapticlabs;
