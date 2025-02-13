/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */


function _Node(val, left, right, next) {
   this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
};

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  if (!root) {
    return null
  }
  let level = [root]
  while (level.length !== 0) {
    const currLevel = []
    const len = level.length
    for (let i = 0; i < len;i++) {
      const cur = level[i]
      if (i === len - 1) {
        cur.next = null
      } else {
        cur.next = level[0]
      }
      if (cur.left) {
        currLevel.push(cur.left)
        currLevel.push(cur.right)
      }
    }
    level = currLevel
  }
};

const b = new _Node(2)
const c = new _Node(3)
const a = new _Node(1, b, c)

connect(a)
console.log(a)