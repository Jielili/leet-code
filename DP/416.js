/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = _.sum(nums)
    if (sum % 2 !== 0) {
        return false
    }
    const target = sum/2
    const dp = new Array(nums.length + 1).fill(0).map(() => new Array(target + 1).fill(false))
    dp[0][0] = true
    for (let i = 1; i <= nums.length; i++) {
        dp[i][0] = dp[i - 1][0]
        for (let j = 1; j <= target; j++) {
            dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]
        }
    }
    return dp[nums.length][target]
};
