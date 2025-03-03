/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
    let len = word.length, res = len, cur = 'a'.charCodeAt()
    for (let i = 0; i < len; i++) {
        const next = word.charCodeAt(i)
        const diff = Math.abs(cur - next)
        const min_diff = Math.min(diff, 26 - diff)
        res += min_diff
        cur = next
    }
    return res
};