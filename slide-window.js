function slidingWindow(s, t) {
  let need = new Map()
  let window = new Map()
  for (let c of t) {
    if (!need.get(c)) {
      need.set(c, 0)
    }
    need.set(c, need.get(c)++)
  }
  let left = 0
  let right = 0
  while (right < s.length) {
    let c = s[right]
    right++
    // ...
    while (/*window needs shrink*/ true) {
      let d = s[left]
      left++
      // ...
    }
  }
}
