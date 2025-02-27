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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    const stack = [root]
    const res = new TreeNode()
    let p = res
    while (stack.length) {
        let cur_node = stack[stack.length - 1]
        while (cur_node.left) {
            stack.push(cur_node.left)
            cur_node = cur_node.left
        }
        while (cur_node) {
            stack.pop()
            p.right = cur_node
            p = p.right
            cur_node.left = null
            if (cur_node.right) {
                stack.push(cur_node.right)
                break;
            }
            cur_node = stack[stack.length - 1]
        }
    }
    return res.right
};