/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let level = 0
    for(let log of logs) {
        if(log === '../') {
            level = Math.max(0, level - 1)
        } else if(log !== './') {
            level++
        }
    }
    return level
};