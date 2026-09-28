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
     * @return {void}
     */
    reorderList(head) {
        let s = head
        let f = head
        while(f && f.next){
            s=s.next
            f=f.next.next
        }

        let second = s.next
        let prev = null 
        s.next = null

        while(second){
            const temp = second.next
            second.next = prev
            prev = second 
            second = temp
        }

        let first = head
        second = prev

        while(second){
            const temp1 = first.next
            const temp2 = second.next
            first.next = second
            second.next = temp1

            first = temp1
            second = temp2
        }

        
    }
}
