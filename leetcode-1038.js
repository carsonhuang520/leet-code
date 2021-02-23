var bstToGst = function (root) {
  if (root === null) {
    return null
  }
  let sum = 0
  const helper = (root) => {
    if (root === null) {
      return 0
    }
    helper(root.right)
    sum += root.val
    root.val = sum
    helper(root.left)
  }
  return root
}
