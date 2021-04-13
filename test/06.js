function test(n) {
  let dp = new Array(n + 1).fill(0)
  for (let i = 0; i <= n; i++) {
    if (i - 1 >= 0) {
      dp[i] = dp[i - 1] + 1
    }
    if (i - 5 >= 0) {
      dp[i] = dp[i - 5] + 1
    }
    if (i - 10 >= 0) {
      dp[i] = dp[i - 10] + 1
    }
  }
  return dp[n]
}
