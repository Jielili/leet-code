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
var rightSideView = function(root) {
    const arr = [], queue = [root]
    while(queue.length) {
        const len = queue.length
        for(let i = 0;i< len ;i++) {
            const cur = queue.shift()
            if(i === len -1 ) {
                arr.push(cur.val)
            }
            queue.push(cur.left)
            queue.push(cur.right)
        }
    }
    return arr
};