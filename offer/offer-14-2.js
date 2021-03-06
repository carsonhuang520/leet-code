var cuttingRope = function (n) {
  if (n < 2) {
    return 0
  }
  if (n === 2) {
    return 1
  }
  if (n === 3) {
    return 2
  }
  let res = 1
  while (n > 4) {
    res = (res * 3) % 1000000007
    n -= 3
  }
  return (res * n) % 1000000007
}

console.log(cuttingRope(120))
