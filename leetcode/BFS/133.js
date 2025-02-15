/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if(!node) return null
    const res = new _Node(node.val)
    const queue = [node]
    const copy_queue = [res]
    const visited = new Map()
    visited.add(node.val)
    while(queue.length) {
        const cur_node = queue.shift()
        const copy_node = copy_queue.shift()
        cur_node.neighbors.forEach(item => {
            if(!visited.has(item.val)) {
                const copy_node_neighbor = new _Node(item.val)
                copy_node.neighbors.push(copy_node_neighbor)
                queue.push(item)
                copy_queue.push(copy_node_neighbor)
                visited.set(item.val, copy_node_neighbor)
            }else {
                copy_node.neighbors.push(visited.get(item.val))
            }
        })
    }
    return res
};
