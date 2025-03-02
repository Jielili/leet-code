/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b) => b-a)
    s.sort((a,b) => b-a)
    let res = 0
    while(g.length && s.length) {
        const cookie = s.pop()
        const kid = g[g.length - 1]
        if(cookie >= kid) {
            res++
            g.pop()
        }
    }
    return res
};