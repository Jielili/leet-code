/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    const len = primes.length
    const p = new Array(len).fill(0)
    const res = new Array(n + 1).fill(1)
    const nums = new Array(len).fill(1)
    for (let i = 1; i <= n; i++) {
        let min = Number.MAX_SAFE_INTEGER
        for(let j=0; j < len; j++) {
            min = Math.min(min, nums[j])
        }
        res[i] = min
        for(let j=0; j < len; j++) {
            if(min === nums[j]) {
                p[j]++
                nums[j] = primes[j] * res[p[j]]
            }
        }
    }
    return res[n]
};