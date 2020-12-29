var solveNQueens = (n) => {
  let res = []
  const isValid = (board, row, col) => {
    let n = board.length
    for (let i = 0; i < row; i++) {
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
  const backtrack = (board, row) => {
    if (board.length === row) {
      res.push(JSON.parse(JSON.stringify(board)))
      return
    }
    let n = board[row].length
    for (let i = 0; i < n; i++) {
      if (!isValid(board, row, i)) {
        continue
      }
      board[row][i] = 'Q'
      backtrack(board, row + 1)
      board[row][i] = '.'
    }
  }
  let board = new Array(n)
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill('.')
  }
  backtrack(board, 0)
  res = res.map((item) => item.map((e) => e.join('')))
  return res
}

console.log(solveNQueens(4))
