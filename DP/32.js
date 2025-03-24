/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const dp = new Array(s.length).fill(0)
    let res = 0
    for(let i = 1; i < s.length; i++) {
        if(s[i] === ')') {
            const match = i - dp[i - 1] - 1
            if (s[match] === '(') {
                dp[i] = i - match + 1 + (dp[match - 1] || 0)
            }
            res = Math.max(dp[i], res)
        } 
    }
    return res
};