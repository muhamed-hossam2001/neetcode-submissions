class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
       const total = nums1.length +nums2.length
       const half = Math.floor((total+1)/2)

       const A = nums1.length > nums2.length ? [...nums2] : [...nums1]
       const B = nums1.length > nums2.length ? [...nums1] : [...nums2]

       let l =0
       let r =A.length

       while(l<=r){
            const i = Math.floor((l+r)/2)
            const j = half-i

            const Aleft = i>0 ? A[i-1] : -Infinity
            const Aright = i<A.length ? A[i] : Infinity
            const Bleft = j>0 ? B[j-1] : -Infinity
            const Bright = j<B.length ? B[j] : Infinity

            if(Aleft<=Bright && Bleft<=Aright){
                if(total%2){
                    return Math.max(Aleft,Bleft)
                }else{
                    return (Math.max(Aleft,Bleft) + Math.min(Aright,Bright) ) / 2
                }
            }else if ( Aleft>Bright ){
                r = i-1
            }else{
                l=i+1
            }


       }

     }
}
