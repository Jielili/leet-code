/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const stack = []
    for(let x of s) {
        const top_val = stack[stack.length - 1]
        if(top_val && x !== top_val && (x === top_val.toLowerCase() || x === top_val.toUpperCase())) {
            stack.pop()
        } else {
            stack.push(x)
        }
    }
    return stack.join('')
};