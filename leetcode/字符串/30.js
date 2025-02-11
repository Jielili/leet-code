/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const map = new Map()
  const eachWordLen = words[0].length, wordNum = words.length
  const sumLen = eachWordLen * wordNum
  const sLength = s.length
  for (let i = 0; i < words; i++) {
    const subStr = words[i]
    let index = s.indexOf(subStr)
    while (index != -1) {
      map.set(index, i)
      index = s.indexOf(subStr, index + 1)
    }
    if (index === -1) {
      return []
    }
  }
  const res = []
  const keys = Array.from(map.keys()).sort((a, b) => a - b)
  for (let i = 0; i < keys.length - wordNum + 1; i++) {
    
  }
};


console.log('barfoothefoobarman', ["foo","bar"])
console.log('wordgoodgoodgoodbestword', ["word","good","best","word"])
console.log('barfoofoobarthefoobarman', ["bar","foo","the"])