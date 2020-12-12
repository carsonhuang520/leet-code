/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const similar = (from, to) => {
    let diff = 0
    for (let i = 0; i < from.length; i++) {
      if (from.charAt(i) !== to.charAt(i)) {
        diff++
      }
      if (diff > 1) {
        return false
      }
    }
    return true
  }
  let queue = [beginWord]
  let index = wordList.indexOf(beginWord)
  if (index !== -1) {
    wordList.splice(index, 1)
  }
  let res = 2
  while (queue.length) {
    let size = queue.length
    while (size--) {
      let front = queue.shift()
      for (let i = 0; i < wordList.length; i++) {
        if (!similar(front, wordList[i])) {
          continue
        }
        if (wordList[i] === endWord) {
          return res
        } else {
          queue.push(wordList[i])
        }
        wordList.splice(i, 1)
        i--
      }
    }
    res += 1
  }
  return 0
}

console.log(
  ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])
)
