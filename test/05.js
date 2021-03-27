function test(num) {
  let len = num.length
  let dp = new Array(len)
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(0)
  }
  for (let i = 0; i < len; i++) {
    dp[i][i] = num[i] % 6 === 0 ? num[i] : 0
  }
  // for (let i = 1; i < len; i++) {
  //   if ((dp[0][i - 1] + num[i]) % 6 === 0) {
  //     dp[0][i] = dp[0][i - 1] + num[i]
  //   } else {
  //     dp[0][i] = Math.max(dp[0][i - 1], num[i])
  //   }
  // }
  console.log(dp)
}

test([6, 8, 4, 3])
