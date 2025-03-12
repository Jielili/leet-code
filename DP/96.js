/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    
    const dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(-1))

    return numTreesFromTo(1, n, dp)
    
};

var numTreesFromTo = function (from, to, dp) {
    
    if (from > to) return 0

    if (dp[from][to] !== -1) {
        return dp[from][to]
    }
    
    if (from === to) {
        dp[from][to] = 1
        return 1
    }

    let res = 0
    for (let i = from; i <= to; i++) {
        const left_num = numTreesFromTo(from, i - 1, dp)
        const right_num = numTreesFromTo(i + 1, to, dp)
        res += (left_num|| 1) * (right_num || 1)
    }
    dp[from][to] = res
    return res
}
