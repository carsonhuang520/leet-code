var coinChange = function (coins, amount) {
  if (amount === 0) {
    return 0
  }
  let dp = new Array(amount + 1).fill(amount + 1)
  dp[0] = 0
  for (let i = 0; i < dp.length; i++) {
    for (let coin of coins) {
      if (i - coin < 0) {
        continue
      }
      dp[i] = Math.min(dp[i], 1 + dp[i - coin])
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount]
}

console.log(coinChange([1, 2, 5], 11))
