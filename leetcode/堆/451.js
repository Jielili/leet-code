/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const map = new Map()
    for(let i = 0; i< s.length; i++) {
        if(map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i], 1)
        }
    }
    const keys = Array.from(map.keys()).sort((a, b) => map.get(b) - map.get(a))
    let res = ''
    for(let i = 0; i< keys.length; i++) {
        res += keys[i].repeat(map.get(keys[i]))
    }
    return res
};

console.log(frequencySort('tree'))