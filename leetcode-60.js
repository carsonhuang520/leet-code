var getPermutation = function (n, k) {
  const backtrack = (track) => {
    if (track.length === n) {
      k--
      if (k === 0) {
        return track.join('')
      }
      return
    }
    for (let i = 1; i <= n; i++) {
      if (track.indexOf(i) !== -1) {
        continue
      }
      track.push(i)
      let res = backtrack(track)
      track.pop()
      if (res) {
        return res
      }
    }
  }
  return backtrack([])
}

console.log(getPermutation(9, 3))
