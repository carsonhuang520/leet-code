// function NumberOf1Between1AndN_Solution(n) {
//   if (n === 0) {
//     return 0
//   }
//   let res = 0
//   for (let i = 1; i <= n; i++) {
//     res += count(i)
//   }
//   return res
// }
// function count(n) {
//   let sum = 0
//   while (n) {
//     let yu = n % 10
//     if (yu === 1) {
//       sum++
//     }
//     n = Math.floor(n / 10)
//   }
//   return sum
// }

function NumberOf1Between1AndN_Solution(n) {
  if (n === 0) {
    return 0
  }
  let res = 0
  let current
  let before
  let after
  let i = 1
  while (Math.floor(n / i) !== 0) {
    current = Math.floor(n / i) % 10
    before = Math.floor(n / (i * 10))
    after = n - Math.floor(n / i) * i
    if (current === 0) {
      res += before * i
    } else if (current === 1) {
      res += before * i + after + 1
    } else {
      res += (before + 1) * i
    }
    i = i * 10
  }
  return res
}

console.log(NumberOf1Between1AndN_Solution(12012))

module.exports = {
  NumberOf1Between1AndN_Solution: NumberOf1Between1AndN_Solution,
}
