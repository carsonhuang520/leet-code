function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var generateTrees = function (n) {
  const helper = (start, end) => {
    if (start > end) {
      return [null]
    }
    if (start === end) {
      return [new TreeNode(start)]
    }
    let res = []
    for (let i = start; i <= end; i++) {
      let leftNodes = helper(start, i - 1)
      let rightNodes = helper(i + 1, end)
      for (let j = 0; j < leftNodes.length; j++) {
        for (let k = 0; k < rightNodes.length; k++) {
          let root = new TreeNode(i)
          root.left = leftNodes[j]
          root.right = rightNodes[k]
          res.push(root)
        }
      }
    }
    return res
  }
  if (n === 0) {
    return []
  }
  return helper(1, n)
}

console.log(generateTrees(3))
