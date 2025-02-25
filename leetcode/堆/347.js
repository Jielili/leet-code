/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = new Map()
    const heap = []
    nums.forEach(val => {
        map.set(val, (map.get(val) || 0) + 1)
    })
    map.forEach((val, key) => {
        if (heap.length < k) {
            heap.push(key)
            bubbleUp(heap, map) 
        } else if (map.get(heap[0]) < val) {
            [heap[k - 1], heap[0]] = [heap[0], heap[k - 1]]
            heap.pop()
            bubbleDown(heap, map)
            heap.push(key)
            bubbleUp(heap, map)
        }
    })
    return heap
};

var bubbleUp = function (heap, map) {
	let cur = heap.length - 1, parent = (cur - 1) >> 1
	while (cur > 0 && map.get(heap[cur]) < map.get(heap[parent])) {
		[heap[cur], heap[parent]] = [heap[parent], heap[cur]]
		cur = parent
		parent = (cur - 1) >> 1
	}
}

var bubbleDown = function (heap, map) {
	let cur = 0, left = cur * 2 + 1, right = cur * 2 + 2
	const len = heap.length
	while (left < len) {
		let smallest = cur
		if (map.get(heap[left]) < map.get(heap[smallest])) smallest = left
		if (right < len && map.get(heap[right]) < map.get(heap[smallest])) smallest = right

		if (smallest === cur) break
		
		[heap[smallest], heap[cur]] = [heap[cur], heap[smallest]]
		cur = smallest
		left = cur * 2 + 1
		right = cur * 2 + 2
	}
}


console.log(topKFrequent([1,1,1,2,2,3], 2))
console.log(topKFrequent([1], 1))