/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    const memo = new Array(target + 1).fill(-1)
    return dp(nums, target, memo)
};


var dp = function (nums, target, memo) {

    if (target === 0) {
        return 1
    }

    if (memo !== -1) {
        return memo[target]
    }

    let res = 0
    for (let i = 0; i < nums.length; i++) {
        if (target >= nums[i]) {
            res += dp(nums, target - nums[i])
        }
    }

    memo[target] = res

    return res
}