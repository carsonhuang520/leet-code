var maxProfit = function (prices) {
  let m = prices.length
  if (m === 0) {
    return 0
  }
  let dp = new Array(m)
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(3)
    for (let j = 0; j < 3; j++) {
      dp[i][j] = new Array(2)
    }
  }
  for (let i = 0; i < m; i++) {
    dp[i][0][0] = 0
    dp[i][0][1] = Number.NEGATIVE_INFINITY
    for (let j = 1; j <= 2; j++) {
      if (i - 1 === -1) {
        dp[i][j][0] = 0
        dp[i][j][1] = -prices[i]
        continue
      }
      dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i])
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i])
    }
  }
  return dp[m - 1][2][0]
}

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]))