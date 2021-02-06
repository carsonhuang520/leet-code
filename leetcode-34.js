var leftBound = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target) {
      right = mid - 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    }
  }
  if (left >= nums.length || nums[left] !== target) {
    return -1
  }
  return left
}
var rightBound = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target) {
      left = mid + 1
    } else if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    }
  }
  if (right < 0 || nums[right] !== target) {
    return -1
  }
  return right
}
var searchRange = function (nums, target) {
  let len = nums.length
  if (len === 0) {
    return [-1, -1]
  }
  let left = leftBound(nums, target)
  let right = rightBound(nums, target)
  return [left, right]
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 6))
