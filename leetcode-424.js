var characterReplacement = function (s, k) {
  let window = {}
  for (let i = 0; i < 26; i++) {
    let c = String.fromCharCode(65 + i)
    window[c] = 0
  }
  let left = 0
  let right = 0
  let res = 0
  let max = 0
  while (right < s.length) {
    let c = s[right]
    right++
    window[c]++
    max = Math.max(max, window[c])
    if (right - left > max + k) {
      let d = s[left]
      window[d]--
      left++
    }
    res = Math.max(res, right - left)
  }
  return res
}

console.log(characterReplacement('AABABBA', 1))
