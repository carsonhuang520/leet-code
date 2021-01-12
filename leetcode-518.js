var change = function (amount, coins) {
  let len = coins.length
  let dp = new Array(len + 1)
  for (let i = 0; i <= len; i++) {
    dp[i] = new Array(amount + 1).fill(0)
    dp[i][0] = 1
  }
  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= amount; j++) {
      if (j - coins[i - 1] < 0) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]]
      }
    }
  }
  return dp[len][amount]
}

console.log(change(5, [1, 2, 5]))