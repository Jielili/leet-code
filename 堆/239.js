/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function (nums, k) {
//     const heap = [], res = []
//     for (let i = 0; i < k; i ++) {
//         heap.push([nums[i], i])
//         bubbleUp(heap)
//     }
//     res.push(heap[0][0])
//     for (let i = k; i < nums.length; i++) {
//         heap.push([nums[i], i])
//         bubbleUp(heap)
//         while (heap[0][1] < i - k + 1 || heap[0][1] > i) {
//             [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]]
//             heap.pop()
//             bubbleDown(heap)
//         }
//         res.push(heap[0][0])
//     }
//     return res
// };

// var bubbleUp = (heap) => {
// 	let cur = heap.length - 1, parent = (cur - 1) >> 1
// 	while (cur > 0 && heap[cur][0] > heap[parent][0]) {
// 		[heap[cur], heap[parent]] = [heap[parent], heap[cur]]
// 		cur = parent
// 		parent = (cur - 1) >> 1
// 	}
// }

// var bubbleDown = (heap) => {
// 	const len = heap.length
// 	let cur = 0, left = cur * 2 + 1, right = cur * 2 + 2
// 	while (left < len) {
// 		let biggest = cur
// 		if (heap[biggest][0] < heap[left][0]) biggest = left
// 		if (right < len && heap[biggest][0] < heap[right][0]) biggest = right

// 		if (biggest === cur) break;
// 		[heap[cur], heap[biggest]] = [heap[biggest], heap[cur]]
// 		cur = biggest
// 		left = cur * 2 + 1
// 		right = cur * 2 + 2
// 	}
// }

var maxSlidingWindow = function (nums, k) {
    const q = [], res = [], len = nums.length

    for (let i = 0; i < k; i++) {
        while (q.length && nums[i] > nums[q[q.length - 1]]) {
            q.pop()
        }
        q.push(i)
    }
    res.push(nums[q[0]])

    for (let i = k; i < len; i++) {
        while (q.length && nums[i] > nums[q[q.length - 1]]) {
            q.pop()
        }
        q.push(i)

        while (q[0] < i - k + 1) {
            q.shift()
        }
        res.push(nums[q[0]])
    }
    return res
};



console.log(maxSlidingWindow([1,3,-1,-3,5,gs3,6,7], 3))
console.log(maxSlidingWindow([1], 1))
// console.log(maxSlidingWindow([-5769,-7887,-5709,4600,-7919,9807,1303,-2644,1144,-6410,-7159,-2041,9059,-663], 6))
// console.log(maxSlidingWindow([-5769,-7887,-5709,4600,-7919,9807,1303,-2644,1144,-6410,-7159,-2041,9059,-663,4612,-257,2870,-6646,8161,3380,6823,1871,-4030,-1758,4834,-5317,6218,-4105,6869,8595,8718,-4141,-3893,-4259,-3440,-5426,9766,-5396,-7824,-3941,4600,-1485,-1486,-4530,-1636,-2088,-5295,-5383,5786,-9489,3180,-4575,-7043,-2153,1123,1750,-1347,-4299,-4401,-7772,5872,6144,-4953,-9934,8507,951,-8828,-5942,-3499,-174,7629,5877,3338,8899,4223,-8068,3775,7954,8740,4567,6280,-7687,-4811,-8094,2209,-4476,-8328,2385,-2156,7028,-3864,7272,-1199,-1397,1581,-9635,9087,-6262,-3061,-6083,-2825,-8574,5534,4006,-2691,6699,7558,-453,3492,3416,2218,7537,8854,-3321,-5489,-945,1302,-7176,-9201,-9588,-140,1369,3322,-7320,-8426,-8446,-2475,8243,-3324,8993,8315,2863,-7580,-7949,4400], 6))