function IsPopOrder(pushV, popV) {
  let stack = []
  let i = 0
  for (let num of pushV) {
    stack.push(num)
    while (stack.length && stack[stack.length - 1] === popV[i]) {
      stack.pop()
      i++
    }
  }
  return stack.length === 0
}

console.log(IsPopOrder([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]))

module.exports = {
  IsPopOrder: IsPopOrder,
}
