/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 0) return 0
    if (n === 1) return 1
    let p = 0, q = 1
    for (let i = 2; i <= n; i++) {
        const temp = p + q
        p = q
        q = temp
    }
    return q
};