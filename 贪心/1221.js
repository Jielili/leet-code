/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let L_count = 0, R_count = 0, res = 0
    for (let i = 0; i < s.length; i++) {
        const x = s.charAt(i)
        if (x === 'L') {
            L_count++
        } else {
            R_count++
        }
        if (L_count === R_count) {
            res++
            L_count = 0
            R_count = 0
        }
    }
    return res
};