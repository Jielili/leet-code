/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {

    /// we use a dp arr to store the result
    const dp = new Array(p.length + 1).fill(false)
    // '' is matched to ''
    dp[0] = true

    for (let j = 1; j < dp.length; j++) {
        if (p[j - 1] === '*') {
            dp[j] = true
        } else {
            break
        }
    }

    for (let i = 0; i < s.length; i++) {
        // 确认p的每个位置的子串是否能匹配s[0, i]位置的子串
        let pre = dp[0]
        dp[0] = false
        for (let j = 1; j < dp.length; j++) {
            const cur = dp[j]
            if (s[i] === p[j - 1]) {
                // if p[i - 1] === s[i], then the result is dp[j - 1] of the last cycle
                dp[j] = pre
            } else if (p[j - 1] === '?') {
                // if p[j - 1] is '?', then the result is dp[j - 1] of the last cycle
                dp[j] = pre
            } else if (p[j - 1] === '*') {
                // if p[j - 1] is '*'
                // we can match s[i] with p[j - 1], the result is dp[j - 1]
                // we dont match s[i]
                dp[j] = pre || dp[j - 1] || dp[j]
            } else {
                dp[j] = false
            }
            pre = cur
        }
    }
    return dp[p.length]
};

// console.log(isMatch("adceb", "*a*b"))
console.log(isMatch("a", ""))
// console.log(isMatch("aa", "a"))
// console.log(isMatch("aa", "*"))
