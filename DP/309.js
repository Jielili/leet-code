/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const len = prices.length
    const dp = new Array(len).fill(new Array(3).fill(0))
    dp[0][0] = -prices[0]
    for (let i = 1; i < len; i++) {
        // 买入 -- 比较新买入（上一个冷冻期减去当前价格），和继续持有（上一个买入值）
        dp[i][0] = Math.max(dp[i - 1][2] - prices[i], dp[i - 1][0])

        // 冷冻期 -- 比较上一个冷冻期和上一个的卖出后价格
        dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2])

        // 卖出 -- 上一个的持有价格 加上 当前价格
        dp[i][1] = dp[i - 1][0] + prices[i]
    }

    return Math.max(...dp[len - 1])
};


var maxProfit1 = function (prices) {
    const len = prices.length
    const dp = new Array(len).fill(0)
    for (let i = 1; i < len; i++) {
        for (let j = i - 1; j >= 0; j--) {
            const profit = prices[i] - prices[j] + (dp[j - 2] || 0)
            dp[i] = Math.max(dp[i], profit)
        }
    }
    return dp[len - 1]
};