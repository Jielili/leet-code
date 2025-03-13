/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    const n = matrix.length, m = matrix[0].length
    const dp = new Array(m).fill(0)
    let res = 0

    for (let j = 0; j < m; j++) {
        dp[j] = matrix[0][j]
        res = Math.max(res, dp[j])
    }

    for (let i = 1; i < n; i++) {
        let pre = dp[0]
        dp[0] = matrix[i][0]
        for (let j = 1; j < m; j++) {
            const cur = dp[0]
            if (matrix[i][j] === '0') {
                dp[j] = 0
            } else {
                dp[j] = min(dp[j], dp[j - 1], pre) + 1
                res = Math.max(res, dp[j])
            }
            pre = cur
        }

    }

    return res * res
};

var min = function (m, n, o) {
    return Math.min(m, Math.min(n, o))
}
