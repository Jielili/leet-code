/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const len = nums.length
    let steps = 0, left = 0, right = 0
    while(right < len - 1) {
        let max_right = 0
        for(let i = left; i <=right; i++ ) {
            max_right = Math.max(max_right, nums[i] + i)
        }
        steps++
        left = right + 1
        right = max_right
    }
    return steps
};