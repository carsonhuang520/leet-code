/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 返回最差情况下扔棋子的最小次数
 * @param n int整型 楼层数
 * @param k int整型 棋子数
 * @return int整型
 */
function solve(n, k) {
  let dp = new Array(k + 1)
  for (let i = 0; i < k + 1; i++) {
    dp[i] = new Array(n + 1).fill(0)
  }
  let m = 0
  while (dp[k][m] < n) {
    m++
    for (let i = 1; i <= k; i++) dp[i][m] = dp[i][m - 1] + dp[i - 1][m - 1] + 1
  }
  return m
  // let map = new Map()
  // const helper = (n, k) => {
  //   if (k === 1) {
  //     return n
  //   }
  //   if (n === 0) {
  //     return 0
  //   }
  //   let key = '(' + n + ',' + k + ')'
  //   if (map.has(key)) {
  //     return map.get(key)
  //   }
  //   let res = Infinity
  //   for (let i = 1; i < n + 1; i++) {
  //     res = Math.min(res, Math.max(helper(n - i, k), helper(i - 1, k - 1)) + 1)
  //   }
  //   map.set(key, res)
  //   return res
  // }
  // let res = helper(n, k)
  // console.log(map)
  // return res
}
console.log(solve(1000000, 1000000))
module.exports = {
  solve: solve,
}
