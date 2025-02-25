/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
	const events = []
	buildings.forEach(([left, right, h]) => {
		events.push([left, h])
		events.push([right, -h])
	})
	events.sort((a, b) => {
		if (a[0] === b[0]) {
			return b[1] - a[1] 
		} else {
			return a[0] - b[0]
		}
	})

	const res = [], height = [0]
	events.forEach(([x, y]) => {
		const pre = height[0]
		if (y > 0) {
			height.push(y)
			bubbleUp(height)
		} else {
			const i = height.indexOf(-y);
			[height[i], height[height.length - 1]] = [height[height.length - 1], height[i]]
			height.pop()
			bubbleDown(height, i)
		}
		if (height[0] !== pre) {
			res.push([x, height[0]])
		}
	})
	return res
};

var bubbleUp = (heap) => {
	let cur = heap.length - 1, parent = (cur - 1) >> 1
	while (cur > 0 && heap[cur] > heap[parent]) {
		[heap[cur], heap[parent]] = [heap[parent], heap[cur]]
		cur = parent
		parent = (cur - 1) >> 1
	}
}

var bubbleDown = (heap, cur) => {
	const len = heap.length
	let left = cur * 2 + 1, right = cur * 2 + 2
	while (left < len) {
		let biggest = cur
		if (heap[biggest] < heap[left]) biggest = left
		if (right < len && heap[biggest] < heap[right]) biggest = right

		if (biggest === cur) break;
		[heap[cur], heap[biggest]] = [heap[biggest], heap[cur]]
		cur = biggest
		left = cur * 2 + 1
		right = cur * 2 + 2
	}
}



console.log(getSkyline([[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]))
console.log(getSkyline([[0,2,3],[2,5,3]]))