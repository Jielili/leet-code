/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const memo = new Array(s.length).fill(-1)
    return dp(s, wordDict, 0)
};

var dp = function (s, wordDict, i, memo) {

    if (i >= s.length) {
        return true
    }

    if (memo[i] != -1) {
        return memo[i]
    }

    let res = false

    for (let j = 0; j < wordDict.length; j++) {
        const word_len = wordDict[j].length
        if (s.substring(i, i + word_len) === wordDict[j]) {
            res = res || dp(s, wordDict, i + word_len, memo)
            if (res) {
                memo[j] = true
                return true
            }
        }
    }
    memo[i] = false
    return false
}