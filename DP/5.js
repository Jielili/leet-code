/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let left = 0, right = 0
    const len = s.length
    for(let m = 0; m< len; m++) {
        for(let i = m - 1, j = m + 1; i >= 0 && j < len; i--, j++) {
            if(s[i] === s[j]) {
                if(j - i > right - left) {
                    left = i
                    right = j
                }
            } else {
                break
            }
        }
        for(let i = m - 1, j = m; i >= 0 && j < len; i--, j++) {
            if(s[i] === s[j]) {
                if(j - i > right - left) {
                    left = i
                    right = j
                }
            } else {
                break
            }
        }
    }
    return s.substring(left, right + 1)
};