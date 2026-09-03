class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l =0
        let r = nums.length-1
        let min = nums[0]

        while(l<=r){
            if(nums[l]<=nums[r]){
                min = Math.min(min,nums[l])
            }
            const m = Math.floor((r+l)/2)
            min=Math.min(min,nums[m])

            if(nums[m]>=nums[l]){
                l=m+1
            }else{
                r=m-1
            }
        }
        return min
    }
}
