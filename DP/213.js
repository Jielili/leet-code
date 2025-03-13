/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const memo1 = new Array(nums.length).fill(-1)
    const memo2 = new Array(nums.length).fill(-1)
    if(nums.length === 1) {
        return nums[0]
    }
    return Math.max(dp(nums, 0, nums.length - 2, memo1), dp(nums, 1, nums.length - 1, memo2))
}

var dp = function (nums, from, to, memo) {
    // the end situation
    if (from > to) {
        return 0
    }

    if (memo[from] !== -1) {
        return memo[from]
    }

    // if there is just one left
    if (from === to) {
        memo[from] = nums[from]
        return memo[from]
    }

    // we select the from
    const selected = nums[from] + dp(nums, from + 2, to, memo)
    // we dont select the from
    const unselected = dp(nums, from + 1, to, memo)
    memo[from] = Math.max(selected, unselected)

    return memo[from]
}