/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const res = [[1]]
    for (let i = 1; i < numRows; i++) {
        const new_arr = []
        const last = res[i - 1]
        for (let j = 0; j <= i; j++) {
            new_arr[j] = last[j - 1] || 0 + last[j] || 0
        }
        res.push(new_arr)
    }
    return res
};