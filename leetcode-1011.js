var canFinish = function (weights, D, cap) {
  let i = 0
  for (let day = 0; day < D; day++) {
    let maxCap = cap
    while ((maxCap -= weights[i]) >= 0) {
      i++
      if (i === weights.length) {
        return true
      }
    }
  }
  return false
}
var shipWithinDays = function (weights, D) {
  let left = Math.max(...weights)
  let right = weights.reduce((prev, cur) => (prev += cur), 0) + 1
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)
    if (canFinish(weights, D, mid)) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))
