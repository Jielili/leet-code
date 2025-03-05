/**
 * @param {number[]} cost
 * @return {number}
 */
// [1]
// [1, 100] min(1, 100) = 1
// [1, 100]
var minCostClimbingStairs = function(cost) {
    const len = cost.length
    if (len === 1) return cost[0]
    let p = cost[0], q = cost[1]
    for (let i = 2; i < len; i++) {
        const temp = Math.min(p, q) + cost[i]
        p = q
        q = temp
    }
    return Math.min(p, q)
};
