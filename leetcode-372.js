var base = 1337
function myPow(a, k) {
  a = a % base
  let res = 1
  for (let i = 0; i < k; i++) {
    res *= a
    res = res % base
  }
  return res
}
var superPow = function (a, b) {
  if (b.length === 0) {
    return 1
  }
  let t = b.pop()
  let part1 = myPow(a, t)
  let part2 = myPow(superPow(a, b), 10)
  return (part1 * part2) % base
}
