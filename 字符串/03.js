/**
 * 3. 无重复字符的最长子串 
 * 给定一个字符串 s ，请你找出其中不含有重复字符的最长子串的长度。
 * */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring1 = function(s) {
  let left = 0, max = 0;
  let arr = []
  for (let right = 0; right < s.length; right++) {
    const char = s[right]
    if (!arr.includes(char)) {
      arr.push(char)
    } else {
      left = s.indexOf(char, left) + 1
      arr = s.substring(left, right+1).split('')
    }
    max = Math.max(max, right - left + 1)
  }
  return max
};

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))


// 用的Set
var lengthOfLongestSubstring = function (s) {
  let left = 0, max = 0
  const occ = new Set()
  for (let right = 0; right < s.length; right++) {
    const char = s[right]
    if (!occ.has(char)) {
      occ.add(char)
    } else {
      while (s.charAt(left) !== char) {
        occ.delete(s.charAt(left))
        left++
      }
      left++
    }
    max = Math.max(max, right - left + 1)
  }
  return max
};


console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))