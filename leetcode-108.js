var sortedListToBST = function (head) {
  const helper = (left, right) => {
    if (left > right) {
      return
    }
    let mid = Math.floor((right + left) / 2)
    let root = new TreeNode(head[mid])
    root.left = helper(left, mid - 1)
    root.right = helper(mid + 1, right)
    return root
  }
  let root = helper(0, head.length - 1)
  return root
}
