/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const memo = new Array(nums.length).fill(0)
    return dp(nums, 0, memo)
};

var dp = function (nums, j) {

    const len = nums.length

    if (j >= len) {
        return 0
    }

    if (memo[j] !== 0) {
        return memo[j]
    }

    if (j === len - 1) {
        memo[j] = nums[j]
        return nums[j]
    }

    // 1. 我们选择j
    const selected = nums[j] + dp(nums, j + 2, memo)
    // 2. 我们不选择j
    const unselected = dp(nums, j + 1, memo)

    memo[j] = Math.max(selected, unselected)

    return memo[j]
}