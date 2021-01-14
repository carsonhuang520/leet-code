var minSteps = function (n) {
  let dp = new Array(n + 1).fill(0)
  for (let i = 2; i <= n; i++) {
    dp[i] = i
    for (let j = 2; j <= Math.floor(Math.sqrt(n)); j++) {
      if (i % j === 0) {
        dp[i] = dp[i / j] + dp[j]
        break;
      }
    }
  }
  return dp[n]
}

console.log(minSteps(10))