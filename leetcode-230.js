var kthSmallest = function (root, k) {
  let queue = []
  const helper = (root) => {
    if (root === null) {
      return
    }
    helper(root.left)
    queue.push(root)
    helper(root.right)
  }
  helper(root)
  return queue[k - 1].val
}
