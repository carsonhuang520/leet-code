/* 最基本的二分查找算法 */
function search(nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = left + Math.floor((right - floor) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}

/* 寻找左边界的二分查找算法 */
function left_bound(nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target) {
      right = mid - 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  if (left >= nums.length || nums[left] !== target) {
    return -1
  }
  return left
}

/* 寻找右边界的二分查找算法 */
function right_bound(nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  if (right < 0 || nums[right] !== target) {
    return -1
  }
  return right
}
