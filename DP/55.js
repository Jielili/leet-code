/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max = 0;
    for(let i = 0; i<max; i++) {
        max = Math.max(max, i + nums[i])
    }
    return max >= nums.length - 1
};
