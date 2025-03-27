/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let res = 0

    const m = matrix.length, n = matrix[0].length
    // 我们记录当前格子当前格子，左面有多少个一，上面有多少个一
    // dp[i, j][w] = dp[i, j - 1][w] + val
    // dp[i, j][h] = dp[i - 1, j][h] + val
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0).map(() => [0, 0]))
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (matrix[i - 1][j - 1] === '1') {
                const max_w = dp[i][j - 1][0] + 1
                const max_h = dp[i - 1][j][1] + 1
                dp[i][j][0] = max_w
                dp[i][j][1] = max_h
                if (max_w === 1 || max_h === 1) {
                    res = Math.max(max_w * max_h, res)
                } else {
                    let min_w = max_w
                    for (let h = 0; h < max_h; h++) {
                        min_w = Math.min(min_w, dp[i - h][j][0])
                        res = Math.max(min_w * (h + 1), res)
                    }
                }
            }
        }
    }

    return res
};