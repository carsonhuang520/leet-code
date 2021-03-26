/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param A string字符串 
 * @param n int整型 
 * @return int整型
 */
// export function getLongestPalindrome(A: string, n: number): number {
//   let dp: number[][] = new Array(n)
//   for (let i: number = 0; i < n; i++) {
//     dp[i] = new Array(n)
//     for (let j: number = 0; j < n; j++) {
//       dp[i][j] = 0
//     }
//     dp[i][i] = 1
//   }
//   for (let i: number = n - 1; i >= 0; i--) {
//     for (let j: number = i + 1; j < n; j++) {
//       if (A[i] === A[j]) {
//         dp[i][j] = dp[i + 1][j - 1] + 2
//       } else {
//         dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
//       }
//     }
//   }
//   console.log(dp)
//   return dp[0][n - 1]
// }

export function getLongestPalindrome(A: string, n: number): number {
  let res: number = -Infinity
  for (let i: number = 0; i < A.length; i++) {
    let s1: number = palindrome(A, i, i)
    let s2: number = palindrome(A, i, i + 1)
    res = Math.max(res, s1, s2)
  }
  return res
}

function palindrome(s: string, l: number, r: number): number {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--
    r++
  }
  return r - l - 1
}

console.log(getLongestPalindrome('abc1234321ab', 12))