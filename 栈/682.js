/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    const stack = []
    operations.forEach(item => {
        if (item === 'C') {
            stack.pop()
        } else if (item === 'D') {
            const top = stack.pop()
            const cur = top * 2
            stack.push(top)
            stack.push(cur)
        } else if (item === '+') {
            const first = stack.pop()
            const second = stack.pop()
            const cur = first + second
            stack.push(first, second, cur)
        } else {
            stack.push(item)
        }
    })
    return _.sum(stack)
};