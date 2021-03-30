/**
 *
 * @param s string字符串
 * @return int整型
 */
function longestValidParentheses(s) {
  if (s.length === 0) {
    return 0
  }
  let len = s.length
  let max = 0
  let queue = [-1]
  let i = 0
  for (; s[i] === ')'; i++) {}
  for (; i < len; i++) {
    if (s[i] === '(') {
      queue.push(i)
    } else if (s[i] === ')') {
      queue.pop()
      if (queue.length) {
        max = Math.max(max, i - queue[queue.length - 1])
      } else {
        queue.push(i)
      }
    }
  }
  return max
}
console.log(longestValidParentheses('))())(()))()(((()())(()'))
module.exports = {
  longestValidParentheses: longestValidParentheses,
}
