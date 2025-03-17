/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    const dp = new Array(n + 1).fill()
    for (let j = 1; j * j <= n; j++) {
        for (let i = j * j; i <= n; i++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
        }
    }
    return dp[n]
};


console.log(numSquares(12))