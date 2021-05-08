/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length
  if (len < 2) {
    return s
  }
  const dp = new Array(len)
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(false)
    dp[i][i] = true
  }
  let maxLen = 1
  let begin = 0
  for (let i = 2; i <= len; i++) {
    for (let j = 0; j < len; j++) {
      let r = i + j - 1
      if (r >= len) {
        break
      }
      if (s[j] === s[r]) {
        if (r - j < 3) {
          dp[j][r] = true
        } else {
          dp[j][r] = dp[j + 1][r - 1]
        }
      } else {
        dp[j][r] = false
      }
      if (dp[j][r] && r - j + 1 > maxLen) {
        maxLen = r - j + 1
        begin = j
      }
    }
  }
  // console.log(dp)
  return s.substr(begin, maxLen)
  // let res = 0
  // let max = dp[0][len - 1]
  // for (let i = 0; i < len; i++) {
  //   if (dp[0][i] === max) {
  //     res = i
  //     break
  //   }
  // }
  // // return dp[0][len - 1]
  // return s.substr(res - max + 1, max)
}

// var longestPalindrome = function (s) {
//   let res = ''
//   for (let i = 0; i < s.length; i++) {
//     const s1 = palindrome(s, i, i)
//     const s2 = palindrome(s, i, i + 1)
//     res = res.length > s1.length ? res : s1
//     res = res.length > s2.length ? res : s2
//   }
//   return res
// }

// function palindrome(s, l, r) {
//   while (l >= 0 && r < s.length && s[l] === s[r]) {
//     l--
//     r++
//   }
//   return s.substr(l + 1, r - l - 1)
// }

console.log(longestPalindrome('babad'))
