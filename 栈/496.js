/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const len = nums2.length
    const stack = []
    const map = new Map()
    for (let i = len - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] < nums2[i]) {
            stack.pop()
        }
        if (stack.length === 0) {
            map.set(nums2[i], -1)
        } else {
            map.set(nums2[i], stack[stack.length - 1])
        }
        stack.push(nums2[i])
    }
    return nums1.map(item => map.get(item))
};