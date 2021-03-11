var spiralOrder = function (matrix) {
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
    return []
  }
  let row = matrix.length
  let col = matrix[0].length
  let res = []
  let start = 0
  while (row > start * 2 && col > start * 2) {
    let endX = col - start - 1
    let endY = row - start - 1
    for (let i = start; i <= endX; i++) {
      res.push(matrix[start][i])
    }
    if (start < endY) {
      for (let i = start + 1; i <= endY; i++) {
        res.push(matrix[i][endX])
      }
    }
    if (start < endY && start < endX) {
      for (let i = endX - 1; i >= start; i--) {
        res.push(matrix[endY][i])
      }
    }
    if (start < endY - 1 && start < endX) {
      for (let i = endY - 1; i >= start + 1; i--) {
        res.push(matrix[i][start])
      }
    }
    start++
  }
  return res
}

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
)
