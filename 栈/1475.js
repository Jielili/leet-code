/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const stack = [], res = []
    for(let i = prices.length - 1; i >= 0; i--) {
        const cur_val = prices[i]
        while(stack[stack.length - 1] > cur_val) {
            stack.pop()
        }
        if(stack.length !== 0) {
            res.push(cur_val - stack[stack.length - 1])
        } else {
            res.push(cur_val)
        }
        stack.push(cur_val)
    }
    return res.reverse()
};