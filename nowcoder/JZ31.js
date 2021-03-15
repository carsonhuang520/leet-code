function NumberOf1Between1AndN_Solution(n) {
  if (n === 0) {
    return 0
  }
  let res = 0
  for (let i = 1; i <= n; i++) {
    res += count(i)
  }
  return res
}
function count(n) {
  let sum = 0
  while (n) {
    let yu = n % 10
    if (yu === 1) {
      sum++
    }
    n = Math.floor(n / 10)
  }
  return sum
}

console.log(NumberOf1Between1AndN_Solution(13))

module.exports = {
  NumberOf1Between1AndN_Solution: NumberOf1Between1AndN_Solution,
}
