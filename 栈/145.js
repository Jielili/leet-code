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
// var postorderTraversal = function (root) {
//     if(!root) return []
//     return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val]
// };

var postorderTraversal = function (root) {
    if (!root) return []
    const res = [], stack = [root]
    while (stack.length) {
        let cur_node = stack[stack.length - 1]
        while (cur_node.left) {
            stack.push(cur_node.left)
            cur_node = cur_node.left
        }
        let prev = cur_node
        while (stack.length > 0 && (!cur_node.right || prev === cur_node.right)) {
            res.push(stack.pop().val)
            prev = cur_node
            cur_node = stack[stack.length - 1]
        }
        if (cur_node && cur_node.right) {
            stack.push(cur_node.right)
        }
    }
    return res
};