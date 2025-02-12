
var MyCalendarThree = function() {
    this.tasks = []
    this.count = []
    this.max = 0
};

/** 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {number}
 */
MyCalendarThree.prototype.book = function(startTime, endTime) {
    // let i = 0
    // while(this.tasks[i].startTime <= startTime && i<this.tasks.length) {
    //     i++
    // }
    // while(this.task[i].endTime >= endTime && i>0) {
    //     i--
    // }
    // this.tasks.splice(i, 0, [startTime, endTime])
    let i = 0
    for(let i = 0; i < this.tasks.length; i++) {
        if(endTime <= startTime) {
            break
        }
        const [m, n] = this.tasks[i]
        if(endTime <= m) {
            this.tasks.splice(i, 0, [startTime, endTime])
            this.count.splice(i, 0, 1)
            startTime = endTime
        } else if(startTime <m) {
            this.tasks.splice(i, 0, [startTime, m])
            this.count.splice(i, 0, 1)
            startTime=m
        } else if(startTime ==m && endTime<n) {
            this.tasks[i][0] = endTime
            this.tasks.splice(i, 0, [m, endTime])
            this.count.splice(i, 0, this.count[i] + 1)
            this.max = Math.max(this.max, this.count[i])
            startTime=endTime
        } else if(startTime ===m && endTime >= n) {
            this.count[i] += 1
            startTime = n
            this.max = Math.max(this.max, this.count[i])
        } else if(startTime > m && endTime < n ) {
            this.tasks[i][0] = endTime
            this.tasks.splice(i, 0, [startTime, endTime])
            this.tasks.splice(i, 0, [m, startTime])
            this.count.splice(i, 0, this.count[i] + 1)
            this.count.splice(i, 0, this.count[i])
            this.max = Math.max(this.max, this.count[i])
            startTime=endTime
        } else if(startTime < n && endTime >= n) {
            this.tasks[i][0] = startTime
            this.tasks.splice(i, 0, [m, startTime])
            this.count[i] += 1
            this.max = Math.max(this.max, this.count[i])
            this.count.splice(i, 0, this.count[i] - 1)
            startTime = n
        } 
    }
    if(startTime < endTime) {
        const item = [startTime, endTime]
        this.tasks.push(item)
        this.count.push(1)
        this.max = Math.max(this.max, 1)
    }
    return this.max
};

/** 
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(startTime,endTime)
 */

// ["MyCalendarThree","book","book","book","book","book","book","book","book","book","book"]
// [[],[8,23],[35,48],[24,39],[10,22],[10,23],[8,22],[1,14],[36,50],[42,50],[42,50]]
const o = new MyCalendarThree()
console.log(o.book(8, 23))
console.log(o.book(35, 48))
console.log(o.book(24, 39))
console.log(o.book(10, 22))
console.log(o.book(10, 23))
console.log(o.book(8, 22))
console.log(o.book(1, 14))
console.log(o.book(36, 50))
console.log(o.book(42, 50))
console.log(o.book(42, 50))
