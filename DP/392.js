/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isSubsequence = function(s, t) {
//     let p = 0, q = 0
//     const s_len = s.length, t_len = t.length
//     while (p < s_len && q < t_len) {
//         if (s.charAt(p) === t.charAt(q)) {
//             p++
//             q++
//         } else {
//             q++
//         }
//     }
//     return p === s_len
// };

var isSubsequence = function(s, t) {
    let p = 0, q = 0
    const s_len = s.length, t_len = t.length
    while (p < s_len && q < t_len) {
        if (s.charAt(p) === t.charAt(q)) {
            p++
            q++
        } else {
            q++
        }
    }
    return p === s_len
};