/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const res = [0]
    let len = 0, k = 0
    for (let i = 0; i < n; i++) {
        if (k === 0) {
            len = res.length
            k = res.length
        }
        res.push(res[len - k] + 1)
        k--
    }
    return res
};

console.log(countBits(8))