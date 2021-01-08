// dfs
var pacificAtlantic = function (matrix) {
  let m = matrix.length
  if (m === 0) {
    return []
  }
  let n = matrix[0].length
  let dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]
  let can_reachP = new Array(m)
  let can_reachA = new Array(m)
  for (let i = 0; i < can_reachP.length; i++) {
    can_reachP[i] = new Array(n).fill(false)
    can_reachA[i] = new Array(n).fill(false)
  }
  const dfs = (can_reach, row, col) => {
    if (can_reach[row][col]) {
      return
    }
    can_reach[row][col] = true
    for (let dir of dirs) {
      const newX = row + dir[0]
      const newY = col + dir[1]
      if (
        newX >= 0 &&
        newX < m &&
        newY >= 0 &&
        newY < n &&
        matrix[row][col] <= matrix[newX][newY]
      ) {
        dfs(can_reach, newX, newY)
      }
    }
  }
  for (let i = 0; i < m; i++) {
    dfs(can_reachP, i, 0)
    dfs(can_reachA, i, n - 1)
  }
  for (let i = 0; i < n; i++) {
    dfs(can_reachP, 0, i)
    dfs(can_reachA, m - 1, i)
  }
  let res = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (can_reachP[i][j] && can_reachA[i][j]) {
        res.push([i, j])
      }
    }
  }
  console.log(can_reachP)
  console.log(can_reachA)
  return res
}

// dfs
var pacificAtlantic2 = function (matrix) {
  let m = matrix.length
  if (m === 0) {
    return []
  }
  let n = matrix[0].length
  let dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]
  let can_reachP = new Array(m)
  let can_reachA = new Array(m)
  let visited_P = new Array(m)
  let visited_A = new Array(m)
  for (let i = 0; i < can_reachP.length; i++) {
    can_reachP[i] = new Array(n).fill(false)
    can_reachA[i] = new Array(n).fill(false)
    visited_P[i] = new Array(n).fill(false)
    visited_A[i] = new Array(n).fill(false)
  }
  let pQueue = []
  let aQueue = []
  const bfs = (visited, can_reach, queue) => {
    while (queue.length) {
      // console.log(queue)
      let cur = queue.shift()
      can_reach[cur[0]][cur[1]] = true
      for (let dir of dirs) {
        const newX = cur[0] + dir[0]
        const newY = cur[1] + dir[1]
        if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
          if (
            matrix[cur[0]][cur[1]] <= matrix[newX][newY] &&
            !can_reach[newX][newY] &&
            !visited[newX][newY]
          ) {
            queue.push([newX, newY])
            visited[newX][newY] = true
          }
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    pQueue.push([i, 0])
    visited_P[i][0] = true
    aQueue.push([i, n - 1])
    visited_A[i][n - 1] = true
  }
  for (let i = 1; i < n - 1; i++) {
    pQueue.push([0, i])
    visited_P[0][i] = true
    aQueue.push([m - 1, i])
    visited_A[m - 1][i] = true
  }
  // console.log(visited_P)
  bfs(visited_P, can_reachP, pQueue)
  bfs(visited_A, can_reachA, aQueue)
  let res = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (can_reachP[i][j] && can_reachA[i][j]) {
        res.push([i, j])
      }
    }
  }
  return res
  // console.log(can_reachP)
  // console.log(can_reachA)
}

console.log(
  pacificAtlantic2([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
)
