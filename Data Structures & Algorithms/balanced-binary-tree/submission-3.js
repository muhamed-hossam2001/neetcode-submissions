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
     * @return {boolean}
     */
    isbalanced = true
    isBalanced(root) {

        const getHight = (root)=>{
            if(!root){
                return 0
            }

            const left = getHight(root.left)
            const right = getHight(root.right)

            if(!this.isbalanced){
                return 0
            }

            this.isbalanced = Math.abs(left-right) <=1

            return Math.max(left,right) +1 
            
        }
       
       getHight(root)

       return this.isbalanced
        
    }
}
