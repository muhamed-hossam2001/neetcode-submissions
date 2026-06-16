class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length
        const result = new Array(n)

        let prefixProduct = 1
        for(let i = 0 ; i<n ; i++){
            result[i] = prefixProduct
            prefixProduct*=nums[i]
        }

        let sufixProduct = 1
        for(let i =n-1 ;i>=0 ; i--){
            result[i]*=sufixProduct
            sufixProduct*=nums[i]
        }

        return result
    }
}
