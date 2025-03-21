/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    let diff = undefined, count = 1, res = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === diff) {
            count++
            if (count >= 3) {
                res += count - 2
            }
        } else {
            diff = nums[i] - nums[i - 1]
            count = 2
        }
    }

    return res
};