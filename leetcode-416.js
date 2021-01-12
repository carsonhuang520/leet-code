var canPartition = function (nums) {
  let sum = nums.reduce((prev, cur) => {
    prev += cur
    return prev
  }, 0)
  if (sum % 2) {
    return false
  }
  let target = sum / 2
  let len = nums.length
  let dp = new Array(len + 1)
  for (let i = 0; i < len + 1; i++) {
    dp[i] = new Array(target + 1).fill(false)
  }
  dp[0][0] = true
  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= target; j++) {
      if (j - nums[i - 1] < 0) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]
      }
    }
  }
  console.log(dp)
  return dp[len][target]
}

console.log(canPartition([1, 2, 5]))