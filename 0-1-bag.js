var knapsack = function (N, W, wt, val) {
  let dp = new Array(N + 1)
  for (let i = 0; i < N + 1; i++) {
    dp[i] = new Array(W + 1).fill(0)
  }
  for (let i = 1; i <= N; i++) {
    for (let j = 0; j <= W; j++) {
      if (j - wt[i - 1] < 0) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - wt[i - 1]] + val[i - 1])
      }
    }
  }
  console.log(dp)
  return dp[N][W]
}

console.log(knapsack(3, 4, [2, 1, 3], [4, 2, 3]))