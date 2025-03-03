/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let res = 0, pre = nums[0]
    for (let i = 1; i < nums.length; i++) {
        const val = nums[i]
        if (val <= pre) {
            res += pre + 1 - val
            pre ++
        } else {
            pre = val
        }
    }
    return res
};