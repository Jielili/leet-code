/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let res = 0
    for(let i = 0; i< grid.length; i++) {
        for(let j = 0; j< grid[i].length; j++) {
            if(grid[i][j] === '1') {
                DFS(grid, [i,j])
                res++
            }
        }
    }
    return res
};


var DFS = function(grid, [x, y]) {
    const m = grid.length, n = grid[0].length
    if (x < 0 || y < 0 || x >= m || y >= n || grid[x][y] !== '1') {
        return
    }

    grid[x][y] = '0'

    DFS(grid, [x, y + 1])
    DFS(grid, [x + 1, y])
    DFS(grid, [x, y - 1])
    DFS(grid, [x - 1, y])
}


var DFS1 = function(grid, start) {
    const m = grid.length, n = grid[0].length
    const [start_x, start_y] = start
    const queue = [[start_x, start_y]]
    while(queue.length) {
        const [cur_x, cur_y] = queue.pop()
        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
        for(let i = 0;i< directions.length; i++) {
            const [dx, dy] = directions[i]
            const x = cur_x + dx, y = cur_y + dy
            if(x >=0 && y >=0 && x <m && y < n && grid[x][y] === '1') {
                grid[x][y] = '0'
                queue.push([x,y])
            }
        }
    }
}

var BFS = function(grid, start) {
    const m = grid.length, n = grid[0].length
    const [start_x, start_y] = start
    const queue = [[start_x, start_y]]
    while(queue.length) {
        const [cur_x, cur_y] = queue.shift()
        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
        for(let i = 0;i< directions.length; i++) {
            const [dx, dy] = directions[i]
            const x = cur_x + dx, y = cur_y + dy
            if(x >=0 && y >=0 && x <m && y < n && grid[x][y] === '1') {
                grid[x][y] = '0'
                queue.push([x,y])
            }
        }
    }
}


console.log(numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]))


console.log(numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]))