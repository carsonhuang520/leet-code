var isAnagram = function (s, t) {
  let map = new Map()
  for (let v of s) {
    if (!map.has(v)) {
      map.set(v, 0)
    }
    map.set(v, map.get(v) + 1)
  }
  for (let v of t) {
    if (map.get(v)) {
      map.set(v, map.get(v) - 1)
    } else {
      return false
    }
  }
  for (let m of map.values()) {
    if (m !== 0) {
      return false
    }
  }
  return true
}

console.log(isAnagram('aa', 'a'))
