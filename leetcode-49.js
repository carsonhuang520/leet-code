/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var isAnagrams = function (str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }
  let map = new Map()
  for (let i = 0; i < str1.length; i++) {
    let t = str1.charAt(i)
    if (map.get(t) === undefined) {
      map.set(t, 0)
    }
    map.set(t, map.get(t) + 1)
  }
  for (let i = 0; i < str2.length; i++) {
    let t = str2.charAt(i)
    if (map.get(t) === undefined) {
      return false
    } else {
      map.set(t, map.get(t) - 1)
      if (map.get(t) === 0) {
        map.delete(t)
      }
    }
  }
  if (map.size === 0) {
    return true
  }
}
var groupAnagrams = function (strs) {
  let res = []
  let map = new Map()
  for (let i = 0; i < strs.length; i++) {
    map.set(strs[i], false)
  }
  for (let i = 0; i < strs.length; i++) {
    if (map.get(strs[i]) === true) {
      continue
    }
    let temp = []
    temp.push(strs[i])
    for (let j = i + 1; j < strs.length; j++) {
      let flag = isAnagrams(strs[i], strs[j])
      if (flag) {
        temp.push(strs[j])
        map.set(strs[j], true)
      }
    }
    res.push(temp)
  }
  return res
}

// console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))

var groupAnagrams2 = function (strs) {
  let map = new Object()
  for (let s of strs) {
    let count = new Array(26).fill(0)
    for (let t of s) {
      count[t.charCodeAt() - 'a'.charCodeAt()]++
    }
    map[count] ? map[count].push(s) : (map[count] = [s])
  }
  return Object.values(map)
}

console.log(groupAnagrams2(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
