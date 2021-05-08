/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
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

function reverse(nums, point) {
  for (let i = point, j = nums.length - 1; i < j; i++, j--) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
  return nums
}

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

function findPoint(nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      return i
    }
  }
  return 0
}

console.log(nextPermutation([3, 2, 1]))
