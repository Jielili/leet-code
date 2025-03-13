/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    // 可能的数字 1，2，3，4，5，6，7，8，9
    // 10，11，12，13，14，15，16，17，18，19
    // 20，21，22，23，24，25，26
    if(s[0] === '0') {
        return 0
    }
    let p = 1, q = 1, pre = s[0]
    for(let i = 1; i < s.length; i++) {
        cur = s[i]
        const num = Number(pre + cur)
        const temp = (cur === '0' ? 0 : q) + (num > 9 && num < 27 ? p : 0)
        p = q
        q = temp
        pre = cur
    }
    return q
};
