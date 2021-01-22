var canPlaceFlowers = function (flowerbed, n) {
  let m = flowerbed.length
  for (let i = 0; i < m; i += 2) {
    if (flowerbed[i] === 0) {
      if (i === m - 1 || flowerbed[i + 1] === 0) {
        n--
      } else {
        i++
      }
    }
  }
  return n <= 0
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1))
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2))
console.log(canPlaceFlowers([0], 1))