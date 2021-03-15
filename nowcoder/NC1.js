function solve(s, t) {
  let res = ''
  let carry = 0
  let i = s.length - 1
  let j = t.length - 1
  while (i >= 0 || j >= 0) {
    if (i >= 0 && j >= 0) {
      let sum = parseInt(s[i]) + parseInt(t[j]) + carry
      carry = Math.floor(sum / 10)
      res = (sum % 10) + res
      i--
      j--
    } else if (i >= 0) {
      let sum = parseInt(s[i]) + carry
      carry = Math.floor(sum / 10)
      res = (sum % 10) + res
      i--
    } else if (j >= 0) {
      let sum = parseInt(t[j]) + carry
      carry = Math.floor(sum / 10)
      res = (sum % 10) + res
      j--
    }
  }
  if (carry) {
    res = carry + res
  }
  return res
}
console.log(solve('1111', '9999'))
module.exports = {
  solve: solve,
}
