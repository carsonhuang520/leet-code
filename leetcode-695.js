var maxAreaOfIsland = function (grid) {
  let m = grid.length
  if (m === 0) {
    return 0
  }
  let n = grid[0].length
  let local_area = 0
  let queue = []
  let area = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      local_area = 0
      if (grid[i][j] === 1) {
        local_area++
        grid[i][j] = 0
        queue.push([i, j])
        while (queue.length) {
          let len = queue.length
          for (let k = 0; k < len; k++) {
            let cur = queue.pop()
            let row = cur[0]
            let col = cur[1]
            if (row - 1 >= 0 && grid[row - 1][col] === 1) {
              local_area++
              grid[row - 1][col] = 0
              queue.push([row - 1, col])
            }
            if (row + 1 < m && grid[row + 1][col] === 1) {
              local_area++
              grid[row + 1][col] = 0
              queue.push([row + 1, col])
            }
            if (col - 1 >= 0 && grid[row][col - 1] === 1) {
              local_area++
              grid[row][col - 1] = 0
              queue.push([row, col - 1])
            }
            if (col + 1 < n && grid[row][col + 1] === 1) {
              local_area++
              grid[row][col + 1] = 0
              queue.push([row, col + 1])
            }
          }
        }
        area = Math.max(local_area, area)
      }
    }
  }
  return area
}

console.log(
  maxAreaOfIsland2([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
)

// DFS
function maxAreaOfIsland2(grid) {
  let m = grid.length
  if (m === 0) {
    return 0
  }
  let n = grid[0].length
  let local_area = 0
  let area = 0
  const dfs = (row, col) => {
    if (row >= 0 && row < m && col >= 0 && col < n && grid[row][col] === 1) {
      local_area++
      grid[row][col] = 0
      dfs(row + 1, col)
      dfs(row - 1, col)
      dfs(row, col - 1)
      dfs(row, col + 1)
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      local_area = 0
      if (grid[i][j] === 1) {
        dfs(i, j)
        area = Math.max(local_area, area)
      }
    }
  }
  return area
}
