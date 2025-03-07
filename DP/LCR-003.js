
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    const res = [0]
    let len = 1, cur = 1
    for (let i = 0; i < n; i++) {
        res.push(res[len - cur] + 1)
        cur--
        if (cur === 0) {
            len = res.length
            cur = len
        }
    }
    return res
};