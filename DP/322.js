/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */


var coinChange = function (coins, amount) {
    
};


var DFS = function (coins, amount) {
    if (amount < 0) {
        return -1
    }
    if (amount === 0) {
        return 0
    }
    for (let i = 0; i < coins; i++) {
        const left = DFS(coins, amount - coins[i])
        if (left !== -1) {
            return left + 1
        }
    }
    return -1
}


var coinChange1 = function (coins, amount) {
    const dp = new Array(amount + 1).fill(amount + 1)
    dp[0] = 0
    for (let i = 0; i <= amount; i++) {
        for (let coin of coins) {
            if (i >= coin) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
            }
        }
    }
    return dp[amount] === amount + 1 ? -1: dp[amount]
};
