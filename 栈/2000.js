/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const stack = []
    let res = ''
    for(let x of word) {
        stack.push(x)
        if(x === ch) {
            while(stack.length) {
                res += stack.pop()
            }
            ch = undefined
        }
    }
    return res + stack.join('')
};