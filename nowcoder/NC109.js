/**
 * 判断岛屿数量
 * @param grid char字符型二维数组
 * @return int整型
 */
function dfs(grid, row, col) {
  if (
    row >= grid.length ||
    row < 0 ||
    col >= grid[0].length ||
    col < 0 ||
    grid[row][col] === 0
  ) {
    return
  }
  grid[row][col] = 0
  dfs(grid, row + 1, col)
  dfs(grid, row - 1, col)
  dfs(grid, row, col + 1)
  dfs(grid, row, col - 1)
}
function solve(grid) {
  if (grid.length === 0) {
    return 0
  }
  let res = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        res++
        dfs(grid, i, j)
      }
    }
  }
  return res
}
console.log(solve([[1]]))
module.exports = {
  solve: solve,
}
