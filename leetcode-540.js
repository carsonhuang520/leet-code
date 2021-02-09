var singleNonDuplicate = function (nums) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === nums[mid + 1]) {
      if ((right - mid) % 2 === 1) {
        right = mid - 1
      } else {
        left = mid + 2
      }
    } else if (nums[mid] === nums[mid - 1]) {
      if ((right - mid) % 2 === 1) {
        left = mid + 1
      } else {
        right = mid - 2
      }
    } else {
      return nums[mid]
    }
  }
  return nums[left]
}

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]))
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]))
