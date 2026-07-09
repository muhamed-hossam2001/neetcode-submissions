class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
       if(s.length<t.length) return ""

       const tmap = new Map()

       for(let i = 0 ; i < t.length ; i++){
            tmap.set(t[i], (tmap.get(t[i])||0)  + 1)
       }

        let l = 0 
        const windowfreq = new Map()
        let matches = 0
        const requiredMatches = tmap.size

        let lmin = 0
        let minlen = Infinity

        for(let r =0 ; r<s.length ; r++){
            const charR = s[r]
            windowfreq.set(charR , (windowfreq.get(charR)||0)+1)
            if(tmap.get(charR)==windowfreq.get(charR)) matches++
            while(matches==requiredMatches){
                if(r-l+1 < minlen){
                    minlen = r-l+1
                    lmin = l
                }
                const charL = s[l]
               windowfreq.set(charL , windowfreq.get(charL)-1)

            if(tmap.get(charL) == windowfreq.get(charL)+1) matches--

                l++
            }

        }
        return minlen==Infinity ? "" : s.slice(lmin ,lmin + minlen) 
    }
}
