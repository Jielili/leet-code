/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const inDegrees = new Array(n + 1).fill(0);
    const outDegrees = new Array(n + 1).fill(0);
    trust.forEach(([i,j]) => {
        outDegrees[i]++
        inDegrees[j]++
    })
    for(let i = 1; i<=n; i++) {
        if(outDegrees[i] === 0 && inDegrees[i] === n - 1) {
            return i
        }
    }
    return -1
};