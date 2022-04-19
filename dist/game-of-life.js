"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameOfLife = void 0;
const lodash_1 = __importDefault(require("lodash"));
class GameOfLife {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.board = new Array(row);
        for (let i = 0; i < row; i++) {
            this.board[i] = new Array(col);
            for (let j = 0; j < col; j++) {
                this.board[i][j] = 0;
            }
        }
    }
    getBoard() {
        return this.board;
    }
    getCell(row, col) {
        return this.board[row][col];
    }
    setCell(row, col) {
        this.board[row][col] = 1;
    }
    getNeighbors(row, col) {
        let count = 0;
        for (let i = row - 1; i <= row + 1; i++) {
            for (let j = col - 1; j <= col + 1; j++) {
                if ((i === row && j === col) ||
                    i < 0 ||
                    j < 0 ||
                    i >= this.row ||
                    j >= this.row) {
                    continue;
                }
                if (this.getCell(i, j)) {
                    count++;
                }
            }
        }
        return count;
    }
    tick() {
        const tempBoard = lodash_1.default.cloneDeep(this.board);
        const tempBoard2 = lodash_1.default.cloneDeep(this.board);
        tempBoard.forEach((row, i) => {
            row.forEach((cell, j) => {
                const neighborCount = this.getNeighbors(i, j);
                if (neighborCount === 3) {
                    tempBoard2[i][j] = 1;
                }
                else if (neighborCount === 2 && this.getCell(i, j) === 1) {
                    tempBoard2[i][j] = 1;
                }
                else {
                    tempBoard2[i][j] = 0;
                }
            });
        });
        this.board = tempBoard2;
    }
}
exports.GameOfLife = GameOfLife;
//# sourceMappingURL=game-of-life.js.map