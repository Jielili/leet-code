/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const n = grid.length - 1
    if(grid[0][0] || grid[n][n]) return -1
    const queue = [[0, 0, 1]]
    const directions = [[0,1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1,0], [-1, 1]]
    while(queue.length) {
        const [cur_x, cur_y, steps] = queue.shift()
        if(cur_x === n && cur_y===n) return steps
        for(let i = 0;i< 8;i++) {
            const [dx, dy] = directions[i]
            const x = cur_x + dx, y = cur_y + dy
            if(x>=0 && y>=0 && x<= n && y<= n && grid[x][y] === 0) {
                queue.push([x, y, steps + 1])
                grid[x][y] = 1
            }
        }
    }
    return -1
};

console.log(shortestPathBinaryMatrix([[0,1],[1,0]]))
console.log(shortestPathBinaryMatrix([[0,0,0],[1,1,0],[1,1,0]]))
console.log(shortestPathBinaryMatrix([[1,0,0],[1,1,0],[1,1,0]]))
console.log(shortestPathBinaryMatrix([[[0,0,0],[1,1,0],[1,1,1]]]))