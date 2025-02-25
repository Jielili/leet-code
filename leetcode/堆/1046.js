/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
	const heap = new MaxHeap()
	stones.forEach(val => {
		heap.insert(val)
	})
	while (heap.length > 1) {
		const y = heap.extract()
		const x = heap.extract()
		if (x !== y) {
			heap.insert(y - x)
		}
	}
	return heap.heap[0] || 0
};

class MaxHeap {
	constructor() {
		this.heap = []
	}

	insert(val) {
		this.heap.push(val)
		this.bubbleUp()
	}

	extract() {
		const max = this.heap[0]
		const last = this.heap.pop()
		if (this.heap.length) {
		this.heap[0] = last
		this.bubbleDown()
		}
		return max
	}

	bubbleUp() {
		let cur = this.heap.length - 1
		let parent = (cur - 1) >> 1
		while (cur > 0 && this.heap[cur] > this.heap[parent]) {
			[this.heap[cur], this.heap[parent]] = [this.heap[parent], this.heap[cur]]
			cur = parent
			parent = (cur - 1) >> 1
		}
	}

	bubbleDown() {
		let cur = 0
		let left = cur * 2 + 1
		let right = cur * 2 + 2
		const len = this.heap.length
		while (left < len) {
		let max = cur
		if (this.heap[left] > this.heap[max]) max = left
		if (right < len && this.heap[right] > this.heap[max]) max = right

		if (max === cur) break

		[this.heap[cur], this.heap[max]] = [this.heap[max], this.heap[cur]]
			cur = max
			left = cur * 2 + 1
			right = cur * 2 + 2
		}
	}

	// Implementing Symbol.iterator to make MaxHeap iterable
    [Symbol.iterator]() {
        let index = 0
        const data = this.heap
        return {
            next: () => ({
                value: data[index],
                done: index++ >= data.length
            })
        }
	}
	
	get length() {
        return this.heap.length
    }
}

console.log(lastStoneWeight([316,157,73,106,771,828,46,212,926,604,600,992,71,51,477,869,425,405,859,924,45,187,283,590,303,66,508,982,464,398])) // 1