/**
 * @param {number} n
 * @return {number}
 */
function countNumber(m) {
  if (m === 1) {
    return 10
  }
  return 9 * Math.pow(10, m - 1)
}
function digitAtIndex(n, digit) {
  let begin
  if (digit === 1) {
    begin = Math.floor(n / digit)
  } else {
    begin = Math.pow(10, digit - 1) + Math.floor(n / digit)
  }
  let from = digit - (n % digit)
  for (let i = 1; i < from; i++) {
    begin = Math.floor(begin / 10)
  }
  return begin % 10
}
var findNthDigit = function (n) {
  if (n < 0) {
    return -1
  }
  if (n < 10) {
    return n
  }
  let digit = 1
  while (n >= 0) {
    let numbers = countNumber(digit)
    if (n < numbers * digit) {
      return digitAtIndex(n, digit)
    }
    n = n - numbers * digit
    digit++
  }
  return -1
}

console.log(findNthDigit(1001))
