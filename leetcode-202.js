/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let set = new Set()
  const helper = function (n) {
    let res = 0
    while (n !== 0) {
      let t = n % 10
      res += t * t
      n = Math.floor(n / 10)
    }
    return res
  }
  let res = helper(n)
  if (res === 1) {
    return true
  }
  if (!set.has(res)) {
    set.add(res)
  }
  while (res !== 1) {
    res = helper(res)
    if (res === 1) {
      return true
    }
    if (set.has(res)) {
      return false
    } else {
      set.add(res)
    }
  }
}

console.log(isHappy(19))
