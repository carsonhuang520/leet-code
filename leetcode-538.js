var convertBST = function (root) {
  let sum = 0
  const helper = (root) => {
    if (root === 0) {
      return 0
    }
    helper(root.right)
    sum += root.val
    root.val = sum
    helper(root.left)
  }
  helper(root)
  return root
}
