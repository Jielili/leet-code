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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    if(!root) return []
    const res = []
    const stack = [root]
    while (stack.length) {
        const cur_node = stack.pop()
        res.push(cur_node.val)
        cur_node.right && stack.push(cur_node.right)
        cur_node.left && stack.push(cur_node.left)
    }
    return res
};