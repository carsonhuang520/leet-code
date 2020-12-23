var binaryTreePaths = function (root) {
  let path = []
  let res = []
  let helper = (root) => {
    if (root === null) {
      return
    }
    path.push(root)
    helper(root.left)
    helper(root.right)
    if (!root.left && !root.right) {
      res.push(path.map((item) => item.val).join('->'))
    }
    path.pop()
  }
  helper(root)
  return res
}
