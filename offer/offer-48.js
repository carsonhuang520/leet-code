/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) {
    return 0
  }
  let window = {}
  let res = 0
  let right = 0
  let left = 0
  while (right < s.length) {
    let c = s[right]
    right++
    if (!window[c]) {
      window[c] = 0
    }
    window[c]++
    while (window[c] > 1) {
      let d = s[left]
      left++
      window[d]--
    }
    res = Math.max(res, right - left)
  }
  return res
}
console.log(lengthOfLongestSubstring('abcabcbb'))
