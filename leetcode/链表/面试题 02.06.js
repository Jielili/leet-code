/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head || !head.next) return true
    let fast = head, slow = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    const second_head = reverseList(fast ? slow.next : slow)
    let p = head, q = second_head
    while (q && p.val === q.val) {
        p = p.next
        q = q.next
    }
    return !q && p === slow
};

var reverseList = function (head) {
    let res = head, cur = head.next
    head.next = null
    while (cur) {
        const next = cur.next
        cur.next = res
        res = cur
        cur = next
    }
    return res
}