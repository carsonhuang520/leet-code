var timeOf = function (speed, n) {
  return Math.floor(n / speed) + (n % speed > 0 ? 1 : 0)
}
var canFinish = function (piles, speed, H) {
  let time = 0
  for (let n of piles) {
    time += timeOf(speed, n)
  }
  return time <= H
}
var minEatingSpeed = function (piles, H) {
  let max = Math.max(...piles)
  let left = 1
  let right = max + 1
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)
    if (canFinish(piles, mid, H)) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}

console.log(minEatingSpeed([30, 11, 23, 4, 20], 6))
