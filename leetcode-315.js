var findIndex = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] === target) {
      right = mid - 1
    }
  }
  return left
}

var countSmaller = function (nums) {
  let len = nums.length
  if (len === 0) {
    return nums
  }
  let res = new Array(len).fill(0)
  let sorted = []
  for (let i = len - 1; i >= 0; i--) {
    const index = findIndex(sorted, nums[i])
    sorted.splice(index, 0, nums[i])
    res[i] = index
  }
  return res
}

console.log(countSmaller([5, 2, 6, 1]))
