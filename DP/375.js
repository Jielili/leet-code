/**
 * @param {number} n
 * @return {number}
 */
// 1,2,3,4
// 3 + 1
// 2 + 3
var getMoneyAmount = function(n) {
    const dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(Number.MAX_SAFE_INTEGER));
    dp[1][1] = 0
    for (let i = 2; i <= n; i++) {
        dp[i - 1][i] = i - 1
        dp[i][i] = 0
    }
    // len - [3,n]
    for (let len = 3; len <= n; len++) {
        // end - [len, n]
        for (let i = len; i <= n; i++) {
            // start - [i - len + 1, n - len + 1]
            const start = i - len + 1
            // j = (start, i)
            for (let j = i - 1; j > start; j--) {
                const search_cost = j + Math.max(dp[start][j - 1], dp[j + 1][i])
                dp[start][i] = Math.min(search_cost, dp[start][i])
            }
        }
    }
    return dp[1][n]
};

console.log(getMoneyAmount(10))