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
            let kth =this.gettokth(groupprev,k)
            if(!kth){
                break
            }

            let groupnext = kth.next

            let prev = kth.next
            let current= groupprev.next


            while(current!=groupnext){
                let temp = current.next
                current.next = prev
                prev = current
                current = temp
            }

            let temp = groupprev.next
            groupprev.next = kth 
            groupprev = temp
        }

        return dummy.next
    }

    gettokth(curr,k){

        while(curr && k >0){
            curr =curr.next
            k--
        }

        return curr
    }

}