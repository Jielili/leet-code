/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    const len_s = sequence.length, len_w = word.length
    let res = 0, dp = new Array(len_s).fill(0)
    for (let i = 0; i <= len_s - len_w; i++) {
        let p = i, q = 0
        while (q < len_w && sequence.charAt(p) === word.charAt(q)) {
            p++
            q++
        }
        if (q === len_w) {
            const pos = p - 1
            dp[pos] = pos >= len_w ? (1 + dp[pos - len_w]) : 1
            res = Math.max(res, dp[pos])
        }
    }
    return res
};