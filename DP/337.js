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
 * @return {number}
 */
var rob = function(root) {
    // 1 2 4 8 16
    const visited = new Map()
    return dp(root, visited)
};

var dp = function (root, visited) {
    
    if (!root) {
        return 0
    }

    if (visited.has(root)) {
        return visited.get(root)
    }

    let res = root.val
    // if we pick root
    res += root.left ? (dp(root.left.left, visited) + dp(root.left.right, visited)) : 0
    res += root.right ? (dp(root.right.left, visited) + dp(root.right.right, visited)) : 0 

    // if we don't pick root
    res = Math.max(res, dp(root.left, visited) + dp(root.right, visited))

    visited.set(root, res)
    return res
}