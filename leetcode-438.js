var findAnagrams = function (s, p) {
  let need = {}
  let window = {}
  let left = 0
  let right = 0
  let valid = 0
  let res = []
  for (let c of p) {
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
      if (need[c] === window[c]) {
        valid++
      }
    }

    while (right - left >= p.length) {
      if (valid === Object.keys(need).length) {
        res.push(left)
      }
      let d = s[left]
      left++
      if (need[d]) {
        if (need[d] === window[d]) {
          valid--
        }
        window[d]--
      }
    }
  }
  return res
}

console.log(findAnagrams('abab', 'ab'))
