var mirrorTree = function (root) {
  if (root === null) {
    return null
  }
  if (root.left === null || root.right === null) {
    return null
  }
  let temp = root.left
  root.left = root.right
  root.right = temp
  if (root.left) {
    mirrorTree(root.left)
  }
  if (root.right) {
    mirrorTree(root.right)
  }
  return root
}
