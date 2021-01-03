var totalNQueens = function (n) {
  let res = 0
  let board = new Array(n)
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill('.')
  }

  const isValid = (board, row, col) => {
    for (let i = 0; i < n; i++) {
      if (board[i][col] === 'Q') {
        return false
      }
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') {
        return false
      }
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') {
        return false
      }
    }

    return true
  }

  const backtrack = (index) => {
    if (index === n) {
      res++
      return
    }
    for (let i = 0; i < n; i++) {
      if (!isValid(board, index, i)) {
        continue
      }
      board[index][i] = 'Q'
      backtrack(index + 1)
      board[index][i] = '.'
    }
  }

  backtrack(0)
  return res
}

console.log(totalNQueens(8))
