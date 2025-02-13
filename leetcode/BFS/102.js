/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder1 = function (root) {
    if (!root) return []
    const queue = [root]
    const res = []
    while (queue.length) {
        const len = queue.length
        const vals = []
        for (let i = 0; i < len; i++) {
            const cur_node = queue.shift()
            vals.push(cur_node.val)
            cur_node.left && queue.push(cur_node.left)
            cur_node.right && queue.push(cur_node.right)
        }
        res.push(vals)
    }
    return res
};

var levelOrder = function (root) {
    if (!root) return []
    const res = []
    var traverse = function (root, i) {
        if (i >= res.length) {
            res.push([])
        }
        res[i].push(root.val)
        root.left && traverse(root.left, i + 1)
        root.right && traverse(root.right, i+1)
    }
    traverse(root, 0)
    return res
};

