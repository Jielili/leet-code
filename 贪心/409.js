/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const arr = []
    let res = 0
    for(let i = 0; i<s.length; i++) {
        const index = s[i].charCodeAt() - 65
        if(!arr[index]) {
            arr[index] = 1
        } else {
            res+=2
            arr[index] = 0
        }
    }
    if(res < s.length) {
        return res + 1
    }else {
        return res
    }
};