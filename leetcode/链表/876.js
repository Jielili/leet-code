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
// var middleNode = function (head) {
//     let count = 0, res = head
//     while (head) {
//         count++
//         head = head.next
//     }
//     const mid = count >> 1
//     for (let i = 0; i < mid; i++) {
//         res = res.next
//     }
//     return res
// };

var middleNode = function (head) {
    let fast = head, slow = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
};