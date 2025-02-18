/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const s_len = s.length
    const dp = new Array(s_len).fill(0).map(item => new Array(s_len).fill(false))
    for (let i = 0; i < s_len; i++) dp[i][i] = true;
    let start = 0, max_len = 1
    for(let len = 2; len<=s_len; len++) {
        for(let i = 0; i<s_len-len+1; i++) {
            const j = i + len - 1
            if(s[i] === s[j]) {
                if(len ===2) {
                    dp[i][j] = true
                } else {
                    dp[i][j] = dp[i+1][j-1]
                }
                if(dp[i][j] && max_len < len) {
                    start = i
                    max_len = len
                }
            }
        }
    }
    return s.slice(start, start + max_len)
};

console.log(longestPalindrome("babad"))
console.log(longestPalindrome("cbbd"))