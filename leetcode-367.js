var isPerfectSquare = function (num) {
  if (num === 0) {
    return true
  }
  let left = 1
  let right = num + 1
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)
    let res = mid * mid
    if (res > num) {
      right = mid
    } else if (res < num) {
      left = mid + 1
    } else if (res === num) {
      return true
    }
  }
  return false
}

console.log(isPerfectSquare(16))
console.log(isPerfectSquare(14))
