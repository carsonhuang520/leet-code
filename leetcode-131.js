var partition = function (s) {
  let res = []

  const isPalindrome = (str) => {
    let len = str.length
    for (let i = 0; i < Math.floor(len / 2); i++) {
      if (str[i] !== str[len - i - 1]) {
        return false
      }
    }
    return true
  }

  const backtrack = (str, temp, start) => {
    if (isPalindrome(str)) {
      if (str.length !== 0) {
        temp.push(str)
      }
      if (start === s.length) {
        res.push(temp)
      }
    } else {
      return
    }

    for (let i = start; i < s.length; i++) {
      backtrack(str + s[i], temp, i + 1)
    }
    return
  }

  backtrack('', [], 0)
  return res
}

// console.log(partition('aab'))

var partition2 = (s) => {
  let len = s.length
  let res = []

  const isPalindrome = (str, left, right) => {
    while (left < right) {
      if (str[left] !== str[right]) {
        return false
      }
      left++
      right--
    }
    return true
  }

  const backtrack = (start, path) => {
    if (start === len) {
      res.push([...path])
      return
    }
    for (let i = start; i < len; i++) {
      if (!isPalindrome(s, start, i)) {
        continue
      }
      path.push(s.substring(start, i + 1))
      backtrack(i + 1, path)
      path.pop()
    }
  }
  backtrack(0, [])
  return res
}

console.log(partition2('aab'))
