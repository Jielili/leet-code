/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const stack1 = []
    const stack2 = []
    for (let letter of s) {
        if (letter === '#') {
            stack1.pop()
        } else {
            stack1.push(letter)
        }
    }
    for (let letter of t) {
        if (letter === '#') {
            stack2.pop()
        } else {
            stack2.push(letter)
        }
    }
    return stack1.join('') === stack2.join('')
};