var guessNumber = function (n) {
  let left = 1
  let right = n
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (guess(mid) === -1) {
      left = mid - 1
    } else if (guess(mid) === 1) {
      right = mid + 1
    } else if (guess(mid) === 0) {
      return mid
    }
  }
}
