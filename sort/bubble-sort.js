function bubble(nums) {
  let len = nums.length
  for (let i = 0; i < len - 1; i++) {
    let flag = true
    for (let j = 0; j < len - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        ;[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
        flag = false
      }
    }
    if (flag) {
      break
    }
  }
  return nums
}

console.log(bubble([12, 8, 24, 16, 1]))
