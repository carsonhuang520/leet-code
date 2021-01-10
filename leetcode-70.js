var climbStairs = function (n) {
  if (n === 0) {
    return 0
  }
  let dp = new Array(n + 1).fill(1)
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

console.log(climbStairs(3))
