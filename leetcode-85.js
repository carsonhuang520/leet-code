var maximalRectangle = function (matrix) {
  let m = matrix.length
  let n = matrix[0].length
  let dp = new Array(m)
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(0)
  }
  dp[0][0] = matrix[0][0] === '1' ? 1 : 0
  for (let i = 1; i < n; i++) {
    if (matrix[0][i] === '1') {
      dp[0][i] = dp[0][i - 1] + 1
    }
  }
  for (let i = 1; i < m; i++) {
    if (matrix[i][0] === '1') {
      dp[i][0] = dp[i - 1][0] + 1
    }
  }
  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      if(matrix[i][j] === '1') {

      }
    }
  }
  console.log(dp)
}

maximalRectangle([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]])