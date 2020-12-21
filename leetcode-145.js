var postorderTraversal = function (root) {
  let res = []
  const traverse = (root) => {
    if (root === null) {
      return
    }
    if (root.left) {
      traverse(root.left)
    }
    if (root.right) {
      traverse(root.right)
    }
    res.push(root.val)
  }
  traverse(root)
  return res
}

var postorderTraversal = function (root) {
  if (root === null) {
    return []
  }
  let res = []
  let stack = []
  stack.push(root)
  while (stack.length) {
    let node = stack.pop()
    res.push(node.val)
    if (node.left) {
      stack.push(node.left)
    }
    if (node.right) {
      stack.push(node.right)
    }
  }
  return res.reverse()
}
