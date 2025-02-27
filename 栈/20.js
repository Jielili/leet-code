/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    const pairs = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ])

    const len = s.length
    for (let i = 0; i < len; i++) {
        if (stack.length && pairs.get(s[i]) === stack[stack.length - 1]) {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }

    return stack.length === 0

};