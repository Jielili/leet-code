/**
 * Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}
 */

function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    const len = lists.length
    if (len === 1) return lists[0]
    if (len === 2) return merge(lists[0], lists[1])
	return mergeKLists([mergeKLists(lists.slice(0, len>>1)), mergeKLists(lists.slice((len>>1), len))])
};

var merge = function (list1, list2) {
    let p = list1, q = list2
    if (!p && !q) return null
    const res = new ListNode()
    let cur = res
    while (p || q) {
        if (!p) {
            cur.next = q
            break
        }
        if (!q) {
            cur.next = p
            break
        }
        if (p.val < q.val) {
            cur.next = p
            cur = cur.next
            p = p.next
        } else {
            cur.next = q
            cur = cur.next
            q = q.next
        }
    }
    return res.next
}

console.log(mergeKLists([{ val: 2, next: null }, null, { val: -1, next: null }]))
