var hammingWeight = function (n) {
  let res = 0
  while (n != 0) {
    n = n & (n - 1)
    res++
  }
  return res
}

console.log(hammingWeight(11111111111111111111111111111101))
