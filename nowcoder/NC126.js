/**
 * 最少货币数
 * @param arr int整型一维数组 the array
 * @param aim int整型 the target
 * @return int整型
 */
function minMoney(arr, aim) {
  if (aim === 0) {
    return 0
  }
  let dp = new Array(aim + 1).fill(aim + 1)
  dp[0] = 0
  for (let j = 0; j < arr.length; j++) {
    for (let i = arr[j]; i < aim + 1; i++) {
      dp[i] = Math.min(dp[i - arr[j]] + 1, dp[i])
    }
  }
  console.log(dp)
  return dp[aim] === aim + 1 ? -1 : dp[aim]
  // if (aim === 0) {
  //   return 0
  // }
  // let len = arr.length
  // let dp = new Array(len + 1)
  // for (let i = 0; i <= len; i++) {
  //   dp[i] = new Array(aim + 1).fill(aim + 1)
  //   dp[i][0] = 0
  // }
  // for (let i = 1; i <= len; i++) {
  //   for (let j = 1; j <= aim; j++) {
  //     if (j - arr[i - 1] < 0) {
  //       dp[i][j] = dp[i - 1][j]
  //     } else {
  //       dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - arr[i - 1]] + 1)
  //     }
  //   }
  // }
  // return dp[len][aim] === aim + 1 ? -1 : dp[len][aim]
}
console.log(minMoney([3, 5], 2))
module.exports = {
  minMoney: minMoney,
}
