/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @return {number[][]}
 */
var reverseSubmatrix = function(grid, x, y, k) {
    for(let i = 0; i < Math.floor(k / 2); i++){
        for(let j = y; j < y + k; j++){
            let temp = grid[x + i][j];
            grid[x + i][j] = grid[x + k - 1 - i][j];
            grid[x + k - 1 - i][j] = temp;
        }
    }
    return grid;
};