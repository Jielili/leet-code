/**
 * @param {number[]} nums
 * @return {number[]}
 */

var minSubsequence = function(nums) {
    const sum = nums.reduce((pre, cur) => pre + cur, 0)
    nums.sort((a, b) => (a - b))
    const res = [], max_part = 0
    while (max_part <= sum) {
        const cur = nums.pop()
        res.push(cur)
        max_part += cur
        sum -= cur
    }
    return res
};