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
       
        const gethight = (root)=>{
            if((!root)){
                return 0
            }
           
            const hightleft = gethight(root.left)
            const hightright = gethight(root.right)
            if(!this.isbalanced){
                return 
            }
            this.isbalanced = Math.abs(hightleft-hightright) <=1

            return 1+ Math.max(hightleft,hightright)
        }
        
        gethight(root)

        return this.isbalanced
        
    }
}
