var mergeKLists = function (lists) {
  const merge = (lists, start, end) => {
    if (end - start < 0) {
      return null
    }
    if (end - start === 0) {
      return lists[end]
    }
    let mid = Math.floor(start + (end - start) / 2)
    return mergeTwoList(merge(lists, start, mid), merge(lists, mid + 1, end))
  }
  return merge(lists, 0, lists.length - 1)
}

var mergeTwoList = function (l1, l2) {
  const merge = (l1, l2) => {
    if (l1 === null) {
      return l2
    }
    if (l2 === null) {
      return l1
    }
    if (l1.val > l2.val) {
      l2.next = mergeTwoList(l1, l2.next)
      return l2
    } else {
      l1.next = mergeTwoList(l1.next, l2)
      return l1
    }
  }
  return merge(l1, l2)
}
