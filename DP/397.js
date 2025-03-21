/**
 * @param {number} n
 * @return {number}
 */

var integerReplacement1 = function (n) {
    if (n === 1) {
        return 0
    }
    if (n % 2 === 0) {
        return integerReplacement(n/2) + 1
    } else {
        return Math.min(integerReplacement(n - 1), integerReplacement(n + 1)) + 1
    }
};
