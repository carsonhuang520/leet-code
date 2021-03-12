function printMatrix(matrix) {
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
    return []
  }
  let start = 0
  let row = matrix.length
  let col = matrix[0].length
  let res = []
  while (row > start * 2 && col > start * 2) {
    let endX = row - start - 1
    let endY = col - start - 1
    for (let i = start; i <= endY; i++) {
      res.push(matrix[start][i])
    }
    if (start < endX) {
      for (let i = start + 1; i <= endX; i++) {
        res.push(matrix[i][endY])
      }
    }
    if (start < endX && start < endY) {
      for (let i = endY - 1; i >= start; i--) {
        res.push(matrix[endX][i])
      }
    }
    if (start < endX - 1 && start < endY) {
      for (let i = endX - 1; i > start; i--) {
        res.push(matrix[i][start])
      }
    }

    start++
  }
  return res
}

console.log(printMatrix([[1], [6], [11], [16]]))

module.exports = {
  printMatrix: printMatrix,
}
