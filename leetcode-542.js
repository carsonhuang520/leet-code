// dfs
var updateMatrix = function (matrix) {
  let m = matrix.length
  let n = matrix[0].length
  let dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]
  const hasZero = (x, y) => {
    for (let dir of dirs) {
      const newX = x + dir[0]
      const newY = y + dir[1]
      if (
        newX >= 0 &&
        newX < m &&
        newY >= 0 &&
        newY < n &&
        matrix[newX][newY] === 0
      ) {
        return true
      }
    }
    return false
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 1 && !hasZero(i, j)) {
        matrix[i][j] = Number.POSITIVE_INFINITY
      }
    }
  }

  const dfs = (x, y) => {
    for (let dir of dirs) {
      const newX = x + dir[0]
      const newY = y + dir[1]
      if (
        newX >= 0 &&
        newX < m &&
        newY >= 0 &&
        newY < n &&
        matrix[newX][newY] > matrix[x][y] + 1
      ) {
        matrix[newX][newY] = matrix[x][y] + 1
        dfs(newX, newY)
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 1) {
        dfs(i, j)
      }
    }
  }
  return matrix
}

// bfs
var updateMatrix2 = (matrix) => {
  let m = matrix.length
  let n = matrix[0].length
  let dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]
  let queue = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        queue.push([i, j])
      } else {
        matrix[i][j] = -1
      }
    }
  }
  while (queue.length) {
    let cur = queue.shift()
    for (let dir of dirs) {
      const newX = cur[0] + dir[0]
      const newY = cur[1] + dir[1]
      if (
        newX >= 0 &&
        newX < m &&
        newY >= 0 &&
        newY < n &&
        matrix[newX][newY] === -1
      ) {
        matrix[newX][newY] = matrix[cur[0]][cur[1]] + 1
        queue.push([newX, newY])
      }
    }
  }
  return matrix
}

console.log(
  updateMatrix2([
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
)
