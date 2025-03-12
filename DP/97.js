
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    const s1_len = s1.length, s2_len = s2.length, s3_len = s3.length
    if (s3_len === 0) return true
    if (s1_len + s2_len !== s3_len) return false
    
    const dp = new Array(s2_len + 1).fill(false)
    dp[0] = true
    
    for (let j = 0; j < s2_len; j++) {
        dp[j + 1] = dp[j] && s2[j] === s3[j]
    }

    for (let i = 0; i < s1_len; i++) {
        dp[0] = dp[0] && s1[i] === s3[i]
        for (let j = 0; j < s2_len; j++) {
            dp[j + 1] = (s3[i + j + 1] === s1[i] && dp[j + 1]) || (s3[i + j + 1] === s2[j] && dp[j])
        }
    }
    return dp[s2_len]
}


console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"))


// var isInterleave1 = function (s1, s2, s3) {
//     if (s3.length === 0) return true
//     if (s1.length + s2.length !== s3.length) return false
    
//     const memo = new Array(s1.length + 1).fill(0).map(() => new Array(s2.length + 1).fill(-1))
//     return dp(s1, s2, s3, 0, 0, 0, memo)
// }


// var dp = function (s1, s2, s3, i, j, k, memo) {

//     if (k === s3.length) {
//         return true
//     }
    
//     if (s3[k] !== s1[i] && s3[k] !== s2[j]) {
//         return false
//     }

//     if (memo[i][j] !== -1) {
//         return memo[i][j]
//     }


//     if (s3[k] === s1[i] && dp(s1, s2, s3, i + 1, j, k + 1, memo)) {
//         memo[i][j] = true
//         return true
//     }

//     if (s3[k] === s2[j] && dp(s1, s2, s3, i, j + 1, k + 1, memo)) {
//         memo[i][j] = true
//         return true
//     }


//     memo[i][j] = false
//     return false
// }
