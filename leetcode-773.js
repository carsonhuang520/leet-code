/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
  let target = '123450'
  let source = boardToString(board)
  let neighor = [
    [1, 3],
    [0, 4, 2],
    [1, 5],
    [0, 4],
    [3, 1, 5],
    [4, 2],
  ]
  let m = 2
  let n = 3
  let queue = []
  let visited = new Set()
  queue.push(source)
  visited.add(source)
  let step = 0
  while (queue.length) {
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let cur = queue.shift()
      if (cur === target) {
        return step
      }
      let idx = 0
      for (; cur[idx] !== '0'; idx++);
      for (let adj of neighor[idx]) {
        let new_board = cur
        new_board = swap(new_board, adj, idx)
        if (!visited.has(new_board)) {
          queue.push(new_board)
          visited.add(new_board)
        }
      }
    }
    step++
  }
  return -1
}

function swap(str, i, j) {
  let temp = str.split('')
  ;[temp[i], temp[j]] = [temp[j], temp[i]]
  return temp.join('')
}

function boardToString(board) {
  let str = ''
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      str += board[i][j]
    }
  }
  return str
}

console.log(
  slidingPuzzle([
    [4, 1, 2],
    [5, 0, 3],
  ])
)
