/**
 * @param {number} stackSize
 */
var TripleInOne = function(stackSize) {
    this.arr = []
    this.stackSize = stackSize
    this.size = [0, 0, 0]
};

/** 
 * @param {number} stackNum 
 * @param {number} value
 * @return {void}
 */
TripleInOne.prototype.push = function(stackNum, value) {
    if(this.size[stackNum] === this.stackSize) return 
    this.arr[stackNum * this.stackSize + this.size[stackNum]] = value
    this.size[stackNum]++
};

/** 
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.pop = function(stackNum) {
    
    if(this.size[stackNum] === 0 ) {
        return -1
    } else {
        this.size[stackNum]--
        return this.arr[stackNum * this.stackSize + this.size[stackNum]]
    }
};

/** 
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.peek = function(stackNum) {
    if(this.size[stackNum] === 0 ) {
        return -1
    }
    return this.arr[stackNum * this.stackSize + this.size[stackNum] - 1]
};

/** 
 * @param {number} stackNum
 * @return {boolean}
 */
TripleInOne.prototype.isEmpty = function(stackNum) {
    console.log(this.arr)
    console.log(this.size)
    return this.size[stackNum] === 0
};

/** 
 * Your TripleInOne object will be instantiated and called as such:
 * var obj = new TripleInOne(stackSize)
 * obj.push(stackNum,value)
 * var param_2 = obj.pop(stackNum)
 * var param_3 = obj.peek(stackNum)
 * var param_4 = obj.isEmpty(stackNum)
 */