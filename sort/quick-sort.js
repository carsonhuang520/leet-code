function partition(nums, left, right) {
  let key = nums[left]
  while (left < right) {
    while (left < right && nums[right] >= key) {
      right--
    }
    nums[left] = nums[right]
    while (left < right && nums[left] <= key) {
      left++
    }
    nums[right] = nums[left]
  }
  nums[left] = key
  return left
}
function quickSort(nums, left, right) {
  left = typeof left !== 'number' ? 0 : left
  right = typeof right !== 'number' ? nums.length - 1 : right
  if (left < right) {
    const partitionIndex = partition(nums, left, right)
    quickSort(nums, left, partitionIndex - 1)
    quickSort(nums, partitionIndex + 1, right)
  }
  return nums
}

console.log(quickSort([72, 6, 57, 88, 60, 42, 83, 73, 48, 85]))
