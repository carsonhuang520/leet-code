var maxProfit = function (k, prices) {
  let m = prices.length
  if (m === 0) {
    return 0
  }
  let dp = new Array(m)
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(k + 1)
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j <= k; j++) {
      dp[i][j] = new Array(2)
    }
  }
  for (let i = 0; i < m; i++) {
    dp[i][0][0] = 0
    dp[i][0][1] = Number.NEGATIVE_INFINITY
    for (let j = 1; j <= k; j++) {
      if (i - 1 === -1) {
        dp[i][j][0] = 0 // dp[i][j][0] = Math.max(dp[-1][j][0], dp[-1][j][1] + prices[i]) = Math.max(0, -Infinity + prices[i]) = 0
        dp[i][j][1] = -prices[i] // dp[i][j][1] = Math.max(dp[-1][j][1], dp[-1][j - 1][0] - prices[i]) = Math.max(-Infinity, 0 - prices[i]) = -prices[i]
        continue
      }
      dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i])
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i])
    }
  }
  return dp[m - 1][k][0]
}

console.log(maxProfit(2, [3, 2, 6, 5, 0, 3]))