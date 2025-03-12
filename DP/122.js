/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0
    let pre = Number.MAX_SAFE_INTEGER
    let min = pre, max = 0
    for (let item of prices) {
        if (item > pre) {
            max = item
        } else {
            res +=  max - min
            min = item
            max = 0
        }
        pre = item
    }
    return res 
};

maxProfit([2,4,1])