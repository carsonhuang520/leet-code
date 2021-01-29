var checkInclusion = function (s1, s2) {
  let need = {}
  let window = {}
  let left = 0
  let right = 0
  let valid = 0
  for (let c of s1) {
    if (!need[c]) {
      need[c] = 0
    }
    need[c]++
  }
  while (right < s2.length) {
    let c = s2[right]
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
    while (right - left >= s1.length) {
      if (valid === Object.keys(need).length) {
        return true
      }
      let d = s2[left]
      left++
      if (need[d]) {
        if (need[d] === window[d]) {
          valid--
        }
        window[d]--
      }
    }
  }
  return false
}

console.log(checkInclusion('ab', 'eidbaooo'))
console.log(checkInclusion('ab', 'eidboaoo'))
