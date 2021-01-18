// var findMaxForm = function (strs, m, n) {
//   let len = strs.length
//   if (len === 0) {
//     return 0
//   }
//   let dp = new Array(len + 1)
//   for (let i = 0; i <= len; i++) {
//     dp[i] = new Array(m + 1)
//   }
//   for (let i = 0; i <= len; i++) {
//     for (let j = 0; j <= m; j++) {
//       dp[i][j] = new Array(n + 1).fill(0)
//     }
//   }
//   const getOneAndZero = (str) => {
//     let one = str.split('').reduce((prev, cur) => {
//       if (cur === '1') {
//         prev += 1
//       }
//       return prev
//     }, 0)
//     return [one, str.length - one]
//   }
//   for (let i = 1; i <= len; i++) {
//     const [one, zero] = getOneAndZero(strs[i - 1])
//     for (let j = 1; j <= m; j++) {
//       if (j - zero >= 0 && one === 0) {
//         dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j - zero][0] + 1)
//       } else {
//         dp[i][j][0] = dp[i - 1][j][0]
//       }
//     }
//   }
//   for (let i = 1; i <= len; i++) {
//     const [one, zero] = getOneAndZero(strs[i - 1])
//     for (let j = 1; j <= n; j++) {
//       if (j - one >= 0 && zero === 0) {
//         dp[i][0][j] = Math.max(dp[i - 1][0][j], dp[i - 1][0][j - one] + 1)
//       } else {
//         dp[i][0][j] = dp[i - 1][0][j]
//       }
//     }
//   }
//   for (let i = 1; i <= len; i++) {
//     const [one, zero] = getOneAndZero(strs[i - 1])
//     for (let j = 1; j <= m; j++) {
//       for (let k = 1; k <= n; k++) {
//         if (k - one >= 0 && j - zero >= 0) {
//           dp[i][j][k] = Math.max(dp[i - 1][j][k], dp[i - 1][j - zero][k - one] + 1)
//         } else {
//           dp[i][j][k] = dp[i - 1][j][k]
//         }
//       }
//     }
//   }
//   // console.log(dp)
//   return dp[len][m][n]
// }

var findMaxForm = function (strs, m, n) {
  let len = strs.length
  if (len === 0) {
    return 0
  }
  let dp = new Array(m + 1)
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0)
  }
  const getOneAndZero = (str) => {
    let one = str.split('').reduce((prev, cur) => {
      if (cur === '1') {
        prev += 1
      }
      return prev
    }, 0)
    return [one, str.length - one]
  }
  for (let i = 1; i <= len; i++) {
    const [one, zero] = getOneAndZero(strs[i - 1])
    for (let j = m; j >= zero; j--) {
      for (let k = n; k >= one; k--) {
        dp[j][k] = Math.max(dp[j][k], dp[j - zero][k - one] + 1)
      }
    }
  }
  // console.log(dp)
  return dp[m][n]
}

console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3))

console.log(findMaxForm(["00", "000"], 1, 10))

console.log(findMaxForm(["10", "0", "1"], 1, 1))