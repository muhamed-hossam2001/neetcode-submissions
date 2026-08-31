class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 0
        let r =Math.max(...piles)
        let res = r
        while(l<=r){
            const mid = Math.floor((l+r)/2)

            let mid_h=0

            for(const pile of piles){
                mid_h += Math.ceil(pile/mid)
            }
            if(mid_h>h){
                l=mid+1
            }else{
                res = mid
                r=mid-1
            }
        }
        return res
    }
}
