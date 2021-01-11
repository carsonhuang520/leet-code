var maxSubArray = function (nums) {
  let len = nums.length
  if (len === 0) {
    return 0
  }
  let dp = new Array(len).fill(0)
  dp[0] = nums[0]
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
  }
  return Math.max(...dp)
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
