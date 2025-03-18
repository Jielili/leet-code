const { lowerFirst } = require("lodash");

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const len = nums.length
    const dp = new Array(len).fill(1)
    for (let i = 0; i < len; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (nums[j] < nums[i] && (dp[j] + 1) > dp[i]) {
                dp[i] = dp[j] + 1
            }
        }
    }
    return nums[len - 1]
};