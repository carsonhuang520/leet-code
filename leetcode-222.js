var countNodes = function (root) {
  const helper = (root) => {
    if (root === null) {
      return 0
    }
    let left = helper(root.left)
    let right = helper(root.right)
    return left + right + 1
  }
  return helper(root)
}

/**
 * 对于完全二叉树，分别计算左子树(hl)和右子树的高度(hr)
 * 若hl和hr相等，此时左子树一定是满二叉树，它的节点数为2**hl-1，加上root就为2**hl，然后对右子树进行递归统计
 * 若hl和hr不相等，此时倒数第二层右子树一定是满二叉树，它的节点数为2**hr-1，加上root就为2**hr，然后对左子树进行递归统计
 * @param {*} root
 * @returns
 */
var countNodes2 = function (root) {
  const countLevel = (root) => {
    let res = 0
    while (root !== null) {
      res++
      root = root.left
    }
    return res
  }
  if (root === null) {
    return 0
  }
  let left = countLevel(root.left)
  let right = countLevel(root.right)
  if (left === right) {
    return Math.pow(2, left) + countNodes2(root.right)
  } else {
    return Math.pow(2, right) + countNodes2(root.left)
  }
}

// 时间复杂度是O(logNlogN)
var countNodes3 = function (root) {
  let l = root
  let r = root
  let hl = 0
  let hr = 0
  while (l !== null) {
    hl++
    l = l.left
  }
  while (r !== null) {
    hr++
    r = r.right
  }
  if (hl === hr) {
    return Math.pow(2, hl) - 1
  }
  return 1 + countNodes3(root.left) + countNodes3(root.right)
}
