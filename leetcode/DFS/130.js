/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const m = board.length, n = board[0].length
    for(let i = 0; i< m; i++) {
        for(let j = 0; j< n; j++) {
            if((i ===0 || j === 0 || i === m - 1 || j === n - 1) && board[i][j] === 'O') {
                DFS(board, [i, j])
            }
        }
    }
    board.forEach(row => {
        row.map((val, index, arr) => {
            if(val === 'O') {
                arr[index] = 'X'
            }
            if(val === '1') {
                arr[index] = 'O'
            }
        })
    })
    console.log(board)
};

var DFS = function(board, start) {
    const m = board.length, n = board[0].length
    const [x, y] = start
    if(x < 0 || y < 0 || x >= m || y >= n || board[x][y] !== 'O') { 
        return
    }
    board[x][y] = '1'
    DFS(board, [x, y + 1])
    DFS(board, [x + 1, y])
    DFS(board, [x, y - 1])
    DFS(board, [x - 1, y])
}

// console.log(solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]))
console.log(solve([["O","O","O"],["O","O","O"],["O","O","O"]]))