var inorderTraversal = function (root) {
  let res = []
  const traverse = (root) => {
    if (root === null) {
      return
    }
    if (root.left !== null) {
      traverse(root.left)
    }
    res.push(root.val)
    if (root.right !== null) {
      traverse(root.right)
    }
  }
  traverse(root)
  return res
}

var inorderTraversal = function (root) {
  if (root === null) {
    return []
  }
  let stack = []
  let res = []
  let p = root
  while (stack.length || p) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    let node = stack.pop()
    res.push(node.val)
    p = node.right
  }
  return res
}
