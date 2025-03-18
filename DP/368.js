/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    let p = 0
    nums.sort((a,b) => a-b)
    const len = nums.length
    const dp = new Array(len).fill(0).map(() => ([1, -1]))
    for(let i = 1; i < nums.length; i++) {
        for(let j = i - 1; j >= 0; j--) {
            if(nums[i] % nums[j] === 0) {
                if(dp[j][0] + 1 > dp[i][0]) {
                    dp[i][0] = dp[j][0] + 1
                    dp[i][1] = j
                    if(dp[i][0] > dp[p][0]) {
                        p = i
                    }
                }
            }
        }
    }
    const res = []
    while(p >= 0) {
        res.push(nums[p])
        p = dp[p][1]
    }
    return res
};