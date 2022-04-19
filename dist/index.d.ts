export declare class GameOfLife {
    row: number;
    col: number;
    board: number[][];
    constructor(row: number, col: number);
    getBoard(): number[][];
    getCell(row: number, col: number): number;
    setCell(row: number, col: number): void;
    getNeighbors(row: number, col: number): number;
    tick(): void;
}
//# sourceMappingURL=index.d.ts.map