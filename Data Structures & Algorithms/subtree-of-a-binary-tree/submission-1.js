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
            const isthesame = this.isTheSame(root,subRoot)
            if(isthesame){
                return true 
            }
        }
      return  this.isSubtree(root.left, subRoot) ||  this.isSubtree(root.right, subRoot)
    }

    isTheSame(q,p){
        if(!q&&!p){
            return true
        }
        if((!q&&p) || (!p&&q)){
            return false
        }
        if(q.val!==p.val){
            return false
        }

        return this.isTheSame(q.left,p.left) && this.isTheSame(q.right,p.right)
    }


}