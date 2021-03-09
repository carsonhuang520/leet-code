/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 *
 * 示例 1:
 * 输入: "()"
 * 输出: true
 *
 * 示例 2:
 * 输入: "(]"
 * 输出: false
 */
/**
 * @param {string} s
 * @return {boolean}
 */
function tttt(s) {
  let len = s.length
  let stack = []
  for (let i = 0; i < len; i++) {
    let ch = s[i]
    if (ch === '(' || ch === '{' || ch === '[') {
      stack.push(ch)
    }
    if (!stack.length) {
      return false
    }
    if (ch === ')' && stack.pop() !== '(') {
      return false
    }
    if (ch === ']' && stack.pop() !== '[') {
      return false
    }
    if (ch === '}' && stack.pop() !== '{') {
      return false
    }
  }
  return stack.length === 0
}

console.log(tttt('()'))
