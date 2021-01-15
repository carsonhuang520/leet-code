var maxProfit = function (prices, fee) {
  let m = prices.length
  if (m === 0) {
    return 0
  }
  // let dp = new Array(m)
  // for (let i = 0; i < m; i++) {
  //   dp[i] = new Array(2)
  // }
  // for (let i = 0; i < m; i++) {
  //   // dp[i][0] = 0
  //   // dp[i][1] = Number.NEGATIVE_INFINITY
  //   if (i - 1 === -1) {
  //     dp[i][0] = 0
  //     dp[i][1] = -prices[i] - fee
  //     continue
  //   }
  //   dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
  //   dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i] - fee)
  // }
  let dp_i_0 = 0
  let dp_i_1 = Number.NEGATIVE_INFINITY
  for(let i = 0; i < m; i++) {
    let temp = dp_i_0
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, temp - prices[i] - fee)
  }
  return dp_i_0
}

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2))