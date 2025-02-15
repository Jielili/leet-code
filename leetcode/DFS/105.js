/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length) {
        return null
    }
    const root_value = preorder.shift()
    const left_tree_preorder = []
    const left_tree_inorder = []
    while(inorder.length) {
        if(inorder[0] === root_value) {
            inorder.shift()
            break
        }
        left_tree_preorder.push(preorder.shift())
        left_tree_inorder.push(inorder.shift())
    }
    const left_tree = buildTree(left_tree_preorder, left_tree_inorder)
    const right_tree = buildTree(preorder, inorder)
    return new TreeNode(root_value, left_tree, right_tree)
};

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]))

 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
