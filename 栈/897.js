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
    const stack = []
    const res = new TreeNode()
    let p = res, cur_node = root
    while (cur_node || stack.length) {
        while (cur_node) {
            stack.push(cur_node)
            cur_node = cur_node.left
        }
        cur_node = stack.pop()
        p.right = cur_node
        p = p.right
        cur_node.left = null
        cur_node = cur_node.right
    }
    return res.right
};