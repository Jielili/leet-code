/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {

  const wordLen = words[0].length
  const wordNum = words.length
  const sLen = s.length
  const res = new Set()
  const map = new Map()

  words.forEach(item => {
    const list = map.get(item)
    map.set(item, (map.get(item) || 0) + 1)
  })

  for (let i = 0; i < wordLen; i++){
    let count = 0
    let left = i, right = i
    const s_map = new Map()
    while (right < sLen) {
      const cur_word = s.substring(right, right + wordLen)
      const cur_word_num = (s_map.get(cur_word) || 0) + 1
      s_map.set(cur_word, cur_word_num)
      count++
      right += wordLen
      if (cur_word_num > (map.get(cur_word)||0)) {
        while (left < right) {
          const left_word = s.substring(left, left + wordLen)
          s_map.set(left_word, s_map.get(left_word) -1)
          count--
          left += wordLen
          if (left_word === cur_word) {
            break;
          }
        }
      }
      if (count === wordNum) {
        res.add(left)
      }
    }
  }

  return Array.from(res)
}


console.log(findSubstring('barfoothefoobarman', ["foo","bar"]))
console.log(findSubstring('barfoofoobarthefoobarman', ["bar", "foo", "the"]))
console.log(findSubstring('wordgoodgoodgoodbestword', ["word","good","best","word"]))
console.log(findSubstring('wordgoodgoodgoodbestword', ["word","good","best","good"]))
console.log(findSubstring('ababababab', ["ababa","babab"]))
console.log(findSubstring('bcabbcaabbccacacbabccacaababcbb', ["c","b","a","c","a","a","a","b","c"]))

