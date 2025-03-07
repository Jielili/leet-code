/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    const res = []
    let cur = -1
    for (let i = 0; i < groups.length; i++) {
        if (groups[i] !== cur) {
            res.push(words[i])
        }
        cur = groups[i]
    }
    return res
};