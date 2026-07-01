class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const charfreq = {}
        let l =0 
        let r =0
        let maxLength =0
        let maxfeq = 0

      for(let r =0 ; r<s.length ; r++){
        const rightChar = s[r]
        charfreq[rightChar] = (charfreq[rightChar] || 0) +1

        maxfeq = Math.max(charfreq[rightChar],maxfeq)

        while((r-l+1)-maxfeq > k){
            const leftchsr = s[l]
            charfreq[leftchsr]--
            l++
        }
        maxLength=Math.max(maxLength,r-l+1)
      }
        return maxLength
    }
}
