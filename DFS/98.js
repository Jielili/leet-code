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
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (!root) return true
  return !!serial(root) 
};

var serial = function (root) {
  const mid = root.val 
  const res = [mid]
  if (root.left) {
    const left = serial(root.left)
    if (!left || left[left.length - 1] >= mid) return false
    res.unshift(left[0])
  }
  if (root.right) {
    const right = serial(root.right)
    if (!right || right[0] <= mid) return false
    res.push(right[right.length - 1])
  }
  return res
}

function inorderTraversal(root) {
  const result = []; // 存储遍历结果
  const stack = []; // 辅助栈
  let current = root; // 当前节点

  while (current || stack.length > 0) {
    // 将左子树全部入栈
    while (current) {
      stack.push(current);
      current = current.left;
    }

    // 弹出栈顶节点并访问
    current = stack.pop();
    result.push(current.val);

    // 转向右子树
    current = current.right;
  }

  return result;
}