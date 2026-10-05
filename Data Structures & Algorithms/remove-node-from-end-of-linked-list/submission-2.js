/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
       let first = head
        let dummy = new ListNode(0)
        dummy.next =head
        let second= dummy

        for(let i = 0 ; i < n ; i++){
            first = first.next
        }

        while(first){
            first = first.next
            second = second.next
        }

        second.next = second.next.next


        return dummy.next
    }
}
