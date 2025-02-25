/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
	const heap = [1], factor_arr = [2, 3, 5], seen = new Set()
	let res
	for (let i = 0; i < n; i++) {
		const cur_val = heap.shift()
		seen.delete(cur_val)
		res = cur_val
		if (heap.length) {
			heap.unshift(heap.pop())
			bubbleDown(heap)
		}
		factor_arr.forEach(factor_val => {
			const val = cur_val * factor_val
			if (!seen.has(val)) {
				heap.push(cur_val * factor_val)
				bubbleUp(heap)
				seen.add(val)
			}
		})
	}
	return res
};


var bubbleUp = function (heap) {
	let cur = heap.length - 1, parent = (cur - 1) >> 1
	while (cur > 0 && heap[cur] < heap[parent]) {
		[heap[cur], heap[parent]] = [heap[parent], heap[cur]]
		cur = parent
		parent = (cur - 1) >> 1
	}
}

var bubbleDown = function (heap) {
	let cur = 0, left = cur * 2 + 1, right = cur * 2 + 2
	const len = heap.length
	while (left < len) {
		let smallest = cur
		if (heap[left] < heap[smallest]) smallest = left
		if (right < len && heap[right] < heap[smallest]) smallest = right

		if (smallest === cur) break
		
		[heap[smallest], heap[cur]] = [heap[cur], heap[smallest]]
		cur = smallest
		left = cur * 2 + 1
		right = cur * 2 + 2
	}
}


console.log(nthUglyNumber(10))
console.log(nthUglyNumber(1))
console.log(nthUglyNumber(4))

