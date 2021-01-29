var minWindow = function (s, t) {
  let need = {}
  let window = {}
  let left = 0
  let right = 0
  let valid = 0
  let start = 0
  let len = Number.POSITIVE_INFINITY
  for (let c of t) {
    if (!need[c]) {
      need[c] = 0
    }
    need[c]++
  }
  while (right < s.length) {
    let c = s[right]
    right++
    if (need[c]) {
      if (!window[c]) {
        window[c] = 0
      }
      window[c]++
      if (window[c] === need[c]) {
        valid++
      }
    }

    while (valid === Object.keys(need).length) {
      if (right - left < len) {
        start = left
        len = right - left
      }
      let d = s[left]
      left++
      if (need[d]) {
        if (window[d] === need[d]) {
          valid--
        }
        window[d]--
      }
    }
  }
  console.log(need)
  console.log(start, len)
  return len === Number.POSITIVE_INFINITY ? '' : s.substr(start, len)
}

console.log(minWindow('ADOBECODEBANC', 'ABC'))
