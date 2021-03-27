/**
 * longest common subsequence
 * @param s1 string字符串 the string
 * @param s2 string字符串 the string
 * @return string字符串
 */
function LCS(s1, s2) {
  let m = s1.length
  let n = s2.length
  let dp = new Array(m + 1)
  for (let i = 0; i < m + 1; i++) {
    dp[i] = new Array(n + 1).fill('')
  }
  let res = ''
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        // res += s1[i - 1]
        dp[i][j] = dp[i - 1][j - 1] + s1[i - 1]
      } else {
        dp[i][j] =
          dp[i - 1][j].length > dp[i][j - 1].length
            ? dp[i - 1][j]
            : dp[i][j - 1]
      }
    }
  }
  return dp[m][n] === '' ? -1 : dp[m][n]
  // let m = s1.length
  // let n = s2.length
  // if (s1 === null || s2 === null || m === 0 || n === 0) {
  //   return -1
  // }
  // if (m > n) {
  //   ;[s1, s2] = [s2, s1]
  // }
  // let maxLen = 0
  // let res = ''
  // for (let i = 0; i < s1.length; i++) {
  //   let temp = s1.slice(i - maxLen, i + 1)
  //   console.log('temp ----- ' + temp)
  //   if (s2.indexOf(temp) !== -1) {
  //     maxLen += 1
  //     res = temp
  //   }
  // }
  // console.log(res)
  // return res === '' ? -1 : res
}
console.log(LCS('1A2C3D4B56', 'B1D23CA45B6A'))
module.exports = {
  LCS: LCS,
}
