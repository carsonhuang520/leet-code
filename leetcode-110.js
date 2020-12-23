var isBalanced = function (root) {
  if (root === null) {
    return true
  }
  const helper = (root) => {
    if (root === null) {
      return 0
    }
    return Math.max(helper(root.left), helper(root.right)) + 1
  }
  return (
    Math.abs(helper(root.left) - helper(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  )
}
