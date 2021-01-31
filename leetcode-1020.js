var numEnclaves = function (A) {
  let m = A.length
  if (m === 0) {
    return 0
  }
  let n = A[0].length
  const dfs = (row, col) => {
    if (row >= 0 && row < m && col >= 0 && col < n && A[row][col] === 1) {
      A[row][col] = 'X'
      dfs(row - 1, col)
      dfs(row + 1, col)
      dfs(row, col - 1)
      dfs(row, col + 1)
    }
  }
  let res = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
        if (A[i][j] === 1) {
          dfs(i, j)
        }
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (A[i][j] === 1) {
        res++
      }
    }
  }
  // console.log(A)
  return res
}

console.log(
  numEnclaves([
    [0, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ])
)

console.log(
  numEnclaves([
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ])
)
