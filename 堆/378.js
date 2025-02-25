/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const res = []
    const heap = new MinHeap()
    const m = matrix.length, n = matrix[0].length
    for(let i = 0; i< m; i++) {
        heap.insert([i, 0, matrix[i][0]])
    }
    for(let i = 0; i<k; i++) {
        const [x, y, val] = heap.delete()
        res.push(val)
        if(y < n - 1) {
            heap.insert([x, y + 1, matrix[x][y + 1]])
        }
    }
    return res[k - 1]
};


class MinHeap extends Array {
    constructor(fn) {
        super()
    }

    insert(val) {
        this.push(val)
        this.bubbleUp()
    }

    delete() {
        const len = this.length
        const delete_item = this[0]
        this[0] = this[len - 1]
        this.pop()
        this.bubbleDown()
        return delete_item
    }

    bubbleUp() {
        let cur = this.length - 1
        let parent = (cur - 1) >> 1
        while(cur > 0 && this[cur][2] < this[parent][2]) {
            [this[cur], this[parent]] = [this[parent], this[cur]]
            cur = parent
            parent = (cur - 1) >> 1
        }
    }

    bubbleDown() {
        let cur = 0, left = cur * 2 + 1, right = cur * 2 + 2
        const len = this.length
        while(left < len) {
            let smallest = cur

            if(this[left][2] < this[smallest][2]) {
                smallest = left
            }
            if(right < len && this[right][2] < this[smallest][2]) {
                smallest = right
            }

            if(smallest === cur) {
                break
            }

            [this[cur], this[smallest]] = [this[smallest], this[cur]]
            cur = smallest
            left = cur * 2 + 1
            right = cur * 2 + 2
        }
    }
}

console.log(kthSmallest([[1,5,9],[10,11,13],[12,13,15]], 8))
console.log(kthSmallest([[-5]], 1))