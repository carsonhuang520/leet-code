var minDepth = function (root) {
  if (root === null) {
    return 0
  }
  let queue = []
  queue.push(root)
  let depth = 1
  while (queue.length) {
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let cur = queue.shift()
      if (cur.left === null && cur.right === null) {
        return depth
      }
      if (cur.left !== null) {
        queue.push(cur.left)
      }
      if (cur.right !== null) {
        queue.push(cur.right)
      }
    }
    depth++
  }
}
