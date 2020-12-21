var preorderTraversal = function (root) {
  let res = []
  const helper = (root) => {
    if (root === null) {
      return root
    }
    res.push(root.val)
    if (root.left !== null) {
      helper(root.left)
    }
    if (root.right !== null) {
      helper(root.right)
    }
  }
  helper(root)
  return res
}

var preorderTraversal = function (root) {
  if (root === null) {
    return []
  }
  let stack = []
  let res = []
  stack.push(root)
  while (stack.length) {
    let temp = stack.pop()
    res.push(temp.val)
    if (temp.right !== null) {
      stack.push(temp.right)
    }
    if (temp.left !== null) {
      stack.push(temp.left)
    }
  }
  return res
}
