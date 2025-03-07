/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, relation, k) {
    const graph = new Array(n).fill([])
    relation.forEach(([i, j]) => {
        graph[i].push(j)
    })
    let queue = [0]
    for (let i = 0; i < k; i++) {
        const temp = []
        queue.forEach(item => {
            temp.push(...graph[item])
        })
        queue = item
    }
    return queue.filter(item => item === n - 1).length
};

