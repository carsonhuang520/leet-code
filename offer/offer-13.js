var movingCount = function (m, n, k) {
  if (m === 0 || n === 0) {
    return 0
  }
  let visited = new Array(m)
  for (let i = 0; i < m; i++) {
    visited[i] = new Array(m).fill(false)
  }
  const helper = (i, j) => {
    let res = 0
    while (i > 0) {
      res += i % 10
      i = Math.floor(i / 10)
    }
    while (j > 0) {
      res += j % 10
      j = Math.floor(j / 10)
    }
    return res
  }
  let res = 0
  const dfs = (i, j) => {
    if (
      i < 0 ||
      i >= m ||
      j < 0 ||
      j >= n ||
      visited[i][j] === true ||
      helper(i, j) > k
    ) {
      return
    }
    visited[i][j] = true
    res++
    dfs(i, j + 1)
    dfs(i + 1, j)
    dfs(i, j - 1)
    dfs(i - 1, j)
    // visited[i][j] = false
    return res
  }
  dfs(0, 0)
  return res
}

console.log(movingCount(3, 2, 17))
