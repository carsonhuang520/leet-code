var maximalSquare = function (matrix) {
  let m = matrix.length
  let n = matrix[0].length
  let dp = new Array(m)
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(0)
  }
  let res = 0
  for (let i = 0; i < n; i++) {
    if (matrix[0][i] === '1') {
      dp[0][i] = 1
      res = 1
    }
  }
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === '1') {
      dp[i][0] = 1
      res = 1
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === '1') {
        let min = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1])
        dp[i][j] = min + 1
        res = Math.max(res, dp[i][j])
      }
    }
  }
  console.log(dp)
  return res * res
}

console.log(
  maximalSquare([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '1', '1', '0'],
    ['1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['0', '0', '1', '1', '1'],
  ])
)
