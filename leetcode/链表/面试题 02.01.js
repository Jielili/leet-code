/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function(head) {
    const visited = new Map()
    const res = new ListNode(null, head)
    let prev = res
    while (prev.next) {
        if (visited.has(prev.next.val)) {
            prev.next = prev.next.next
        } else {
            prev = prev.next
            visited.set(prev.val, 1)
        }
    }
    return res.next
};