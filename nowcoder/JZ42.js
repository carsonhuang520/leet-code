function FindNumbersWithSum(array, sum) {
  let left = 0
  let right = array.length - 1
  let mul = Infinity
  let minLeft
  let maxRight
  while (left < right) {
    let temp = array[left] + array[right]
    if (temp > sum) {
      right--
    } else if (temp < sum) {
      left++
    } else {
      if (mul > array[left] * array[right]) {
        mul = array[left] * array[right]
        minLeft = array[left]
        maxRight = array[right]
      }
      left++
      right--
    }
  }
  return minLeft === undefined ? [] : [minLeft, maxRight]
}
console.log(FindNumbersWithSum([1, 2, 4, 7, 11, 15], 15))
module.exports = {
  FindNumbersWithSum: FindNumbersWithSum,
}
