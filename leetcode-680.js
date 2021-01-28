var validPalindrome = function (s) {
  const isValid = (str, l, r) => {
    while (l < r) {
      if (str[l] !== str[r]) {
        return false
      }
      l++
      r--
    }
    return true
  }
  let left = 0
  let right = s.length - 1
  while (left < right) {
    if (s[left] !== s[right]) {
      return isValid(s, left + 1, right) || isValid(s, left, right - 1)
    }
    left++
    right--
  }
  return true
}
