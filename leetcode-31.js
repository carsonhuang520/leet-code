/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 尽量保持高位不变，低位在最小的范围内变换顺序
var nextPermutation = function (nums) {
  let point = findPoint(nums)
  if (point === 0) {
    return reverse(nums, point)
  }
  let temp = [...nums]
  temp = exchangeHead(nums, point)
  temp = reverse(temp, point)
  return temp
}

// 把原来的逆序区域转为顺序状态
function reverse(nums, point) {
  for (let i = point, j = nums.length - 1; i < j; i++, j--) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
  return nums
}

// 让逆序区域的前一位和逆序区域中大于它的最小的数字交换位置
function exchangeHead(nums, point) {
  let temp = nums[point - 1]
  for (let j = nums.length; j > 0; j--) {
    if (temp < nums[j]) {
      nums[point - 1] = nums[j]
      nums[j] = temp
      break
    }
  }
  return nums
}

// 从后往前查看逆序区域，找到逆序区域的前一位，也就是数字置换的边界
function findPoint(nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      return i
    }
  }
  return 0
}

console.log(nextPermutation([3, 2, 1]))
