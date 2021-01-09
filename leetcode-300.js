var lengthOfLIS = function (nums) {
  if (nums.length === 0) {
    return 0
  }
  let len = nums.length
  let dp = new Array(len).fill(1)
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], 1 + dp[j])
      }
    }
  }
  console.log(dp)
  return Math.max(...dp)
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))
