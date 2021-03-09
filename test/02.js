function count(n) {
  if (n < 2) {
    return 1
  }
  let a = 1
  let b = 1
  let t = 0
  for (let i = 2; i <= n; i++) {
    t = a + b
    a = b
    b = t
  }
  return t
}

function test1(n) {
  let dp = new Array(n + 1).fill(0)
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

console.log(count(20))
console.log(test1(20))
