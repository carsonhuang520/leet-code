var findCircleNum = function (isConnected) {
  let n = isConnected.length
  let count = 0
  let visited = new Array(n).fill(false)
  const dfs = (row) => {
    visited[row] = true
    for (let k = 0; k < n; k++) {
      if (isConnected[row][k] === 1 && !visited[k]) {
        dfs(k)
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i)
      count++
    }
  }
  return count
}

console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
)
