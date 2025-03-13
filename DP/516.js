/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    const len = s.length
    const dp = new Array(len).fill(0)
    for(let i = len - 1; i >=0; i--) {
        let pre = 0
        dp[i] = 1
        for(let j = i + 1; j < len; j++) {
            const cur = dp[j]
            const first = s[i] === s[j] ? (pre + 2) : 0
            dp[j] = Math.max(first, dp[j - 1], dp[j])
            pre = cur
        }
    }
    return dp[len - 1]
};


// 获取i到j中的最长回文子序列
var dp = function(s, i, j, memo) {

    if(i > j) {
        return 0
    }

    if(memo[i][j] !== -1) {
        return memo[i][j]
    }
    
    if(i === j) {
        memo[i][j] = 1
        return 1
    }

    // if s[i] === s[j] 
    const first = s[i]===s[j] ? (dp(s, i + 1, j - 1, memo) + 2) : 0
    // else we can drop s[j]
    const second = dp(s, i, j - 1, memo)
    // or we can drop s[i] 
    const third = dp(s, i + 1, j, memo)

    memo[i][j] = Math.max(first, Math.max(second, third))

    return memo[i][j]
}