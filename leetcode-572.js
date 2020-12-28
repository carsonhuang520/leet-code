var isSubtree = function (s, t) {
  if (s === null) {
    return false
  }
  return helper(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t)
}

function helper(s, t) {
  if (s === null && t === null) {
    return true
  }
  if (s === null || t === null || s.val !== t.val) {
    return false
  }
  return helper(s.left, t.left) && helper(s.right, t.right)
}
