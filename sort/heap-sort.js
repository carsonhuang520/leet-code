function buildHeap(nums) {
  let len = nums.length
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapify(nums, i, len)
  }
}
function heapify(nums, i, len) {
  let left = 2 * i + 1
  let right = 2 * i + 2
  let largest = i
  if (left < len && nums[left] > nums[largest]) {
    largest = left
  }
  if (right < len && nums[right] > nums[largest]) {
    largest = right
  }
  if (largest !== i) {
    ;[nums[i], nums[largest]] = [nums[largest], nums[i]]
    heapify(nums, largest, len)
  }
}

function heapSort(nums) {
  buildHeap(nums)
  for (let i = nums.length - 1; i > 0; i--) {
    ;[nums[0], nums[i]] = [nums[i], nums[0]]
    heapify(nums, 0, i)
  }
  return nums
}

console.log(heapSort([4, 5, 1, 6, 2, 7, 3, 8]))
