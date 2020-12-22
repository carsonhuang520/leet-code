var recoverTree = function(root) {
  recoverTree(root.left)
  // 中序遍历
  recoverTree(root.right)
}