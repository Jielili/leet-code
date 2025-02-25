/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const sequence = [], res = []
  strs.forEach(str => {
    const sorted = str.split('').sort((a, b) => {
      if (a < b) {
        return -1
      } else {
        return 1
      }
    }).join('')
    if (sequence.includes(sorted)) {
      const i = sequence.indexOf(sorted)
      res[i].push(str)
    } else {
      sequence.push(sorted)
      res.push([str])
    }
  })
  return res
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))



/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams1 = function(strs) {
  const map = new Map()
  for (let str of strs) {
    const sorted = Array.from(str).sort().join('')
    const a = map.get(sorted)
    if (a) {
      a.push(str)
    } else {
      map.set(sorted, [str])
    }
  }
  return Array.from(map.values())
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))