var recoverTree = function (root) {
  let err1 = null
  let err2 = null
  let prev = new TreeNode(-Infinity)
  const helper = (root) => {
    if (root === null) {
      return
    }
    helper(root.left)
    if (prev.val > root.val && err1 === null) {
      err1 = prev
    }
    if (prev.val > root.val && err1 !== null) {
      err2 = root
    }
    prev = root
    helper(root.right)
  }
  helper(root)
  let temp = err1.val
  err1.val = err2.val
  err2.val = temp
}
