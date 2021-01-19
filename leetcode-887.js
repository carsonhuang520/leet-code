var superEggDrop = function (K, N) {
  const map = new Map()
  const dp = (K, N) => {
    if (K === 1) {
      return N
    }
    if (N === 0) {
      return 0
    }
    let key = K + ',' + N
    if (map.get(key)) {
      return map.get(key)
    }
    let res = Number.POSITIVE_INFINITY
    for (let i = 1; i <= N; i++) {
      res = Math.min(res, Math.max(dp(K, N - i), dp(K - 1, i - 1)) + 1)
    }
    map.set(key, res)
    return res
  }
  return dp(K, N)
}

console.log(superEggDrop(3, 14))