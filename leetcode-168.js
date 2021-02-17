var convertToTitle = function (n) {
  let res = ''
  while (n) {
    let t = n % 26
    if (t === 0) {
      t = 26
      n -= 1
    }
    res = String.fromCharCode(t + 64) + res
    n = Math.floor(n / 26)
  }
  return res
}

console.log(convertToTitle(676))
