var levelOrder = function (root) {
  if (root === null) {
    return []
  }
  let queue = []
  let res = []
  let level = 0
  queue.push(root)
  while (queue.length) {
    let size = queue.length
    let cur = []
    for (let i = 0; i < size; i++) {
      let temp = queue.shift()
      cur.push(temp.val)
      if (temp.left) {
        queue.push(temp.left)
      }
      if (temp.right) {
        queue.push(temp.right)
      }
    }
    if (level % 2 === 0) {
      res.push(cur)
    } else {
      res.push(cur.reverse())
    }
    level++
  }
  return res
}
