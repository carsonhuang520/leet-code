var insertIntoBST = function (root, val) {
  if (root === null) {
    return new TreeNode(val)
  }
  if (root.val === val) {
    return root
  }
  if (root.val > val) {
    root.left = insertIntoBST(root.left, val)
  } else {
    root.right = insertIntoBST(root.right, val)
  }
  return root
}
