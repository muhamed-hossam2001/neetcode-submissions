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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(!root){
            return false
        }
       if(root.val==subRoot.val){
            if(this.isTheSame(root,subRoot)){
                     return true
            }
       }
        
       
        return this.isSubtree(root.left,subRoot) ||  this.isSubtree(root.right,subRoot)
    }
     isTheSame(p,q){
            if(!p && !q){
                return true
            }
            if((!p&&q)||(!q&&p)){
                return false
            }
            if(p.val!=q.val){
                return false
            }

            return this.isTheSame(p.left,q.left)&&this.isTheSame(p.right,q.right)
        }
}
