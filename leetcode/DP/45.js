/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if(nums.length <= 1) return 0
    let maxNumIndex = 0, end = 0, step = 0
    for (let i = 0;i<nums.length;i++) {
        maxNumIndex = Math.max(maxNumIndex, nums[i] + i)
        if (maxNumIndex >= nums.length - 1) return step+1
        if (i === end) {
            step++
            end = maxNumIndex
        }
    }
};

console.log(jump([2,3,1,1,4]))
console.log(jump([2,3,0,1,4]))
console.log(jump([0]))
console.log(jump([7,0,9,6,9,6,1,7,9,0,1,2,9,0,3]))

