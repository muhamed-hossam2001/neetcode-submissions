/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    good=0
    goodNodes(root,max=root.val) {

       
            if(!root){
                return false
            }
            if(root.val>=max){
                max = root.val
               this.good++
            }
            this.goodNodes(root.left,max)
            this.goodNodes(root.right,max)
            return this.good
       
    }
}
