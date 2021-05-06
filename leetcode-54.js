/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
    return []
  }
  let res = []
  let row = matrix.length
  let col = matrix[0].length
  let level = Math.ceil(Math.min(row, col) / 2)
  let count = 0
  while (count < level) {
    let endX = row - count - 1
    let endY = col - count - 1
    for (let i = count; i <= endY; i++) {
      res.push(matrix[count][i])
    }
    if (count < endX) {
      for (let i = count + 1; i <= endX; i++) {
        res.push(matrix[i][endY])
      }
    }
    if (count < endX && count < endY) {
      for (let i = endY - 1; i >= count; i--) {
        res.push(matrix[endX][i])
      }
    }
    if (count < endX - 1 && count < endY) {
      for (let i = endX - 1; i >= count + 1; i--) {
        res.push(matrix[i][count])
      }
    }
    count++
  }
  return res
}

console.log(
  spiralOrder([
    [2, 5],
    [8, 4],
    [0, -1],
  ])
)
