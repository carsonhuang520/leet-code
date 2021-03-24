function TreeNode(x) {
  this.val = x
  this.left = null
  this.right = null
}
function reConstructBinaryTree(pre, vin) {
  return helper(pre, 0, pre.length - 1, vin, 0, vin.length - 1)
}
function helper(pre, preStart, preEnd, vin, inStart, inEnd) {
  if (preStart > preEnd) {
    return null
  }
  let root = new TreeNode(pre[preStart])
  let index = vin.indexOf(pre[preStart])
  let size = index - inStart
  root.left = helper(
    pre,
    preStart + 1,
    preStart + size,
    vin,
    inStart,
    index - 1
  )
  root.right = helper(pre, preStart + size + 1, preEnd, vin, index + 1, inEnd)
  return root
}
console.log(reConstructBinaryTree([1, 2, 3, 4, 5, 6, 7], [3, 2, 4, 1, 6, 5, 7]))
module.exports = {
  reConstructBinaryTree: reConstructBinaryTree,
}
