
var MyCalendar = function() {
    this.task = []
};

/** 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendar.prototype.book = function (startTime, endTime) {
  const len = this.task.length
  for (let i = 0; i < len; i++) {
    const [m, n] = this.task[i]
    if (!(endTime <= m || startTime >= n)) {
      return false
    }
  }
  this.task.push([startTime, endTime])
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(startTime,endTime)
 */

const obj = new MyCalendar()
obj.book(10, 20)
obj.book(15, 25)