/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0, right = height.length - 1
    let res = 0
    let max_h = Math.min(height[left], height[right])
    while(left < right) {
        while(height[left] <= max_h && left < right) {
            res += max_h - height[left]
            left++
        }
        while(height[right] <= max_h && left < right) {
            res += max_h - height[right]
            right--
        }
        max_h = Math.min(height[left], height[right])
    }
    return res
};