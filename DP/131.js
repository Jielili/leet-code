/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const dp = [[s[0]]]
    for (let i = 1; i < s.length; i++) {
        const dp_len = dp.length
        for (let j = 0; j < dp_len; j++) {
            const len = dp[j].length
            const p = dp[j][len - 2], q = dp[j][len - 1]
            if (q === s[i]) {
                const cur = [...dp[j]]
                cur[len - 1] += s[i]
                dp.push(cur)
            }
            if (p === s[i]) {
                const cur = [...dp[j]]
                cur.pop()
                cur[len - 2] += (q + s[i])
                dp.push(cur)
            }
            dp[j].push(s[i])
        }
    }
    return dp
};