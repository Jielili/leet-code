/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n === 0) return 0
    if (n === 1) return 1
    if (n === 2) return 1
    let p = 0, q = 1, r = 1
    for (let i = 3; i <= n; i++) {
        const temp = p + q + r
        p = q
        q = r
        r = temp
    }
    return r
};