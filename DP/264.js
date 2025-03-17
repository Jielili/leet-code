/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    // 不要把2,3,5的乘数固定在一个指针上
    // 分开，用三个指针来记录
    const res = [1]
    let a = 0, b = 0, c = 0
    for (let i = 1; i < n; i++) {
        const a2 = res[a] * 2
        const b3 = res[b] * 3
        const c5 = res[c] * 5
        const min = Math.min(a2, Math.min(b3, c5))
        if (min === a2) a++
        if (min === b3) b++
        if (min === c5) c++
        res.push(min)
    }
    return res[n - 1]
};


