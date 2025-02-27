/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let depth = 0
    let max_depth = 0
    for(let x of s) {
        if(x==='(') {
            depth++
        }else if(x === ')') {
            depth--
        }
        max_depth = Math.max(depth, max_depth)
    }
    return max_depth
};