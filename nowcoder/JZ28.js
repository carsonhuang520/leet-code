function MoreThanHalfNum_Solution(numbers) {
  let len = numbers.length
  let map = {}
  for (let i = 0; i < len; i++) {
    if (map[numbers[i]]) {
      map[numbers[i]]++
    } else {
      map[numbers[i]] = 1
    }
  }
  for (let key in map) {
    if (map[key] > Math.floor(len / 2)) {
      return key
    }
  }
  return 0
}

console.log(MoreThanHalfNum_Solution([1, 2, 3, 2, 2, 2, 5, 4, 2]))

module.exports = {
  MoreThanHalfNum_Solution: MoreThanHalfNum_Solution,
}
