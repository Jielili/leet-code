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
var convertBiNode = function (root) {
    let res = null
    if (root.left) {
        res = convertBiNode(root.left)
        root.left.right = root
        root.left = null
    } else {
        res = root
    }
    if (root.right) {
        root.right = convertBiNode(root.right)
    }
    return res
};