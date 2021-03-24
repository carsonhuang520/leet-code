/**
 *
 * @param matrix int整型二维数组 the matrix
 * @return int整型
 */
function minPathSum(matrix) {
  if (matrix === null || matrix.length === 0) {
    return 0
  }
  let row = matrix.length
  let col = matrix[0].length
  let dp = new Array(col).fill(0)
  dp[0] = matrix[0][0]
  for (let i = 1; i < col; i++) {
    dp[i] = dp[i - 1] + matrix[0][i]
  }
  for (let i = 1; i < row; i++) {
    dp[0] = matrix[i][0] + dp[0]
    for (let j = 1; j < col; j++) {
      dp[j] = Math.min(dp[j], dp[j - 1]) + matrix[i][j]
    }
  }
  return dp[col - 1]
}
console.log(
  minPathSum([
    [1, 3, 5, 9],
    [8, 1, 3, 4],
    [5, 0, 6, 1],
    [8, 8, 4, 0],
  ])
)
module.exports = {
  minPathSum: minPathSum,
}
