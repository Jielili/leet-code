/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
    let water = 0
    const fn = ([i, j]) => heightMap[i][j]
    const m = heightMap.length, n = heightMap[1].length
    const heap = new MinHeap(fn)
    const visited = new Set([`0,0`, `0,${n - 1}`, `${m - 1},0`, `${m - 1},${n - 1}`])
    const direction = [[-1, 0], [1, 0], [0, 1], [0, -1]]
    for(let i = 1; i< m - 1; i++) {
        heap.insert([i, 0])
        visited.add(`${i},0`)
        heap.insert([i, n - 1])
        visited.add(`${i},${n - 1}`)
    }
    for(let j = 1; j < n - 1; j++) {
        heap.insert([0, j])
        visited.add(`0,${j}`)
        heap.insert([m - 1, j])
        visited.add(`${m - 1},${j}`)
    }
    while(heap.length) {
        const [i, j] = heap.delete()
        direction.forEach(([nx, ny]) => {
            const x = i + nx, y = j + ny
            if(x < 0 || y < 0 || x >= m || y >= n || visited.has(`${x},${y}`)) {
                return
            }
            visited.add(`${x},${y}`)
            const diff = heightMap[i][j] - heightMap[x][y]
            if(diff > 0) {
                water += diff
                heightMap[x][y] = heightMap[i][j]
            }
            heap.insert([x, y])
        })
    }

    return water
};

class MinHeap extends Array {
    constructor(fn) {
        super()
        this.calculate_fun = fn
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
        while(cur > 0 && this.calculate_fun(this[cur]) < this.calculate_fun(this[parent])) {
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

            if(this.calculate_fun(this[left]) < this.calculate_fun(this[smallest])) {
                smallest = left
            }
            if(right < len && this.calculate_fun(this[right]) < this.calculate_fun(this[smallest])) {
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


// console.log(trapRainWater([[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]))
// console.log(trapRainWater([[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]))
console.log(trapRainWater([[12,13,1,12],[13,4,13,12],[13,8,10,12],[12,13,12,12],[13,13,13,13]]))