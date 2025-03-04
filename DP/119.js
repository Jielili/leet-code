/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res = [1]
    for (let i = 0; i <= rowIndex; i++) {
        const new_row = [1]
        for (let j = 1; j < i; j++) {
            new_row[j] = res[j - 1] + res[j]
        }
        new_row.push(1)
        res = new_row
    }
    return res
};