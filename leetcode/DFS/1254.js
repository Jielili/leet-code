/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    let res = 0;
    for(let i = 0; i< grid.length; i++) {
        for(let j = 0;j< grid[i].length; j++) {
            if(grid[i][j] === 0) {
                res += DFS(grid, [i, j], 1)
            }
        }
    }
    return res
};


var DFS = function(grid, cur, isCloseed) {
    const [x, y] = cur
    const m = grid.length, n = grid[0].length
    if(x < 0 || y < 0 || x >= m || y >= n || grid[x][y] === 1) {
        return isCloseed
    }
    grid[x][y] = 1
    if(x===0 || y === 0 || x === m-1 || y === n - 1) {
        isCloseed = 0
    }
    return DFS(grid, [x, y + 1], isCloseed)
    & DFS(grid, [x + 1, y], isCloseed)
    & DFS(grid, [x, y - 1], isCloseed) 
    & DFS(grid, [x - 1, y], isCloseed)
}

console.log(closedIsland([[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]))
console.log(closedIsland([[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]))
console.log(closedIsland([[1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1],
    [1,0,1,0,1,0,1],
    [1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1]]))