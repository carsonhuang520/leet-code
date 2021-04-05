function shell(nums) {
  let len = nums.length
  let gap = Math.floor(len / 2)
  while (gap >= 1) {
    for (let i = gap; i < len; i++) {
      while (i - gap >= 0 && nums[i] < nums[i - gap]) {
        ;[nums[i], nums[i - gap]] = [nums[i - gap], nums[i]]
        i = i - gap
      }
    }
    gap = Math.floor(gap / 2)
  }
  return nums
}

console.log(shell([58, 23, 67, 36, 40, 46, 35, 28, 20, 10]))
