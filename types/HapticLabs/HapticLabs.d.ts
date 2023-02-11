import five from "johnny-five";
declare class HapticLabs {
    value: number;
    track1: five.Pin;
    track2: five.Pin;
    constructor({ slot, board, initialValue, }: {
        slot: number;
        board: five.Board;
        initialValue?: number;
    });
}
export default HapticLabs;
