var findBottomLeftValue = function (root) {
  if (root === null) {
    return 0
  }
  let queue = []
  let res
  queue.push(root)
  while (queue.length) {
    let size = queue.length
    for (let i = 0; i < size; i++) {
      let temp = queue.shift()
      if (i === 0) {
        res = temp.val
      }
      if (temp.left) {
        queue.push(temp.left)
      }
      if (temp.right) {
        queue.push(temp.right)
      }
    }
  }
  return res
}
