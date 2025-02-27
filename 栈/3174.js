/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    const stack = []
    for(let x of s) {
        const char_code = x.charCodeAt()
        if(char_code >= 48 && char_code <= 57) {
            stack.pop()
        } else {
            stack.push(x)
        }
    }
    return stack.join('')
};