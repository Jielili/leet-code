/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []
    function DFS(path, left, right) {
        if(left === n && right === n) {
            res.push(path)
        }

        if(left < n) {
            DFS(path+'(', left + 1, right)
        }
        if(right < left) {
            DFS(path+')', left, right + 1)
        }
    }
    DFS('', 0, 0)
    return res
};

console.log(generateParenthesis(3))
console.log(generateParenthesis(1))