var divide = function (dividend, divisor) {
  if (dividend === 0) {
    return 0
  }
  if (divisor === 0) {
    return -1
  }
  if (dividend === -1 * Math.pow(2, 31) && divisor === -1) {
    return Math.pow(2, 31) - 1
  }
  let negative = (dividend ^ divisor) < 0
  let dividend_tmp = Math.abs(dividend)
  let divisor_tmp = Math.abs(divisor)
  let res = 0
  let count = 1
  while (divisor_tmp <= dividend_tmp) {
    dividend_tmp -= divisor_tmp
    res += count
    if (dividend_tmp < Math.abs(divisor)) {
      break
    }
    if (dividend_tmp - divisor_tmp < divisor_tmp) {
      divisor_tmp = Math.abs(divisor)
      count = 1
      continue
    }
    divisor_tmp += divisor_tmp
    count += count
  }
  return negative ? 0 - res : res
}

console.log(divide(-2147483648, -1))
