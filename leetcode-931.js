var minFallingPathSum = function (matrix) {
  if (matrix.length === 0) {
    return 0
  }
  let m = matrix.length
  let n = matrix[0].length
  let dp = new Array(m)
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(0)
  }
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (i === m - 1) {
        dp[i][j] = matrix[i][j]
      } else {
        if (j - 1 >= 0 && j + 1 < n) {
          dp[i][j] =
            Math.min(dp[i + 1][j - 1], dp[i + 1][j], dp[i + 1][j + 1]) +
            matrix[i][j]
        } else if (j - 1 >= 0) {
          dp[i][j] = Math.min(dp[i + 1][j - 1], dp[i + 1][j]) + matrix[i][j]
        } else if (j + 1 < n) {
          dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + matrix[i][j]
        }
      }
    }
  }
  let res = Infinity
  for (let i = 0; i < n; i++) {
    res = Math.min(dp[0][i], res)
  }
  console.log(dp)
  return res
}

console.log(
  minFallingPathSum([
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9],
  ])
)
