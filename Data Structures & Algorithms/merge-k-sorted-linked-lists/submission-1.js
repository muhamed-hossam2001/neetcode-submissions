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
    if(!lists || lists.length == 0){
        return null
    }

    while(lists.length > 1){
        let mergedlists = []

        for(let i = 0 ; i < lists.length ; i+= 2){
            let list1 = lists[i]
            let list2 = lists[i+1] != null ? lists[i+1] : null
            mergedlists.push(this.mergetwolists(list1,list2))
        }

        lists = mergedlists
    }
    
    return lists[0]
    
    }

    mergetwolists(l1,l2){
        let dummy = new ListNode(0)
        let pre = dummy

        while(l1 && l2 ){
            if(l1.val <= l2.val ){
                pre.next = l1
                l1 = l1.next
            }else{
                pre.next = l2
                l2 = l2.next
            }
            pre = pre.next
        }

        pre.next = l1 || l2 

        return dummy.next
    }
}
