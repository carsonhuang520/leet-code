function Permutation(str) {
  if (str.length === 0) {
    return []
  }
  let res = []
  let used = new Array(str.length)
  const backtrack = (track) => {
    if (track.length === str.length) {
      res.push([...track].join(''))
      return
    }
    for (let i = 0; i < str.length; i++) {
      if (i - 1 >= 0 && str[i] === str[i - 1] && !used[i - 1]) {
        continue
      }
      if (used[i]) {
        continue
      }
      track.push(str[i])
      used[i] = true
      backtrack(track)
      track.pop()
      used[i] = false
    }
  }
  backtrack([])
  return res
}

console.log(Permutation('aab'))

module.exports = {
  Permutation: Permutation,
}
