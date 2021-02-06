// 寻找一个数的二分搜索
function binarySearch(nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    // 若改成 while(left < right)，终止条件是 left === right，则最后的返回要修改
    let mid = left + Math.floor((right - left) / 2)
    if (target === nums[mid]) {
      return mid
    } else if (target > nums[mid]) {
      left = mid + 1
    } else if (target < nums[mid]) {
      right = mid - 1
    }
  }
  return -1 // 改成 return nums[left] === target ? left : -1
}

// 寻找左侧边界的二分搜索
function leftBound(nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    }
  }
  if (left >= nums.length || nums[left] !== target) {
    return -1
  }
  return left
}

// 寻找右侧边界的二分搜索
function rightBound(nums, target) {
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
