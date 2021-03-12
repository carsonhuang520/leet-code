function IsPopOrder(pushV, popV) {
  let index = pushV.indexOf(popV[0])
  if (index === -1) {
    return false
  }
  let pre = popV.indexOf(pushV[index - 1])
  for (let i = index - 2; i >= 0; i--) {
    let cur = popV.indexOf(pushV[i])
    if (pre > cur) {
      return false
    }
    pre = cur
  }
  return true
}

console.log(IsPopOrder([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]))

module.exports = {
  IsPopOrder: IsPopOrder,
}
