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
 * @return {number}
 */
var kthToLast = function(head, k) {
    let count = 0, res = head
    while (head) {
        count++
        head = head.next
    }
    for (let i = 0; i < count - k; i++) {
        res = res.next
    }
    return res
};