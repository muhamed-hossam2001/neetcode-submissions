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

    diameter = 0
    diameterOfBinaryTree(root) {
        
        const dsf = (root)=>{
            if(!root){
                return 0
            }
            let left = dsf(root.left)
            let right = dsf(root.right)

            this.diameter = Math.max(this.diameter,left+right)

            return Math.max(left,right)+1
        }

        dsf(root)

        return this.diameter

    }
}
