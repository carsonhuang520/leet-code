var convertToBase7 = function (num) {
  if (num === 0) {
    return '0'
  }
  let isNegative = num < 0
  if (isNegative) {
    num = -num
  }
  let res = ''
  while (num) {
    let a = Math.floor(num / 7)
    let b = num % 7
    res = b + res
    num = a
  }
  if (isNegative) {
    res = '-' + res
  }
  return res
}

console.log(convertToBase7(-100))
