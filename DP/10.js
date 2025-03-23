/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const memo = new Array(s.length + 1).fill(0).map(() => new Array(p.length + 1).fill(-1))
    const res = dp(s, p, 0, 0, memo)
    return res
};

var dp = function (s, p, i, j, memo) {

    // if we have all letter matched
    if(j >= p.length && i >= s.length) {
        memo[i][j] = true
        return true
    }

    if(memo[i][j] !== -1) {
        return memo[i][j]
    }

    // if s[i] match s[j]
    if (s[i] === p[j]) {
        memo[i][j] = dp(s, p, i + 1, j + 1, memo)
        return memo[i][j]
    }

    if (p[j] === '.' && s[i]) {
        memo[i][j] = dp(s, p, i + 1, j + 1, memo)
        return memo[i][j]
    }

    if (p[j] === '*') {
        memo[i][j] = dp(s, p, i, j - 1, memo) || dp(s, p, i - 1, j + 1, memo)
        return memo[i][j]
    }

    if (p[j + 1] === '*') {
        memo[i][j] = dp(s, p, i, j + 2, memo)
        return memo[i][j]
    }

    memo[i][j] = false
    return false
}