/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
    let res = 0, i = 0
    const len = s.length
    while (i < len) {
        if (s.charAt(i) === 'X') {
            res++
            i+=3
        } else {
            i++
        }
    }
    return res
};