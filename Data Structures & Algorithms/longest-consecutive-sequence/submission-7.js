class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
            const numsSet = new Set(nums)
            let res = 0
            let seq =0
            for(let i = 0 ; i < nums.length ; i++){
                if(numsSet.has(nums[i]-1))continue
                seq=1
                while(numsSet.has(nums[i]+seq)){
                    seq++
                }
                res = Math.max(res,seq)
            }

            return res
    }
}
