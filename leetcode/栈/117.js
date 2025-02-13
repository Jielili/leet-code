/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
    if (!root) {
        return null
    }
    const queue = [root]
    while (queue.length) {
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const cur = queue.shift()
            if (i !== len - 1) {
                cur.next = queue[0]
            } else {
                cur.next = null
            }
            cur.left && queue.push(cur.left)
            cur.right && queue.push(cur.right)
        }
    }
    return root
};