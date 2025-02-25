/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let left = 0, right = nums.length - 1
    while(1) {
        while(nums[left] !== val && left <= right) {
            left++
        }
        while(nums[right] === val && left <= right) {
            right--
        }
        if(left< right) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
        } else {
            break
        }
    }
    console.log(nums)
    return left
};
console.log(removeElement([2], 3))
console.log(removeElement([1], 1))
console.log(removeElement([3,2,2,3], 3))
console.log(removeElement([0,1,2,2,3,0,4,2], 2))