var solveSudoku = function (board) {
  let m = 9
  let n = 9
  const isValid = (board, i, j, ch) => {
    for (let k = 0; k < 9; k++) {
      if (board[i][k] === ch) {
        return false
      }
      if (board[k][j] === ch) {
        return false
      }
      if (
        board[Math.floor(i / 3) * 3 + Math.floor(k / 3)][
          Math.floor(j / 3) * 3 + (k % 3)
        ] === ch
      ) {
        return false
      }
    }
    return true
  }
  const backtrack = (board, i, j) => {
    if (j === n) {
      return backtrack(board, i + 1, 0)
    }
    if (i === m) {
      return true
    }
    if (board[i][j] !== '.') {
      return backtrack(board, i, j + 1)
    }
    for (let k = 1; k <= 9; k++) {
      if (!isValid(board, i, j, k + '')) {
        continue
      }
      board[i][j] = k + ''
      if (backtrack(board, i, j + 1)) {
        return true
      }
      board[i][j] = '.'
    }
    return false
  }
  backtrack(board, 0, 0)
}

solveSudoku([])
