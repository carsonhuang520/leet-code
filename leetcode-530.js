var getMinimumDifference = function (root) {
  let prev = new TreeNode(-Infinity)
  let res = 0
  const helper = (root) => {
    if (root === null) {
      return
    }
    helper(root.left)
    res = Math.min(res, abs(prev.val - root.val))
    prev = root
    helper(root.right)
  }
  return res
}
