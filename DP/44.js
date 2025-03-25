/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {

    // 定义一个p_len + 1长的数组
    // 每个元素dp[j]代表p[0,j - 1]是否匹配s的子串
    const dp = new Array(p.length + 1).fill(false)
    // 0代表'', ''匹配''
    dp[0] = true

    // 初始化p[0, j],是否匹配 ''
    for (let j = 1; j < dp.length; j++) {
        if (p[j - 1] === '*') {
            dp[j] = true
        } else {
            break
        }
    }


    // 确认p[0, j - 1]是否能匹配s[0, i]
    for (let i = 0; i < s.length; i++) {
        // 记录上一个元素上一个循环的结果s[i - 1] 和 p[j - 2]
        let pre = dp[0]
        dp[0] = false
        for (let j = 1; j < dp.length; j++) {
            // 暂存p[0, j - 1] 和 s[0, i - 1] 的结果
            const cur = dp[j]
            // 如果s[i] 和 [j - 1]匹配成功，直接取用s[i - 1]和p[j - 2](pre)的结果
            if (s[i] === p[j - 1]) {
                dp[j] = pre
            // 如果p[j - 1]是'?'，那么可以匹配任意字符，还是直接取pre
            } else if (p[j - 1] === '?') {
                dp[j] = pre
            // 如果是'*', 可以匹配0到无穷个字符
            } else if (p[j - 1] === '*') {
                // 1. 不对当前字符做匹配，那我们取s[0,i]与p[j - 2]的结果(dp[j - 1])
                // -. 我们匹配了s[i]，那直接取s[0, i - 1]的匹配结果，
                // -. 2. 如果当前'*'没和s[i - 1]匹配，那我们取pre
                // -. 3. 如果当前'*'匹配了s[i - 1]，那我们取dp[i](此时dp[i]还是上一轮的结果，没更新呢，不用该担心)
                dp[j] = pre || dp[j - 1] || dp[j]
            } else {
                dp[j] = false
            }
            pre = cur
        }
    }
    return dp[p.length]
};

