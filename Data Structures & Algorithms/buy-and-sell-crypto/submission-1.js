class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0
        let r = 1
        let maxProfit = 0
        while(r<=prices.length-1){
            let temp = prices[r]-prices[l]
            if(temp<=0){
                l=r
                r++
            }else if(temp>0 && temp < maxProfit){
                r++
            }else{
                maxProfit=temp
                r++
            }
        }

        return maxProfit

    }
}
