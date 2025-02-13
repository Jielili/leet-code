/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  let m = 0, n = 0;
    const len = pushed.length
    const arr = []
    while (m !== len) {
        arr.push(pushed[m])
        while (arr[arr.length -1] === popped[n] && n < len) {
            arr.pop()
            n++
        }
        m++
    }
    return arr.length === 0
};

console.log(validateStackSequences([1,2,3,4,5], [4,5,3,2,1]))
console.log(validateStackSequences([1,2,3,4,5], [4,3,5,1,2]))
