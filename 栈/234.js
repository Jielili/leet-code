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
    const stack = []
    let fast = head, slow = head
    while (fast && fast.next) {
        stack.push(slow.val)
        slow = slow.next
        fast = fast.next.next
    }
    if (fast) slow = slow.next
    while (slow) {
        if (stack.pop() === slow.val) {
            slow = slow.next
        } else {
            return false
        }
    }
    return stack.length === 0
};