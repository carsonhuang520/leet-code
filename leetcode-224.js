function calculate(s) {
  const helper = (start) => {
    let stack = []
    let sign = '+'
    let num = 0
    let i
    for (i = start; i < s.length; i++) {
      let c = s[i]
      if (isDigit(c)) {
        num = num * 10 + parseInt(c)
      }
      if (c === '(') {
        ;[num, u] = helper(i + 1)
        i = u
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
      if (c === ')') {
        break
      }
    }
    let res = 0
    for (let i = 0; i < stack.length; i++) {
      res += stack[i]
    }
    return [res, i]
  }
  return helper(0)[0]
}

function isDigit(s) {
  return !isNaN(parseInt(s))
}
