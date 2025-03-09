/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const dp = [['']]
    for(let i = 0; i< n; i++) {
        const arr = []
        for(let j = i; j >= 0; j--) {
            dp[j].forEach(m => {
                dp[i-j].forEach(n => {
                    arr.push(`(${m})${n}`)
                })
            })
        }
        dp.push(arr)
    }
    return dp[n-1]
};