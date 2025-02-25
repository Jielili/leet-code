/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b)
  let diff = Number.MAX_VALUE
  let sum
  for(let i = 0; i < nums.length - 2; i++) {
    let start = i + 1;
    let end = nums.length -1 
    while(start < end) {
      const thisSum = nums[i] + nums[start] + nums[end]
      const thisDiff = target - thisSum
      if(Math.abs(thisDiff) < diff) {
        diff = Math.abs(thisDiff)
        sum = thisSum
      }
      if(thisDiff < 0) {
        end--
      } else {
        start++
      }
    }
  }
  return sum
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

