class KthLargest {
  constructor(k, nums) {
    this.k = k
    this.heap = []
    nums.forEach(val => this.push(val))
  }

  push(val) {
    if (this.heap.length < this.k) {
      this.heap.push(val)
      bubbleUp(this.heap)
    } else if (val > this.heap[0]) {
      [this.heap[this.k - 1], this.heap[0]] = [this.heap[0], this.heap[this.k - 1]]
      this.heap.pop()
      bubbleDown(this.heap)
      this.heap.push(val)
      bubbleUp(this.heap)
    }
  }

  add(val) {
    this.push(val)
    return this.heap[0]
  }

  bubbleUp(heap) {
    let cur = heap.length - 1, parent = (cur - 1) >> 1
    while (cur > 0 && heap[cur] < heap[parent]) {
      [heap[cur], heap[parent]] = [heap[parent], heap[cur]]
      cur = parent
      parent = (cur - 1) >> 1
    }
  }

  bubbleDown(heap) {
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
}