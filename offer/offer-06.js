var reversePrint = function (head) {
  let res = []
  const helper = (head) => {
    if (head === null) {
      return
    }
    helper(head.next)
    res.push(head.val)
  }
  helper(head)
  return res
}
