/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    return test(s, 0, s.length - 1, false)
};

var test = function (s, left, right, has_deleted) {
    while (left < right) {
        if (s[left] !== s[right] && !has_deleted) {
            has_deleted = true
            return test(s, left + 1, right, true) || test(s, left, right -1, true)
        }
        if (s[left] !== s[right]) {
            return false
        }
        left++
        right--
    }
    return true
}

console.log(validPalindrome('aba'))
