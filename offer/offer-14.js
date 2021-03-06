var cuttingRope = function (n) {
  if (n < 2) {
    return 0
  }
  if (n === 2) {
    return 1
  }
  if (n === 3) {
    return 2
  }
  let dp = new Array(n + 1).fill(0)
  dp[1] = 1
  dp[2] = 2
  dp[3] = 3
  for (let i = 4; i <= n; i++) {
    let max = 0
    for (j = 1; j <= Math.floor(i / 2); j++) {
      let t = dp[j] * dp[i - j]
      if (max < t) {
        max = t
      }
      dp[i] = max
    }
  }
  return dp[n] % 1000000007
}

console.log(cuttingRope(1000))
