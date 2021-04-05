function select(nums) {
  let len = nums.length
  for (let i = 0; i < len - 1; i++) {
    let min = i
    for (let j = min + 1; j < len; j++) {
      if (nums[j] < nums[min]) {
        min = j
      }
    }
    ;[nums[min], nums[i]] = [nums[i], nums[min]]
  }
  return nums
}

console.log(select([12, 8, 24, 16, 1]))
