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
    if(!root) return []
    const res = []
    const stack = [root]
    while (stack.length) {
        let cur_node = stack[stack.length - 1]
        while (cur_node.left) {
            stack.push(cur_node.left)
            cur_node = cur_node.left
        }
        while (cur_node) {
            res.push(stack.pop().val)
            if(cur_node.right) {
                stack.push(cur_node.right)
                break;
            }
            cur_node = stack[stack.length - 1]
        }
    }
    return res
};