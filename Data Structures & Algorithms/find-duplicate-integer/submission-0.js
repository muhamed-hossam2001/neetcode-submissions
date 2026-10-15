class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const unieq = new Set()

        for(let i = 0 ; i< nums.length ; i++){
            if(!unieq.has(nums[i])){
                unieq.add(nums[i])
            }else{
                return nums[i]
            }
        }
    }
}
