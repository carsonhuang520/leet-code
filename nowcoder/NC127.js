function LCS(str1, str2) {
  if (str1 === '' || str2 === '') {
    return '-1'
  }
  let m = str1.length
  let n = str2.length
  let dp = new Array(m + 1)
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0)
  }
  let max = 0
  let end = 0
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = 0
      }
      if (dp[i][j] > max) {
        end = j - 1
        max = dp[i][j]
      }
    }
  }
  console.log(dp)
  if (max === 0) {
    return '-1'
  }
  return str2.substr(end - max + 1, max)
}

console.log(LCS('1ee2345', '12345'))
