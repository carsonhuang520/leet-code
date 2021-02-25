var findTarget = function (root, k) {
  let set = new Set()
  let queue = []
  queue.push(root)
  while (queue.length) {
    let node = queue.pop()
    if (set.has(k - node.val)) {
      return true
    }
    set.add(node.val)
    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
  }
  return false
}
