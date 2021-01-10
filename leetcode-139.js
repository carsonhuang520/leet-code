var wordBreak = function (s, wordDict) {
  if (s.length === 0) {
    return false
  }
  let n = s.length
  let dp = new Array(n + 1).fill(false)
  dp[0] = true
  for (let i = 1; i <= n; i++) {
    for (let word of wordDict) {
      let len = word.length
      if (i >= len && s.substr(i - len, len) === word) {
        dp[i] = dp[i] || dp[i - len]
      }
    }
  }
  return dp[n]
}

console.log(wordBreak('leetcode', ['leet', 'code']))
