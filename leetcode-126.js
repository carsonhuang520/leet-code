var findLadders = function (beginWord, endWord, wordList) {
  let res = []

  const isContain = (str) => {
    return wordList.indexOf(str) !== -1
  }

  const backtrack = (track, start, str) => {
    if (track.length && track[track.length - 1] === endWord) {
      res.push([...track])
      return
    }

    for (let i = start; i < 3; i++) {
      for (let j = 0; j < 26; j++) {
        let s = String.fromCharCode(97 + j)
        let temp = str.replace(str[i], s)
        // console.log(temp)
        if (!isContain(temp)) {
          continue
        }
        console.log(temp)
        track.push(temp)
        backtrack(track, i + 1, temp)
        track.pop()
      }
    }
  }

  backtrack([], 0, beginWord)
  return res
}

console.log(
  findLadders('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])
)
