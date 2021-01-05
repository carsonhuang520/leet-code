var openLock = function (deadends, target) {
  let visited = new Set()
  let queue = []
  let res = 0
  const up = (str, j) => {
    let temp = str.split('')
    if (temp[j] === '9') {
      temp[j] = '0'
    } else {
      temp[j] = '' + (parseInt(temp[j]) + 1)
    }
    return temp.join('')
  }
  const down = (str, j) => {
    let temp = str.split('')
    if (temp[j] === '0') {
      temp[j] = '9'
    } else {
      temp[j] = '' + (parseInt(temp[j]) - 1)
    }
    return temp.join('')
  }
  queue.push('0000')
  visited.add('0000')
  while (queue.length) {
    let len = queue.length
    for (let k = 0; k < len; k++) {
      let cur = queue.shift()
      if (deadends.indexOf(cur) !== -1) {
        continue
      }
      if (cur === target) {
        return res
      }
      for (let i = 0; i < 4; i++) {
        let upStr = up(cur, i)
        if (!visited.has(upStr)) {
          queue.push(upStr)
          visited.add(upStr)
        }
        let downStr = down(cur, i)
        if (!visited.has(downStr)) {
          queue.push(downStr)
          visited.add(downStr)
        }
      }
    }
    res++
  }
  return -1
}

console.log(
  openLock(
    ['8887', '8889', '8878', '8898', '8788', '8988', '7888', '9888'],
    '8888'
  )
)
