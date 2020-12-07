var isValid = function (s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i)
    if (ch === '(' || ch === '{' || ch === '[') {
      stack.push(ch)
    }
    if (!stack.length) {
      return false
    }
    if (ch === ')' && stack.pop() !== '(') {
      return false
    }
    if (ch === '}' && stack.pop() !== '{') {
      return false
    }
    if (ch === ']' && stack.pop() !== '[') {
      return false
    }
  }
  return stack.length === 0
}
