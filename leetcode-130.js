// var solve = function (board) {
//   let queue = []
//   let nr = board.length
//   let nc = board[0].length

//   for (let i = 0; i < nr; i++) {
//     for (let j = 0; j < nc; j++) {
//       if (board[i][j] === 'O') {
//         queue.push(i * nc + j)
//         board[i][j] = 'X'
//         while (queue.length) {
//           let cur = queue.shift()
//           let r = Math.floor(cur / nc)
//           let c = cur % nc
//           if (r - 1 >= 0 && board[r - 1][c] == 'O') {
//             queue.push((r - 1) * nc + c)
//             board[r - 1][c] = 'X'
//           }
//           if (r + 1 < nr && board[r + 1][c] == 'O') {
//             queue.push((r + 1) * nc + c)
//             board[r + 1][c] = 'X'
//           }
//           if (c - 1 >= 0 && board[r][c - 1] == 'O') {
//             queue.push(r * nc + c - 1)
//             board[r][c - 1] = 'X'
//           }
//           if (c + 1 < nc && board[r][c + 1] == 'O') {
//             queue.push(r * nc + c + 1)
//             board[r][c + 1] = 'X'
//           }
//         }
//       }
//     }
//   }

//   return board
// }

var solve = function (board) {
  let nr = board.length
  if (nr === 0) {
    return
  }
  let nc = board[0].length
  let queue = []
  for (let i = 0; i < nr; i++) {
    if (board[i][0] === 'O') {
      queue.push([i, 0])
    }
    if (board[i][nc - 1] === 'O') {
      queue.push([i, nc - 1])
    }
  }
  for (let i = 1; i < nc - 1; i++) {
    if (board[0][i] === 'O') {
      queue.push([0, i])
    }
    if (board[nr - 1][i] === 'O') {
      queue.push([nr - 1, i])
    }
  }
  while (queue.length) {
    let cur = queue.shift()
    let x = cur[0]
    let y = cur[1]
    board[x][y] = 'A'
    if (x - 1 >= 0 && board[x - 1][y] === 'O') {
      queue.push([x - 1, y])
    }
    if (x + 1 < nr && board[x + 1][y] === 'O') {
      queue.push([x + 1, y])
    }
    if (y - 1 >= 0 && board[x][y - 1] === 'O') {
      queue.push([x, y - 1])
    }
    if (y + 1 < nc && board[x][y + 1] === 'O') {
      queue.push([x, y + 1])
    }
  }
  for (let i = 0; i < nr; i++) {
    for (let j = 0; j < nc; j++) {
      if (board[i][j] === 'A') {
        board[i][j] = 'O'
      } else if (board[i][j] === 'O') {
        board[i][j] = 'X'
      }
    }
  }
  return board
}

// console.log(
//   solve([
//     ['X', 'X', 'X', 'X'],
//     ['X', 'O', 'O', 'X'],
//     ['X', 'X', 'O', 'X'],
//     ['X', 'O', 'O', 'X'],
//   ])
// )

// DFS
var solve2 = function (board) {
  let nr = board.length
  if (nr === 0) {
    return
  }
  let nc = board[0].length
  const dfs = (row, col) => {
    if (
      row >= 0 &&
      row < nr &&
      col >= 0 &&
      col < nc &&
      board[row][col] === 'O'
    ) {
      board[row][col] = 'A'
      dfs(row - 1, col)
      dfs(row + 1, col)
      dfs(row, col - 1)
      dfs(row, col + 1)
    }
  }
  for (let i = 0; i < nr; i++) {
    for (let j = 0; j < nc; j++) {
      if (i === 0 || i === nr - 1 || j === 0 || j === nc - 1) {
        if (board[i][j] === 'O') {
          dfs(i, j)
        }
      }
    }
  }
  for (let i = 0; i < nr; i++) {
    for (let j = 0; j < nc; j++) {
      if (board[i][j] === 'A') {
        board[i][j] = 'O'
      } else if (board[i][j] === 'O') {
        board[i][j] = 'X'
      }
    }
  }
  return board
}

console.log(
  solve2([
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
  ])
)
