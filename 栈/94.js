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
var inorderTraversal = function(root) {
    const res = []
    let cur_node = root
    const stack = [cur_node]
    while (stack.length) {
        while (cur_node.left) {
            stack.push(cur_node.left)
            cur_node = cur_node.left
        }
        res.push(stack.pop())
        if (cur_node.right) {
            stack.push(cur_node.right)
        }
    }
    return res
};