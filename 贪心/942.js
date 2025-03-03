/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let left = 0, right = s.length, res = []
    for(let i = 0; i< s.length; i++) {
        if(s.charAt(i) === 'I') {
            res.push(left++)
        } else {
            res.push(right--)
        }
    }
    res.push(left)
    return res
};