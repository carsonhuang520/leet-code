// DFS 写法
// var numIslands = function (grid) {
//   if (grid.length === 0) {
//     return 0
//   }
//   const rowLength = grid.length
//   const colLength = grid[0].length
//   const visited = new Array(rowLength)
//   for (let i = 0; i < rowLength; i++) {
//     visited[i] = new Array(colLength).fill(false)
//   }
//   let res = 0
//   const backtrack = (row, col) => {
//     if (row < 0 || row >= rowLength || col < 0 || col >= colLength) {
//       return
//     }
//     if (visited[row][col] || grid[row][col] === '0') {
//       return
//     }
//     visited[row][col] = true
//     backtrack(row, col + 1)
//     backtrack(row, col - 1)
//     backtrack(row + 1, col)
//     backtrack(row - 1, col)
//   }
//   for (let i = 0; i < rowLength; i++) {
//     for (let j = 0; j < colLength; j++) {
//       if (!visited[i][j] && grid[i][j] === '1') {
//         res++
//         backtrack(i, j)
//       }
//     }
//   }
//   return res
// }

// console.log(
//   numIslands([
//     ['1', '1', '1', '1', '0'],
//     ['1', '1', '0', '1', '0'],
//     ['1', '1', '0', '0', '0'],
//     ['0', '0', '0', '0', '0'],
//   ])
// )

// BFS 写法
var numIslands = function (grid) {
  if (grid === null || grid.length === 0) {
    return 0
  }
  let row = grid.length
  let col = grid[0].length
  let queue = []
  let visited = new Array(row * col).fill(false)
  let res = 0
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (!visited[i * col + j] && grid[i][j] === '1') {
        res++
        let t = col * i + j
        visited[t] = true
        queue.push(col * i + j)
        while (queue.length) {
          let temp = queue.shift()
          let nr = Math.floor(temp / col)
          let nc = temp % col
          if (
            nr - 1 >= 0 &&
            grid[nr - 1][nc] === '1' &&
            !visited[(nr - 1) * col + nc]
          ) {
            let t = (nr - 1) * col + nc
            queue.push(t)
            visited[t] = true
          }
          if (
            nr + 1 < row &&
            grid[nr + 1][nc] === '1' &&
            !visited[(nr + 1) * col + nc]
          ) {
            let t = (nr + 1) * col + nc
            queue.push(t)
            visited[t] = true
          }
          if (
            nc - 1 >= 0 &&
            grid[nr][nc - 1] === '1' &&
            !visited[nr * col + nc - 1]
          ) {
            let t = nr * col + nc - 1
            queue.push(t)
            visited[t] = true
          }
          if (
            nc + 1 < col &&
            grid[nr][nc + 1] === '1' &&
            !visited[nr * col + nc + 1]
          ) {
            let t = nr * col + nc + 1
            queue.push(t)
            visited[t] = true
          }
        }
      }
    }
  }
  return res
}

console.log(
  numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ])
)
