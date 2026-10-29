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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
     let dummy = new ListNode(0,head)
     let groupprev = dummy

     while(true){
        let kth = this.getToKth(groupprev,k)
        if(!kth){
            break
        }
        let groupnext = kth.next

        let prev = groupnext
        let curr = groupprev.next

        while(curr!=groupnext){
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }
        let temp = groupprev.next
        groupprev.next = kth
        groupprev = temp 



     }

     return dummy.next
        l
    }

      getToKth(current,k){

        while(current&&k>0){
            current=current.next
            k--
        }

        return current
      }  


}