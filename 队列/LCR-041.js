/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.queue = []
    this.max_size = size
    this.size = 0
    this.sum = 0
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    if (this.size === this.max_size) {
        const removed = this.queue.shift()
        this.sum -= removed
        this.size--
    } 
    this.queue.push(val)
    this.size++
    this.sum += val
    return this.sum / this.size
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */