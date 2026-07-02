class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let charfreq = {}
        let l =0 
        let maxLength = 0
        let maxfreq = 0

        for(let r =0; r<s.length ; r++){
            const rightchar = s[r]
            charfreq[rightchar] = (charfreq[rightchar]||0) +1
            maxfreq = Math.max(maxfreq , charfreq[rightchar])

            while(r-l+1-maxfreq > k){
                const leftchar = s[l]
                charfreq[leftchar]--
                l++
            }
            maxLength = Math.max(maxLength , r-l+1)
        }
        return maxLength
    }
}
