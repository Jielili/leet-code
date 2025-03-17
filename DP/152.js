/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    const len = nums.length
    let res = Number.NEGATIVE_INFINITY
    let p = 1, q = 1, found = false
    for (let i = 0; i < len; i++) {
        if (nums[i] === 0) {
            p = 1
            q = 1
            found = false
            res = Math.max(res, 0)
            continue
        }
        p *= nums[i]
        res = Math.max(res, p)
        if (found) {
            q *= nums[i]
            res = Math.max(res, q)
        }
        if (!found && nums[i] < 0) {
            found = true
        }
    }
    return 
};


var maxProduct1 = function(nums) {
    const len = nums.length
    let res = Number.NEGATIVE_INFINITY, max = 1, min = 1
    for (let i = 0; i < len; i++) {
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



console.log(maxProduct([2,3,-2,4,2,9,-1,2,3,-3,6,-2,0,1,2,3, -3, 4,5,-2,1,3,-3,-3,9,2]))