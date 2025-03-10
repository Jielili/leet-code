/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

// 首先用暴力递归，来找出状态转移方程
var minDistance = function(word1, word2) {
    return dp(word1, 0, word2, 0)
};

var dp = function (word1, i, word2, j) {
    const word1_len = word1.length, word2_len = word2.length
    // 停止递归条件
    // word1 已经处理完毕，里面应该没有不合适的字母了，剩下的就是添加剩余的word2字母
    if (i === word1.length) {
        return word2_len - j
    } 
    // word2 已经处理完毕，word1处理到现在已经包含word2了，剩下的就是把没处理的word1字母删除掉
    if (j === word2.length) {
        return word1_len - i
    }

    // 如果当前字符互相匹配，i,j移位，不加操作数
    if (word1[i] === word2[j]) {
        return dp(word1, i + 1, word2, j + 1)
    }

    // 如果当前字符不匹配，做增加删除和替换操作，分别加操作数1
    // 我们不记录当前字符串变化，只关心移位问题，只关心i，j位置匹配成功否，匹配成功可+1，没匹配成功就不变
    
    // 增加，把word2[j] 增加到i之前
    const temp1 = dp(word1, i, word2, j + 1) + 1

    // 删除操作，我们把i位置的字母删除, 所以i++， j不变
    const temp2 = dp(word1, i + 1, word2, j) + 1

    // 替换操作，i++， j++
    const temp3 = dp(word1, i + 1, word2, j + 1) + 1

    return Math.min(temp1, Math.min(temp2, temp3))
}