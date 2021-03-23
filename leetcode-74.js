/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix === null || matrix.length === 0) {
    return false
  }
  let rows = matrix.length
  let cols = matrix[0].length
  let row = 0
  let col = cols - 1
  while (row < rows && col >= 0) {
    if (matrix[row][col] === target) {
      return true
    } else if (matrix[row][col] > target) {
      col--
    } else {
      row++
    }
  }
  return false
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
)
