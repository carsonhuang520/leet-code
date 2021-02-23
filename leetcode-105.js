var buildTree = function (preorder, inorder) {
  const build = (preStart, preEnd, inStart, inEnd) => {
    if (preStart > preEnd) {
      return null
    }
    let index = inorder.indexOf(preorder[preStart])
    let root = new TreeNode(preorder[preStart])
    let t = index - inStart
    root.left = build(preStart + 1, preStart + t, inStart, index - 1)
    root.right = build(preStart + t + 1, preEnd, index + 1, inEnd)
    return root
  }
  return build(0, preorder.length - 1, 0, inorder.length - 1)
}
