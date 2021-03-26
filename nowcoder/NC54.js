/**
 *
 * @param num int整型一维数组
 * @return int整型二维数组
 */
function twoSum(num, i, target) {
  let left = i
  let right = num.length - 1
  let res = []
  while (left < right) {
    let sum = num[left] + num[right]
    let leftTemp = num[left]
    let rightTemp = num[right]
    if (sum === target) {
      res.push([num[left], num[right]])
      while (left < right && num[left] === leftTemp) {
        left++
      }
      while (left < right && num[right] === rightTemp) {
        right--
      }
    } else if (sum > target) {
      right--
    } else {
      left++
    }
  }
  return res
}
function threeSum(num) {
  if (num.length < 3) {
    return []
  }
  num.sort((a, b) => a - b)
  let res = []
  for (let i = 0; i < num.length; i++) {
    if (i > 0 && num[i] === num[i - 1]) {
      continue
    }
    let temp = twoSum(num, i + 1, -num[i])
    if (temp.length) {
      temp.forEach((item) => {
        res.push([num[i], ...item])
      })
    }
  }
  return res
}
console.log(threeSum([-2, 0, 1, 1, 2]))
module.exports = {
  threeSum: threeSum,
}
