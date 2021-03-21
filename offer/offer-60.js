/**
 * @param {number} n
 * @return {number[]}
 */
var dicesProbability = function (n) {
  let res = new Array(5 * n + 1).fill(0)
  const helper = (origin, current, sum) => {
    if (current === 1) {
      res[sum - origin]++
    } else {
      for (let i = 1; i <= 6; i++) {
        helper(origin, current - 1, i + sum)
      }
    }
  }
  console.time()
  for (let i = 1; i <= 6; i++) {
    helper(n, n, i)
  }
  console.timeEnd()
  // let temp = []
  // let total = Math.pow(6, n)
  // for (let i = 0; i <= res.length - 1; i++) {
  //   temp.push(res[i] / total)
  // }
  console.log(res)
}
// console.log(dicesProbability(11))
/* 动态规划实现 */
var dicesProbability2 = function (n) {
  let dp = new Array(n + 1)
  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(5 * n + 1).fill(0)
  }
  for (let i = 0; i <= 5; i++) {
    dp[1][i] = 1
  }
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < 5 * n + 1; j++) {
      for (let k = 0; k <= 5; k++) {
        if (j - k >= 0) {
          dp[i][j] += dp[i - 1][j - k]
        }
      }
    }
  }
  let temp = []
  let total = Math.pow(6, n)
  for (let i = 0; i <= dp[n].length - 1; i++) {
    temp.push(dp[n][i] / total)
  }
  // console.log(dp[n])
  return temp
}

console.log(dicesProbability2(2))
