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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(!lists || lists.length==0){
            return null
        }

        while(lists.length > 1){
            let mergedlists = []

            for(let i =0 ; i<lists.length ; i+=2){
                const list1 = lists[i]
                const list2 = lists.length > i+1 ? lists[i+1] : null

                mergedlists.push(this.mergeLists(list1,list2))
            }
            lists = mergedlists
        }

        return lists[0]
    }

    mergeLists(l1,l2){
            const dummy = new ListNode(0)
            let prev = dummy
            while(l1 && l2){
                if(l1.val<=l2.val){
                     prev.next =  l1
                     l1=l1.next  
                }else{
                    prev.next=l2
                    l2=l2.next
                }
                prev=prev.next
            }

            prev.next = l1||l2

            return dummy.next
    }
}
