/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let res = 0
    const n = isConnected.length
    const visited = new Set()
    for(let i = 0;i< n;i++) {
        for(let j = i;j<n;j++) {
            if(isConnected[i][j]) {
                DFS(isConnected, i, visited)
                res++
            }
        }
    }
    return res
};


var DFS = function(isConnected, i, visited) {
    if(visited.has(i)) return 
    visited.add(i)
    const n = isConnected.length
    for(let j = 0 ; j < n; j++) {
        if(isConnected[i][j]) {
            isConnected[i][j] = 0
            DFS(isConnected, j, visited)
        }
    }
}


console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]]))
console.log(findCircleNum([[1,0,0],[0,1,0],[0,0,1]]))
console.log(findCircleNum([[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]]))