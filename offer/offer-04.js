// var findNumberIn2DArray = function (matrix, target) {
//   let len = matrix.length
//   if (len === 0) {
//     return false
//   }
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j] === target) {
//         return true
//       }
//     }
//   }
//   return false
// }

var findNumberIn2DArray = function (matrix, target) {
  let len = matrix.length
  if (len === 0) {
    return false
  }
  let cols = matrix[0].length
  let row = 0
  let col = cols - 1
  while (row < len && col >= 0) {
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
  findNumberIn2DArray(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
)
