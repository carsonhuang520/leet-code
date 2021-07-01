/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let stack = []
  let sign = '+'
  let num = 0
  for (let i = 0; i < s.length; i++) {
    let c = s[i]
    if (isDigit(c)) {
      num = num * 10 + parseInt(c)
    }
    if ((!isDigit(c) && c !== ' ') || i === s.length - 1) {
      let pre
      switch (sign) {
        case '+':
          stack.push(num)
          break
        case '-':
          stack.push(-num)
          break
        case '*':
          pre = stack.pop()
          stack.push(pre * num)
          break
        case '/':
          pre = stack.pop()
          let res = pre < 0 ? Math.ceil(pre / num) : Math.floor(pre / num)
          stack.push(res)
          break
      }
      sign = c
      num = 0
    }
  }
  let res = 0
  for (let i = 0; i < stack.length; i++) {
    res += stack[i]
  }
  return res
}

function isDigit(s) {
  return !isNaN(parseInt(s))
}
