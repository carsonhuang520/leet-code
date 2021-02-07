var mySqrt = function (x) {
  if (x === 0) {
    return 0
  }
  let left = 1
  let right = x
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    let res = mid * mid
    if (res > x) {
      right = mid - 1
    } else if (res < x) {
      left = mid + 1
    } else if (res === x) {
      return mid
    }
  }
  return right
}

console.log(mySqrt(28))
