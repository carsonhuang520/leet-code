function FirstNotRepeatingChar(str) {
  let len = str.length
  if (len === 0) {
    return -1
  }
  let map = {}
  for (let i = 0; i < len; i++) {
    let temp = map[str[i]]
    if (temp) {
      map[str[i]][0] = temp[0] + 1
    } else {
      map[str[i]] = [1, i]
    }
  }
  let res = Infinity
  for (let key in map) {
    let val = map[key]
    if (val[0] === 1) {
      res = Math.min(res, val[1])
    }
  }
  console.log(map)
  return res
}
console.log(FirstNotRepeatingChar('google'))
module.exports = {
  FirstNotRepeatingChar: FirstNotRepeatingChar,
}
