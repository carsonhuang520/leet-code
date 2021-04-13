function test(root) {
  if (root === null) {
    return ''
  }
  let res = root.val + '#'

  res += test(root.child)
  res += test(root.parent)
  return res
}
