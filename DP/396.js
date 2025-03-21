/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
    const len = nums.length
    let sum = 0, origin = 0, res = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < len; i++) {
        sum += nums[i]
        origin += i * nums[i]
    }
    res = origin
    for (let i = len - 1; i > 0; i--) {
        origin += sum
        origin -= len * nums[i]
        res = Math.max(res, origin)
    }
    return res
};