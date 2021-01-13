var integerBreak = function(n) {
  if(n === 0) {
    return 0
  }
  let dp = new Array(n + 1).fill(0)
  dp[2] = 1
  for(let i = 3; i <= n; i++) {
    for(j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], (i - j) * j, dp[i - j] * j)
    }
  }
  console.log(dp)
  return dp[n]
}

console.log(integerBreak(10))