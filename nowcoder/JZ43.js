function LeftRotateString(str, n) {
  if (str === null || str === '') {
    return ''
  }
  let len = str.length
  n = n % len
  let front = str.substring(0, n)
  return str.substring(n) + front
}
console.log(LeftRotateString('abcXYZdef', 4))
module.exports = {
  LeftRotateString: LeftRotateString,
}
