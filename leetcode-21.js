var mergeTwoLists = function (l1, l2) {
  const merge = (l1, l2) => {
    if (l1 === null) {
      return l2
    }
    if (l2 === null) {
      return l1
    }
    if (l1.val > l2.val) {
      l2.next = merge(l1, l2.next)
      return l2
    } else {
      l1.next = merge(l1.next, l2)
      return l1
    }
  }
  return merge(l1, l2)
}
