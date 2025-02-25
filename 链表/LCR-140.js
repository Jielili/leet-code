/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} cnt
 * @return {ListNode}
 */
var trainingPlan = function(head, cnt) {
    let count = 0, arr = []
    let cur = head
    while (cur) {
        arr.push(cur.val)
        cur = cur.next
    }
    return arr[arr.length - cnt]
};