// var maxProfit = function (prices) {
//   let m = prices.length
//   if (m === 0) {
//     return 0
//   }
//   let dp = new Array(m)
//   for (let i = 0; i < m; i++) {
//     dp[i] = new Array(2)
//   }
//   for (let i = 0; i < m; i++) {
//     if (i - 1 === -1) {
//       dp[i][0] = 0
//       dp[i][1] = -prices[i]
//       continue
//     }
//     if (i - 2 === -1) {
//       dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
//       dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
//       continue
//     }
//     dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
//     dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i])
//   }
//   return dp[m - 1][0]
// }

var maxProfit = function (prices) {
  let m = prices.length
  if (m === 0) {
    return 0
  }
  let dp_i_0 = 0
  let dp_i_1 = Number.NEGATIVE_INFINITY
  let dp_pre_0 = 0
  for (let i = 0; i < m; i++) {
    let temp = dp_i_0
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, dp_pre_0 - prices[i])
    dp_pre_0 = temp
  }
  return dp_i_0
}

console.log(maxProfit([1, 2, 3, 0, 2]))