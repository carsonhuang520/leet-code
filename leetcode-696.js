var countBinarySubstrings = function (s) {
  let pre = 0
  let cur = 1
  let res = 0
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      cur++
    } else {
      pre = cur
      cur = 1
    }
    if (pre >= cur) {
      res++
    }
  }
  return res
}

console.log(countBinarySubstrings('00110011'))
