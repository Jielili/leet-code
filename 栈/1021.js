/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let stack = [], res = ''
    const len = s.length
    for (let x of s) {
        if (x === '(') {
            stack.push('(')
            if (stack.length > 1) {
                res += x
            }
        } else {
            stack.pop()
            if (stack.length > 0) {
                res += x
            }
        }
    }
    return res
};