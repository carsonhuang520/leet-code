/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return
  }
  this.matrix = matrix
  let m = this.matrix.length
  let n = this.matrix[0].length
  this.dp = new Array(m + 1)
  for (let i = 0; i <= m; i++) {
    this.dp[i] = new Array(n + 1).fill(0)
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      this.dp[i][j] = this.dp[i][j - 1] + this.dp[i - 1][j] - this.dp[i - 1][j - 1] + this.matrix[i - 1][j - 1]
    }
  }
}

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let res = 0
  res = this.dp[row2 + 1][col2 + 1] - this.dp[row1][col2 + 1] - this.dp[row2 + 1][col1] + this.dp[row1][col1]
  return res
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

var matrix = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
])

// var matrix = new NumMatrix([
//   [-1]
// ])

console.log(matrix.sumRegion(2, 1, 4, 3))
console.log(matrix.sumRegion(1, 1, 2, 2))
console.log(matrix.sumRegion(1, 2, 2, 4))
// console.log(matrix.sumRegion(0, 0, 0, 0))