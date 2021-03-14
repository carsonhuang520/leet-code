function RandomListNode(val) {
  this.label = val
  this.next = null
  this.random = null
}
function Clone(pHead) {
  if (pHead === null) {
    return
  }
  let cur = pHead
  while (cur !== null) {
    let temp = new RandomListNode(cur.label)
    temp.next = cur.next
    cur.next = temp
    cur = temp.next
  }
  cur = pHead
  let newHead = cur.next
  let temp = newHead
  while (temp !== null) {
    let next = temp.next
    temp.next = next ? next.next : null
    temp.random = cur.random ? cur.random.next : null
    temp = temp.next
    cur.next = next
    cur = next
  }
  return newHead
}

let head = new RandomListNode(1)
head.next = new RandomListNode(2)
head.next.next = new RandomListNode(3)

function print(head) {
  while (head !== null) {
    console.log(head.label)
    head = head.next
  }
}

print(Clone(head))

module.exports = {
  Clone: Clone,
}
