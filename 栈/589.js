/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
    if(!root) return []
    const stack = [root]
    const res = []
    while (stack.length) {
        const cur_node = stack.pop()
        res.push(cur_node.val)
        const len = cur_node.children
        for (let i = len - 1; i >= 0; i++) {
            stack.push(cur_node.children[i])
        }
    }
    return res
};