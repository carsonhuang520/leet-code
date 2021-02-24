var minDiffInBST = function (root) {
  let prev = new TreeNode(-1)
  let res = Infinity
  const helper = (root) => {
    if (root === null) {
      return
    }
    helper(root.left)
    res = Math.min(res, Math.abs(prev.val - root.val))
    prev = root
    helper(root.right)
  }
  helper(root)
  return res
}
