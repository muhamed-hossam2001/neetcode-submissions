class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const n = matrix.length
        const m = matrix[0].length


        for(const row of matrix){
            if(target>=row[0]&&target<=row[m-1]){
                let l =0 
                let r = m-1
                while(l<=r){
                    const mid = Math.floor((l+r)/2)
                    if(target>row[mid]){
                        l=mid+1
                    }else if(target<row[mid]){
                        r=mid-1
                    }else{
                        return true
                    }
                }
            }
        }
        return false
        
    }
}
