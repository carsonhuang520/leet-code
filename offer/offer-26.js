const helper = (A, B) => {
  if (B === null) {
    return true
  }
  if (A === null || A.val !== B.val) {
    return false
  }
  return helper(A.left, B.left) && helper(A.right, B.right)
}
var isSubStructure = function (A, B) {
  if (A === null) {
    return false
  }
  return (
    A !== null &&
    B !== null &&
    (helper(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B))
  )
}
