function multiply(array) {
  let len = array.length
  let pre = new Array(len).fill(array[0])
  let next = new Array(len).fill(array[len - 1])
  for (let i = 1; i < len; i++) {
    pre[i] = pre[i - 1] * array[i]
    next[len - i - 1] = next[len - i] * array[len - i - 1]
  }
  let res = new Array(len).fill(0)
  res[0] = next[1]
  res[len - 1] = pre[len - 2]
  for (let i = 1; i < len - 1; i++) {
    res[i] = pre[i - 1] * next[i + 1]
  }
  console.log(pre)
  console.log(next)
  return res
}
console.log(multiply([1, 2, 3, 4, 5]))
module.exports = {
  multiply: multiply,
}
