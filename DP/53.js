/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const len = nums.length
    let res = Number.NEGATIVE_INFINITY
    let cur = 0
    for(let i = len - 1; i >= 0; i--) {
        cur += nums[i]
        if(cur < 0) {
            cur = 0
            res = Math.max(res, nums[i])
        } else {
            res = Math.max(res, cur)
        }
    }
    return res
};