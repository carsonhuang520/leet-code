var sortList = function (head) {
  if (head === null || head.next === null) {
    return head
  }
  let mid = getMidNode(head)
  let temp = mid.next
  mid.next = null
  let left = sortList(head)
  let right = sortList(temp)
  return mergeTwo(left, right)
}

var mergeTwo = (left, right) => {
  let result = new ListNode(0)
  let head = result
  while (left !== null && right !== null) {
    if (left.val > right.val) {
      result.next = right
      right = right.next
    } else {
      result.next = left
      left = left.next
    }
    result = result.next
  }
  result.next = left !== null ? left : right
  return head.next
}

var getMidNode = (head) => {
  if (head === null) {
    return head
  }
  let dummyHead = new ListNode(0)
  dummyHead.next = head
  let slow = dummyHead
  let fast = dummyHead
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

var mergeSort = (nums) => {
  if (nums.length < 2) {
    return nums
  }
  let len = nums.length
  let mid = Math.floor(len / 2)
  let left = nums.slice(0, mid)
  let right = nums.slice(mid, len)
  return merge(mergeSort(left), mergeSort(right))
}

var merge = (left, right) => {
  let result = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] >= right[0]) {
      result.push(right.shift())
    } else {
      result.push(left.shift())
    }
  }
  while (left.length) {
    result.push(left.shift())
  }
  while (right.length) {
    result.push(right.shift())
  }
  return result
}

console.log(mergeSort([6, 2, 3, 1, 4, 5, 7]))
