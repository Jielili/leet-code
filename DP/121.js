/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0, low = prices[0], high = prices[0]
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < low) {
            low = prices[i]
        }
        high = prices[i]
        res = Math.max(res, prices[i] - low)
    }
    return res
};