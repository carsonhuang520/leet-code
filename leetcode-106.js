var buildTree = function (inorder, postorder) {
  const build = (inStart, inEnd, postStart, postEnd) => {
    if (postStart > postEnd) {
      return null
    }
    let root = new TreeNode(postorder[postEnd])
    let index = inorder.indexOf(postorder[postEnd])
    let t = index - inStart
    root.left = build(inStart, index - 1, postStart, postStart + t - 1)
    root.right = build(index + 1, inEnd, postStart + t, postEnd - 1)
    return root
  }
  return build(0, inorder.length - 1, 0, postorder.length - 1)
}
