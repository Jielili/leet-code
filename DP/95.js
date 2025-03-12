/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    const dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(null))
    return generateTreesFromTo(1, n, dp)
};


var generateTreesFromTo = function (from, to, dp) {


    // if from is bigger than to, return empty array
    if (from > to) return []

    // if we have calculate, just return, efficient
    if(dp[from][to]) return dp[from][to]

    // the end situation of iteration from === to
    if (from === to) {
        dp[from][to] = [new TreeNode(from)]
        return dp[from][to]
    }

    const res = []

    // if from is bigger than to, we should generate trees in which the head is from from to to
    // this is the cycle
    for (let i = from; i <= to; i++) {
        // the left trees  ->  generateTreesFromTo [from, i - 1]
        const left_trees = generateTreesFromTo(from, i - 1, dp)
        // right trees -> generateTreesFromTo [i + 1, to]
        const right_threes = generateTreesFromTo(i + 1, to, dp)
        if (left_trees.length === 0) {
            right_threes.forEach(item => {
                const head = new TreeNode(i, null, item)
                res.push(head)
            })
        } else if (right_threes.length === 0) {
            left_trees.forEach(item => {
                const head = new TreeNode(i, item, null)
                res.push(head)
            })
        } else {
            left_trees.forEach(left_tree => {
                right_threes.forEach(right_tree => {
                    const head = new TreeNode(i, (left_tree || null), (right_tree || null))
                    res.push(head)
                })
            })
        }
    }

    dp[from][to] = res
    return dp[from][to]
}