var judgeSquareSum = function (c) {
  let mid = Math.floor(Math.sqrt(c))
  let left = 0
  let right = mid
  while (left <= right) {
    let sum = left * left + right * right
    if (sum > c) {
      right--
    } else if (sum < c) {
      left++
    } else {
      return true
    }
  }
  return false
}

console.log(judgeSquareSum(4))
console.log(judgeSquareSum(2))
console.log(judgeSquareSum(1))
