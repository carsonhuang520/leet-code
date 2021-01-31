var colorBorder = function (grid, r0, c0, color) {
  let m = grid.length
  let n = grid[0].length
  let origin = grid[r0][c0]
  let dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]
  let vis = new Array(m)
  for (let i = 0; i < m; i++) {
    vis[i] = new Array(n).fill(false)
  }
  const dfs = (i, j) => {
    for (let dir of dirs) {
      let x = i + dir[0]
      let y = j + dir[1]
      if (x >= 0 && x < m && y >= 0 && y < n) {
        if (vis[x][y]) {
          continue
        }
        if (grid[x][y] !== origin) {
          grid[i][j] = color
        } else {
          vis[x][y] = true
          dfs(x, y)
        }
      } else {
        grid[i][j] = color
      }
    }
  }
  vis[r0][c0] = false
  dfs(r0, c0)
  return grid
}

console.log(
  colorBorder(
    [
      [1, 2, 1, 2, 1, 2],
      [2, 2, 2, 2, 1, 2],
      [1, 2, 2, 2, 1, 2],
    ],
    1,
    3,
    1
  )
)
