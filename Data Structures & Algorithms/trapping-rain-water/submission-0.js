class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length 
        const prefix = new Array(n)
        const sufix = new Array(n)
        let totalWater=0
        prefix[0]=height[0]

        for(let i =1 ; i<n ; i++){
            prefix[i] = Math.max(prefix[i-1],height[i])
        }

        sufix[n-1]=height[n-1]

        for(let i = n-2 ; i>=0 ; i--){
            sufix[i]= Math.max(sufix[i+1],height[i])
        }

        for(let i =0 ; i<n ; i++){
            totalWater+= Math.min(prefix[i],sufix[i])-height[i]
        }

        return totalWater

    }
}
