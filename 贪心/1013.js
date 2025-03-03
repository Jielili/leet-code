/**
 * @param {number[]} arr
 * @return {boolean}
 */
const _ = require('lodash')
var canThreePartsEqualSum = function(arr) {
    let sum = arr.reduce((a, b) => a + b, 0);
    if (sum % 3 !== 0) return false;

    let target = sum / 3;
    let curSum = 0, count = 0;

    for (let num of arr) {
        curSum += num;
        if (curSum === target) {
            count++;
            curSum = 0;
        }
        if (count === 3) return true;
    }

    return false
};


console.log(canThreePartsEqualSum([1,-1,1,-1]))