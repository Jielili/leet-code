
var MyQueue = function() {
    this.stack1 = []
    this.stack2 = []
    this.count = 0
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    for (let i = 0; i < this.count; i++) {
        this.stack2.push(this.stack1.pop())
    }
    this.stack1.push(x)
    for (let i = 0; i < this.count; i++) {
        this.stack1.push(this.stack2.pop())
    }
    this.count++
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.count > 0) {
        this.count--
    }
    return this.stack1.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack1[this.count - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.count === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */