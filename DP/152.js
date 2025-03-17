/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    const len = nums.length
    let res = Number.NEGATIVE_INFINITY
    for (let i = 0, max = 1, min = 1; i < len; i++) {
        const v = nums[i]
        if (v < 0) {
            [max, min] = [min, max]
        }
        max = Math.max(max * v, v)
        min = Math.min(min * v, v)
        res = Math.max(res, max)
    }
    return res
};


// console.log(maxProduct([2,3,-2,4,2,9,-1,2,3,-3,6,-2,0,1,2,3, - 3, 4]))