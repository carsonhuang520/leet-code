// var coinChange = function (coins, amount) {
//   if (amount === 0) {
//     return 0
//   }
//   let dp = new Array(amount + 1).fill(amount + 1)
//   dp[0] = 0
//   for (let i = 0; i < dp.length; i++) {
//     for (let coin of coins) {
//       if (i - coin < 0) {
//         continue
//       }
//       dp[i] = Math.min(dp[i], 1 + dp[i - coin])
//     }
//   }
//   return dp[amount] === amount + 1 ? -1 : dp[amount]
// }

// console.log(coinChange([1, 2, 5], 11))


// 使用 0-1 背包套路

var coinChange = function (coins, amount) {
  if (amount === 0) {
    return 0
  }
  let len = coins.length
  let dp = new Array(len + 1)
  for (let i = 0; i <= len; i++) {
    dp[i] = new Array(amount + 1).fill(amount + 1)
    dp[i][0] = 0
  }
  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= amount; j++) {
      if (j - coins[i - 1] < 0) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - coins[i - 1]] + 1)
      }
    }
  }
  return dp[len][amount] === amount + 1 ? -1 : dp[len][amount]
}

console.log(coinChange([2], 3))