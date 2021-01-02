// var exist = function (board, word) {
//   let rowLength = board.length
//   let colLength = board[0].length
//   let visited = new Array(rowLength)
//   for (let i = 0; i < rowLength; i++) {
//     visited[i] = new Array(colLength).fill(false)
//   }
//   const backtrack = (pos, count, row, col) => {
//     if (pos === word.length) {
//       return true
//     }
//     if (row < 0 || row >= board.length) {
//       return false
//     }
//     if (col < 0 || col >= board[0].length) {
//       return false
//     }
//     if (visited[row][col] || word[count] !== board[row][col]) {
//       return false
//     }

//     visited[row][col] = true
//     let res1 = backtrack(pos + 1, count + 1, row, col + 1)
//     let res2 = backtrack(pos + 1, count + 1, row, col - 1)
//     let res3 = backtrack(pos + 1, count + 1, row + 1, col)
//     let res4 = backtrack(pos + 1, count + 1, row - 1, col)
//     if (res1 || res2 || res3 || res4) {
//       return true
//     }
//     visited[row][col] = false
//     return false
//   }

//   for (let i = 0; i < rowLength; i++) {
//     for (let j = 0; j < colLength; j++) {
//       if (backtrack(0, 0, i, j)) {
//         return true
//       }
//     }
//   }
//   return false
// }

// console.log(
//   exist(
//     [
//       ['A', 'B', 'C', 'E'],
//       ['S', 'F', 'C', 'S'],
//       ['A', 'D', 'E', 'E'],
//     ],
//     'ABCCED'
//   )
// )

var exist = function (board, word) {
  let rowLength = board.length
  let colLength = board[0].length
  let visited = new Array(rowLength)
  for (let i = 0; i < rowLength; i++) {
    visited[i] = new Array(colLength).fill(false)
  }
  const backtrack = (pos, count, row, col) => {
    if (pos === word.length) {
      return true
    }
    if (row < 0 || row >= board.length) {
      return false
    }
    if (col < 0 || col >= board[0].length) {
      return false
    }
    if (visited[row][col] || word[count] !== board[row][col]) {
      return false
    }

    visited[row][col] = true
    let res1 = backtrack(pos + 1, count + 1, row, col + 1)
    let res2 = backtrack(pos + 1, count + 1, row, col - 1)
    let res3 = backtrack(pos + 1, count + 1, row + 1, col)
    let res4 = backtrack(pos + 1, count + 1, row - 1, col)
    if (res1 || res2 || res3 || res4) {
      return true
    }
    visited[row][col] = false
    return false
  }

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (backtrack(0, 0, i, j)) {
        return true
      }
    }
  }
  return false
}

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCB'
  )
)

// var exist = function (board, word) {
//   if (board.length === 0) {
//     return false
//   }
//   let rowLength = board.length
//   let colLength = board[0].length
//   let visited = new Array(rowLength)
//   for (let i = 0; i < rowLength; i++) {
//     visited[i] = new Array(colLength).fill(false)
//   }
//   let find = false
//   const backtrack = (find, pos, row, col) => {
//     if (row < 0 || row >= board.length) {
//       return
//     }
//     if (col < 0 || col >= board[0].length) {
//       return
//     }
//     if (visited[row][col] || find || word[pos] !== board[row][col]) {
//       return
//     }
//     if (pos === word.length - 1) {
//       find = true
//       return
//     }
//     visited[row][col] = true
//     backtrack(find, pos + 1, row + 1, col)
//     backtrack(find, pos + 1, row - 1, col)
//     backtrack(find, pos + 1, row, col + 1)
//     backtrack(find, pos + 1, row, col - 1)
//     visited[row][col] = false
//   }

//   for (let i = 0; i < rowLength; i++) {
//     for (let j = 0; j < colLength; j++) {
//       backtrack(find, 0, i, j)
//     }
//   }
//   return find
// }

// console.log(
//   exist(
//     [
//       ['A', 'B', 'C', 'E'],
//       ['S', 'F', 'C', 'S'],
//       ['A', 'D', 'E', 'E'],
//     ],
//     'ABCCED'
//   )
// )
