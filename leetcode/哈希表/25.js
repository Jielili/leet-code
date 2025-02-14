/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let p = head, q = head
  const res = {}
  let res_end = res
  let i = 0
  while (q) {
    if (i === k - 1) {
      const { start, end } = reverse(p, k)
      res_end.next = start
      res_end = end
      q = p.next
      p = p.next
      i = 0
      continue
    }
    q = q.next
    i++
  }
return res.next
};

var reverse = function (start, k) {
  let p = start, q = start
  for (let i = 0; i < k - 1; i++) {
    const x = q.next.next
    q.next.next = p
    p = q.next
    q.next = x
  }
  return { start: p, end: q}
}

console.log(reverseKGroup(
  {
    val: 1,
    // next: null
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: null
          }
        }
      }
    }
  }, 2))

  