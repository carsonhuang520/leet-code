/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  let str = '' + num
  let len = str.length
  if (len < 2) {
    return 1
  }
  let dp = new Array(len).fill(0)
  dp[0] = 1
  dp[1] = parseInt(str.substring(0, 2)) > 25 ? 1 : 2
  for (let i = 2; i < len; i++) {
    let temp = str.substring(i - 1, i + 1)
    if (parseInt(temp) > 25) {
      dp[i] = dp[i - 1]
    } else {
      if (temp[0] === '0') {
        dp[i] = dp[i - 1]
      } else {
        dp[i] = dp[i - 1] + dp[i - 2]
      }
    }
  }
  console.log(dp)
  return dp[len - 1]
}

console.log(translateNum(506))
