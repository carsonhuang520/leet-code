// var myPow = function (x, n) {
//   let res = 1
//   let flag = n >= 0 ? true : false
//   n = n >= 0 ? n : -n
//   while (n) {
//     res = res * x
//     n--
//   }
//   return flag ? res : 1 / res
// }

var myPow = function (x, n) {
  let flag = n >= 0 ? true : false
  n = n >= 0 ? n : -n
  let map = new Map()
  const helper = (n) => {
    if (n === 0) {
      return 1
    }
    if (n === 1) {
      return x
    }
    if (map.has(n)) {
      return map.get(n)
    }
    let res = helper(Math.floor(n / 2))
    let result
    if (n % 2 === 0) {
      result = res * res
    } else {
      result = res * res * x
    }
    map.set(n, result)
    return result
  }
  let res = helper(n)
  return flag ? res : 1 / res
}

console.log(myPow(2, 3))
