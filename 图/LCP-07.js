/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, relation, k) {
    const graph = new Array(n).fill(0).map(() => [])
    let res = 0
    relation.forEach(([i, j]) => {
        graph[i].push(j)
    })
    const queue = [0]
    for(let i = 0; i<= k; i++) {
        const len = queue.length
        console.log(queue)
        for(let j = 0; j < len; j++) {
            const cur = queue.shift()
            graph[cur].forEach(item => {
                if(item === n - 1 && i === k) {
                    res++
                }
                queue.push(item)
            })
        }
    }
    return res
};
