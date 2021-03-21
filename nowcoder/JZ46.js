// function LastRemaining_Solution(n, m) {
//   if (n === 0) {
//     return -1
//   }
//   let visited = new Array(n).fill(false)
//   let i = 0
//   let j = 0
//   let res = []
//   while (res.length <= n - 1) {
//     if (i === m - 1 && visited[j] !== true) {
//       visited[j] = true
//       i = 0
//       res.push(j)
//     } else {
//       if (visited[j] !== true) {
//         i++
//       }
//     }
//     j++
//     if (j >= n) {
//       j = j % n
//     }
//   }
//   console.log(res)
//   return res[n - 1]
// }
function LastRemaining_Solution(n, m) {
  if (n === 0) {
    return -1
  }
  let dp = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    dp[i] = (dp[i - 1] + m) % i
  }
  console.log(dp)
  return dp[n]
}
console.log(LastRemaining_Solution(5, 3))
module.exports = {
  LastRemaining_Solution: LastRemaining_Solution,
}
