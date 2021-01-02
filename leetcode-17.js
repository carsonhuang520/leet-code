var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return []
  }
  const res = []
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }
  const backtrack = (track, start) => {
    if (track.length === digits.length) {
      res.push(track.join(''))
      return
    }
    for (let i = start; i < digits.length; i++) {
      for (let j = 0; j < map[digits[i]].length; j++) {
        track.push(map[digits[i]][j])
        backtrack(track, i + 1)
        track.pop()
      }
    }
  }
  console.time()
  backtrack([], 0)
  console.timeEnd()
  return res
}

console.log(letterCombinations('23456789'))

var letterCombinations2 = function (digits) {
  if (digits.length === 0) {
    return []
  }
  const res = []
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }
  const backtrack = (str, start) => {
    if (start > digits.length - 1) {
      res.push(str)
      return
    }
    const letters = map[digits[start]]
    for (let letter of letters) {
      backtrack(str + letter, start + 1)
    }
  }
  console.time()
  backtrack('', 0)
  console.timeEnd()
  return res
}

console.log(letterCombinations2('23456789'))
