var lowestCommonAncestor = function (root, p, q) {
  if (p > q) {
    ;[p, q] = [q, p]
  }
  const helper = (root, p, q) => {
    if (root === null) {
      return root
    }
    if (root.val >= p.val && root.val <= q.val) {
      return root
    }
    let left = null
    let right = null
    if (p.val < root.val && q.val < root.val) {
      left = helper(root.left, p, q)
    }
    if (p.val > root.val && q.val > root.val) {
      right = helper(root.right, p, q)
    }
    if (left !== null) {
      return left
    }
    if (right !== null) {
      return right
    }
    return null
  }
  return helper(root, p, q)
}
