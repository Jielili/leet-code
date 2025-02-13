
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric1= function (root) {
    const queue = [root]
    while (queue.length) {
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const cur_node = queue.shift()
            cur_node && queue.push(cur_node.left)
            cur_node && queue.push(cur_node.right)
        }
        const curLen = queue.length
        for (let i = 0, j = curLen - 1; i <= curLen << 1; i++, j--){
            if (queue[i] && !queue[j]) return false
            if (!queue[i] && queue[j]) return false
            if (queue[i]?.val !== queue[j]?.val) return false
        }
    }
    return true
};

var isSymmetric2 = function (root) {
    const leftArr = [root.left]
    const rightArr = [root.right]
    while (leftArr.length || rightArr.length) {
        if (leftArr.length !== rightArr.length) {
            return false
        }
        const len = leftArr.length
        for (let i = 0; i < len; i++) {
            const left_node = leftArr.shift()
            const right_node = rightArr.pop()
            if (!left_node && !right_node) continue
            if (!left_node && right_node) return false
            if (left_node && !right_node) return false
            if (left_node.val !== right_node.val) return false
            leftArr.push(left_node.left)
            leftArr.push(left_node.right)
            rightArr.push(right_node.right)
            rightArr.push(right_node.left)
        }
    }
    return true
}

var isSymmetric = function (root) {
    if (!root) return true
    return check(root.left, root.right)
}

var check = function (left, right) {
    if (!left && !right) return true
    if (!left || !right) return false
    if (left.val !== right.val) return false
    return check(left.left, right.right) && check(left.right, right.left)
}



const a = new TreeNode(2)
const b = new TreeNode(2)
const c = new TreeNode(1, a, b)

console.log(isSymmetric(c))


