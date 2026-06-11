class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const map = new Map()
        const res = []

        for(let i =0 ; i< nums.length ; i++){
            const key = nums[i]
            map.set(key , map.has(key) ? map.get(key)+1 : 1)
        }

       while(res.length<k){

        let maxKey = null;
        let maxValue = -Infinity;
        for (const [key, value] of map) {
            if (value > maxValue) {
                maxValue = value;
                maxKey = key;
            }
            }
      

       res.push(maxKey)
        map.delete(maxKey)
    }
        
        return res
    }
}
