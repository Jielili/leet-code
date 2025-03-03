/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let odd = 0, even = 0
    position.forEach(item => {
        if (item % 2 === 0) {
            even++
        } else {
            odd++
        }
    })
    return Math.min(odd, even) 
};