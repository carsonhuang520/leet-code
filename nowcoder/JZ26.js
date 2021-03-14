function Convert(pRootOfTree) {
  if (pRootOfTree === null) {
    return null
  }
  let pre = null
  let head = null
  const convertTree = (cur) => {
    if (cur === null) {
      return
    }
    convertTree(cur.left)
    if (pre !== null) {
      pre.right = cur
    } else {
      head = cur
    }
    cur.left = pre
    pre = cur
    convertTree(cur.right)
  }
  convertTree(pRootOfTree)
  return head
}
module.exports = {
  Convert: Convert,
}
