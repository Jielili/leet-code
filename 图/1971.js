/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const graph = new Array(n).fill(0).map(() => [])
    edges.forEach(([i, j]) => {
        graph[i].push(j)
        graph[j].push(i)
    })
    const stack = [source]
    const visited = new Set()
    while(stack.length) {
        let cur = stack.pop()
        if(cur === destination) {
            return true
        }
        if(visited.has(cur)) {
            continue
        }
        visited.add(cur)
        const vertices = graph[cur]
        vertices.forEach((item) => {
            stack.push(item)
        })
    }
    return false
};