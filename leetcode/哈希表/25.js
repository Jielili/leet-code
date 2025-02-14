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
  const res = {val:null, next: head}
  let pre = res, p = res, next = res
  let i = 0
  while (p.next) {
    while (i <= k && p.next) {
      p = p.next
      i++
      if (i === k) {
        const start = pre.next
        next = p.next
        const reverse_res = reverse(start, k)
        pre.next = reverse_res.start
        reverse_res.end.next = next
        pre = reverse_res.end
        p = pre
        i = 0
        continue
      }
    }
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

  