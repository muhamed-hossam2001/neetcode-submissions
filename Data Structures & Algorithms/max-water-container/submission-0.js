class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let low = 0
        let high = heights.length-1
        let maxWater = 0
        while(low<high){

            const water =  Math.min(heights[low],heights[high]) * (high-low)
            maxWater = Math.max(maxWater,water)
        
            if(heights[low] > heights[high]){
                high--
            }else{
                low++
            }
        }

        return maxWater

    }
}
