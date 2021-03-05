var exist = function (board, word) {
  let m = board.length
  if (m === 0) {
    return false
  }
  let n = board[0].length
  let visible = new Array(m)
  for (let i = 0; i < m; i++) {
    visible[i] = new Array(n).fill(false)
  }
  const helper = (i, j, backtrack, count) => {
    if (
      i < 0 ||
      i >= m ||
      j < 0 ||
      j >= n ||
      visible[i][j] === true ||
      board[i][j] !== word[count]
    ) {
      return false
    }

    if (count === word.length - 1) {
      return true
    }
    visible[i][j] = true
    let res =
      helper(i, j + 1, backtrack, count + 1) ||
      helper(i + 1, j, backtrack, count + 1) ||
      helper(i, j - 1, backtrack, count + 1) ||
      helper(i - 1, j, backtrack, count + 1)
    visible[i][j] = false
    return res
  }
  let backtrack = ''
  let count = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (helper(i, j, backtrack, count)) {
        return true
      }
    }
  }
  return false
}

// var exist = function (board, word) {
//   let m = board.length
//   if (m === 0) {
//     return false
//   }
//   let n = board[0].length
//   let visible = new Array(m)
//   for (let i = 0; i < m; i++) {
//     visible[i] = new Array(n).fill(false)
//   }
//   const directions = [
//     [0, 1],
//     [1, 0],
//     [0, -1],
//     [-1, 0],
//   ]
//   const helper = (x, y, backtrack) => {
//     if ([...backtrack].join('') === word) {
//       return true
//     }
//     for (let i = 0; i < directions.length; i++) {
//       let newX = x + directions[i][0]
//       let newY = y + directions[i][1]
//       console.log(newX, newY)
//       if (
//         newX < 0 ||
//         newX >= m ||
//         newY < 0 ||
//         newY >= n ||
//         visible[newX][newY] === true
//       ) {
//         continue
//       }
//       backtrack.push(board[newX][newY])
//       visible[newX][newY] = true
//       helper(newX, newY, backtrack)
//       backtrack.pop()
//       visible[newX][newY] = false
//     }
//   }
//   let res = false
//   let backtrack = []
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (board[i][j] === word[0]) {
//         visible[i][j] = true
//         res = helper(i, j, [board[i][j]])
//       }
//     }
//   }
//   return res
// }

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCCED'
  )
)
