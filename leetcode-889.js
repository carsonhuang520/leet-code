var constructFromPrePost = function (pre, post) {
  const build = (preStart, preEnd, postStart, postEnd) => {
    if (preStart > preEnd || postStart > postEnd) {
      return null
    }
    if (preStart === preEnd || postStart === postEnd) {
      return new TreeNode(pre[preStart])
    }
    let root = new TreeNode(pre[preStart])
    let index = post.indexOf(pre[preStart + 1])
    let t = index - postStart
    root.left = build(preStart + 1, preStart + t + 1, postStart, postStart + t)
    root.right = build(preStart + t + 2, preEnd, postStart + t + 1, postEnd - 1)
    return root
  }
  return build(0, pre.length - 1, 0, post.length - 1)
}
