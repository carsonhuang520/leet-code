function EntryNodeOfLoop(pHead) {
  if (pHead === null) {
    return null
  }
  let fast = pHead
  let slow = pHead
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      slow = pHead
      while (slow !== fast) {
        slow = slow.next
        fast = fast.next
      }
      return slow
    }
  }
  return null
}

function ListNode(val) {
  this.val = val
  this.next = null
}

let head = new ListNode(1)
let p
let cur = head
for (let i = 2; i < 6; i++) {
  let temp = new ListNode(i)
  cur.next = temp
  cur = temp
  if (i === 3) {
    p = temp
  }
}
cur.next = p
