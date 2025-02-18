/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max = 0
    for(let i = 0;i<= max; i++) {
        max = Math.max(max, nums[i] + i)
        if(max >= nums.length - 1) return true
    }
    return false
};

console.log(canJump([0]))
console.log(canJump([2,3,1,1,4]))
console.log(canJump([3,2,1,0,4]))