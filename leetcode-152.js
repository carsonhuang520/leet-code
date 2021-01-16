var maxProduct = function (nums) {
  let m = nums.length
  if (m === 0) {
    return 0
  }
  let dp = new Array(m).fill(0)
  let min = new Array(m).fill(0)
  dp[0] = min[0] = nums[0]
  for (let i = 1; i < m; i++) {
    dp[i] = Math.max(dp[i - 1] * nums[i], nums[i], min[i - 1] * nums[i])
    min[i] = Math.min(min[i - 1] * nums[i], nums[i], dp[i - 1] * nums[i])
  }
  console.log(dp)
  console.log(min)
  return Math.max(...dp)
}

console.log(maxProduct([-2, 3, -4]))