/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    if(!root) return []
    const stack = [root]
    const res = []
    while (stack.length) {
        let cur_node = stack[stack.length - 1]
        while (cur_node.children.length) {
            stack.push(cur_node.children[0])
            cur_node = cur_node.children[0]
        }
        let prev = cur_node
        while (stack.length) {
            cur_node = stack[stack.length - 1]
            const index = cur_node.children.indexOf(prev)
            if (cur_node.children.length === 0 || cur_node.children.length === index + 1) {
                prev = cur_node
                res.push(stack.pop().val)
            } else {
                break
            }
        }
        if (stack.length && cur_node) {
            const index = cur_node.children.indexOf(prev)
            stack.push(cur_node.children[index + 1])
        }
    }
    return res
};

var postorder = function(root) {
    if(!root) return []
    const res = []
    for (let i = 0; i < root.children.length; i++) {
        res.push(...postorder(root.children[i]))
    }
    res.push(root.val)
    return res
};