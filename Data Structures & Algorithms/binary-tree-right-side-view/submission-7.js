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
     * @return {number[]}
     */
    rightSideView(root) {
        const res = []
        if(!root){
            return res
        }
        const q = []
        q.push(root)
        const level = []
        while(q.length>0){
            
            const qlength = q.length
            for(let i =0 ; i< qlength ; i++){
                const node = q.shift()
                if(node) level.push(node.val)
                if(node.left) q.push(node.left)
                if(node.right) q.push(node.right)
            }
            res.push(level.pop())
        }

        return res
    }
}
