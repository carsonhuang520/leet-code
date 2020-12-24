var sumNumbers = function (root) {
  const helper = (root) => {
    let res = []
    if (root === null) {
      return []
    }
    if (root.left === null && root.right === null) {
      res.push('' + root.val)
      return res
    }
    let leftArr = helper(root.left)
    for (let i = 0; i < leftArr.length; i++) {
      res.push(root.val + leftArr[i])
    }
    let rightArr = helper(root.right)
    for (let i = 0; i < rightArr.length; i++) {
      res.push(root.val + rightArr[i])
    }
    return res
  }
  let ans = helper(root).reduce((prev, item) => {
    prev += Number(item)
    return prev
  }, 0)
  return ans
}
