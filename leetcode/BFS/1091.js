/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
    const best = bfs(grid, [], 0, 0)
    return best?.length || -1
};

var bfs = function (grid, path, x, y) {
    const n = grid.length
    if (x < 0 || y < 0 || x >= n || y >= n || grid[x][y] === 1 || path.indexOf(''+x+y)>=0) {
        return false
    }

    path.push(''+x+y)

    // 如果已经到右下角，返回path
    if (x === n - 1 && y === n - 1) {
        return path
    }

    const dirs = []
    dirs.push(bfs(grid, [...path], x, y + 1))
    dirs.push(bfs(grid, [...path], x + 1, y + 1))
    dirs.push(bfs(grid, [...path], x + 1, y))
    dirs.push(bfs(grid, [...path], x + 1, y - 1))
    dirs.push(bfs(grid, [...path], x, y - 1))
    dirs.push(bfs(grid, [...path], x - 1, y - 1))
    dirs.push(bfs(grid, [...path], x - 1, y))
    dirs.push(bfs(grid, [...path], x - 1, y + 1))


    let best_path = false, best_path_steps = Number.MAX_VALUE
    for (let item of dirs) {
        if (!item) continue
        if (item.length < best_path_steps) {
            best_path = item
            best_path_steps = item.length
        }
    }

    return best_path
}


console.log(shortestPathBinaryMatrix([[0,1],[1,0]]))
console.log(shortestPathBinaryMatrix([[0,0,0],[1,1,0],[1,1,0]]))
console.log(shortestPathBinaryMatrix([[1,0,0],[1,1,0],[1,1,0]]))