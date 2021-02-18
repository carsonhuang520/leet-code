var hammingDistance = function (x, y) {
  let diff = x ^ y
  let res = 0
  while (diff) {
    res += diff & 1
    diff >>= 1
  }
  return res
}
