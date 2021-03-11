var isSymmetric = function (root) {
  if (root === null) {
    return true
  }
  const helper = (left, right) => {
    if (left === null && right === null) {
      return true
    }
    if (left === null || right === null || left.val !== right.val) {
      return false
    }
    return helper(left.left, right.right) && helper(left.right, right.left)
  }
  return helper(root.left, root.right)
}
