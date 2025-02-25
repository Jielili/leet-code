/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const sort_arr = new Array(score.length).fill(0).map((val, i) => i)
    sort_arr.sort((a, b) => score[b] - score[a])
    for(let i = 0; i< sort_arr.length; i++) {
        if(i === 0) {
            score[sort_arr[i]] = 'Gold Medal'
        } else if(i === 1) {
            score[sort_arr[i]] = 'Silver Medal'
        } else if(i === 2) {
            score[sort_arr[i]] = 'Bronze Medal'
        } else {
            score[sort_arr[i]] = (i + 1).toString()
        }
    }
    return score
};

console.log(findRelativeRanks([5,4,3,2,1]))
console.log(findRelativeRanks([10,3,8,9,4]))