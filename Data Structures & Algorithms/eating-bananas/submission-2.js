class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
       let l = 0 
       let r = Math.max(...piles)
        let res = r
       while(l<=r){
        let hours = 0
        const k =Math.floor((l+r)/2)
        for(const p of piles){
            hours+= Math.ceil(p/k)
        }
        if(hours<=h){
            res= k
            r=k-1
        }else{
            l=k+1
        }
       }

       return res
    }
}
