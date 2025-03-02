/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const [i, j] = edges[0]
    const [m, n] = edges[1]
    if(i === m || i === n) {
        return i
    } else {
        return j
    }
};