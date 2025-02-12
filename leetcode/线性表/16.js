/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b)
  let left = 0, right = nums.length - 1
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] * 3 < target) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  
  if (right === 0) {
    return nums[0] + nums[1] + nums[2]
  } else if(right === nums.length - 1) {
    return nums[right - 2] + nums[right - 1] + nums[right]
  } else if(right === 2 || right === nums.length -2 ){
    // const sum2 = nums[right - 2] + nums[right - 1] + nums[right]
    return nums[right - 1] + nums[right] + nums[right + 1]
  } else {
    const sum1 = nums[right - 2] + nums[right - 1] + nums[right]
    const sum2 = nums[right - 1] + nums[right] + nums[right + 1]
    const sum3 = nums[right] + nums[right + 1] + nums[right+2]
    const mid = Math.abs(sum1 - target) < Math.abs(sum2 - target) ? sum1 : sum2
    return Math.abs(mid - target) < Math.abs(sum3 - target) ? mid : sum3
  }
};

// console.log(threeSumClosest([-1,2,1,-4], 1))
// console.log(threeSumClosest([0,0,0], 1))
// console.log(threeSumClosest([0,1,2], 3))
console.log(threeSumClosest([4,0,5,-5,3,3,0,-4,-5], -2))

// 1, 2, 4, 5  9
// 3, 6, 12, 15 
// left = 0 right = 3 mid = 1  
// left = 2 right = 3 mid = 2
// left = 3 right = 3

