/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let left = 0, right = 0
    const len = nums.length
    while(right < len) {
        let max_right = 0
        for(let i = left; i <= right; i++) {
            max_right = Math.max(max_right, right + nums[i])
        }
        left = right + 1
        right = max_right
    }
    return max_right >= len - 1
};
