/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    const negitive = [], positive = [], sum = 0
    nums.sort((a, b) => a - b)
    nums.forEach(item => {
        if (item < 0) {
            negitive.push(item)
        } else {
            positive.push(item)
        }
        sum += item
    })
    for (let i = 0; i < negitive.length && k > 0; i++) {
        sum -= negitive[i] * 2
        k--
    }
    if (k % 2 === 1) {
        if (positive.length === 0 && negitive.length) {
            sum -= Math.min(positive[0], -negitive[negitive.length - 1]) * 2
        } else if (positive.length) {
            sum -= positive[0] * 2
        } else {
            sum -= -negitive[negitive.length - 1] * 2
        }
    }

    return sum
};