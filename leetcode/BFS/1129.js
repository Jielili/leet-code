/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
    const ans_red = new Array(n).fill(-1)
    const ans_blue = new Array(n).fill(-1)
    ans_red[0] = 0
    ans_blue[0] = 0
    const red_map = new Map()
    const blue_map = new Map()
    redEdges.forEach(([i,j]) => {
        if(red_map.has(i)) {
            red_map.get(i).push(j)
        }else{
            red_map.set(i, [j])
        }
    })
    blueEdges.forEach(([i,j]) => {
        if(blue_map.has(i)) {
            blue_map.get(i).push(j)
        }else{
            blue_map.set(i, [j])
        }
    })
    BFS(structuredClone(red_map), structuredClone(blue_map), 0, ans_red, true)
    BFS(structuredClone(red_map), structuredClone(blue_map), 0, ans_blue, false)
    for(let i = 0; i< n; i++) {
        if(ans_blue[i] === -1) {
            continue
        } else if(ans_red[i] === -1) {
            ans_red[i] = ans_blue[i]
        } else {
            ans_red[i] = Math.min(ans_red[i], ans_blue[i])
        } 
    }
    return ans_red
};

var BFS = function(red_map, blue_map, cur, ans, flag) {
    let queue = [cur]
    let steps = 0
    while(queue.length) {
        const map = flag === true ? red_map : blue_map
        const len = queue.length
        steps++
        flag = !flag
        for(let i = 0; i< len; i++) {
            const next_nodes = map.get(queue.shift()) || []
            const next_nodes_len = next_nodes.length
            for(let i = 0; i< next_nodes_len; i++) {
                // const item = next_nodes[i]
                // if(ans[item] !== -1) continue
                // ans[item] = steps
                const item = next_nodes.shift()
                if(ans[item] === -1) ans[item] = steps
                ans[item] = Math.min(ans[item], steps)
                queue.push(item)
            }
        }
    }
}

console.log(shortestAlternatingPaths(3, [[0,1],[1,2]], []))
console.log(shortestAlternatingPaths(3, [[0,1]], [[2,1]]))
console.log(shortestAlternatingPaths(5, [[0,1],[1,2],[2,3],[3,4]], [[1,2],[2,3],[3,1]]))
console.log(shortestAlternatingPaths(3, [[0,1],[0,2]], [[1,0]]))
console.log(shortestAlternatingPaths(5, [[3,2],[4,1],[1,4],[2,4]], [[2,3],[0,4],[4,3],[4,4],[4,0],[1,0]]))