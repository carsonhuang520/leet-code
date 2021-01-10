var numDecodings = function (s) {
  if (s.length === 0 || s[0] === '0') {
    return 0
  }
  let n = s.length
  if (n === 1) {
    return 1
  }
  let dp = new Array(n + 1).fill(1)
  dp[1] = 1
  let prev = parseInt(s[0])
  for (let i = 2; i <= n; i++) {
    let cur = s[i - 1]
    if (cur === '0' && (prev > 2 || prev === 0)) {
      return 0
    }
    if (prev === 1 || (prev === 2 && parseInt(cur) < 7)) {
      if (cur === '0') {
        dp[i] = dp[i - 2]
      } else {
        dp[i] = dp[i - 1] + dp[i - 2]
      }
    } else {
      dp[i] = dp[i - 1]
    }
    prev = parseInt(cur)
  }
  console.log(dp)
  return dp[n]
}

console.log(numDecodings('230'))
