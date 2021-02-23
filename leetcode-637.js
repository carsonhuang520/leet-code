var averageOfLevels = function (root) {
  if (root === null) {
    return [0]
  }
  let res = []
  let queue = []
  queue.push(root)
  while (queue.length) {
    let len = queue.length
    let sum = 0
    for (let i = 0; i < len; i++) {
      let temp = queue.shift()
      sum += temp.val
      if (temp.left !== null) {
        queue.push(temp.left)
      }
      if (temp.right !== null) {
        queue.push(temp.right)
      }
    }
    res.push(sum / len)
  }
  return res
}
