var numIslands = function (grid) {
  if (grid.length === 0) {
    return 0
  }
  const rowLength = grid.length
  const colLength = grid[0].length
  const visited = new Array(rowLength)
  for (let i = 0; i < rowLength; i++) {
    visited[i] = new Array(colLength).fill(false)
  }
  let res = 0
  const backtrack = (row, col) => {
    if (row < 0 || row >= rowLength || col < 0 || col >= colLength) {
      return
    }
    if (visited[row][col] || grid[row][col] === '0') {
      return
    }
    visited[row][col] = true
    backtrack(row, col + 1)
    backtrack(row, col - 1)
    backtrack(row + 1, col)
    backtrack(row - 1, col)
  }
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (!visited[i][j] && grid[i][j] === '1') {
        res++
        backtrack(i, j)
      }
    }
  }
  return res
}

console.log(
  numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ])
)
