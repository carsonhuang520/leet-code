var invertTree = function (root) {
  if (root === null) {
    return root
  }
  invertTree(root.left)
  invertTree(root.right)
  let temp = root.left
  root.left = root.right
  root.right = temp
  return root
}
