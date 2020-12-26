var delNodes = function (root, to_delete) {
  let res = []
  const helper = (root) => {
    if (root === null) {
      return root
    }
    root.left = helper(root.left)
    root.right = helper(root.right)
    if (to_delete.indexOf(root.val) !== -1) {
      if (root.left !== null) {
        res.push(root.left)
      }
      if (root.right !== null) {
        res.push(root.right)
      }
      root = null
    }
    return root
  }
  if (root === null) {
    return res
  }
  root = helper(root)
  if (root !== null) {
    res.push(root)
  }
  return res
}
