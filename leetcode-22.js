/* 
  n = 3
  [
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
  ]
*/

var generateParenthesis = function (n) {
  let res = []
  const backtrack = (left, right, track) => {
    if (left < 0 || right < 0) {
      return
    }
    if (right < left) {
      return
    }
    if (left === 0 && right === 0) {
      res.push(track.join(''))
      return
    }
    track.push('(')
    backtrack(left - 1, right, track)
    track.pop()

    track.push(')')
    backtrack(left, right - 1, track)
    track.pop()
  }
  backtrack(n, n, [])
  return res
}

console.log(generateParenthesis(3))
