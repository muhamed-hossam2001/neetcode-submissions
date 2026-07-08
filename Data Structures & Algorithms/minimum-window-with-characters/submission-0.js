class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(s.length<t.length) return ""
        const tmap = new Map()
        for(let i =0 ; i<t.length ; i++){
            tmap.set(t[i],(tmap.get(t[i])||0)+1)
        }

        let l =0
        const windowfreq = new Map()
        let matches = 0
        const requiredMatches = tmap.size

        let minlen = Infinity
        let minstart = 0

        for(let r =0 ; r<s.length ; r++){
            windowfreq.set(s[r],(windowfreq.get(s[r])||0) +1)
            if(windowfreq.get(s[r])==tmap.get(s[r])) matches++


            while(matches==requiredMatches){
                if(r-l+1 < minlen){
                    minlen = r-l+1
                    minstart = l
                }

             windowfreq.set(s[l],windowfreq.get(s[l])-1)

            if(windowfreq.get(s[l])<tmap.get(s[l])){
                matches--
            }

            l++
            }

        }

        return minlen == Infinity ? '' : s.slice(minstart,minstart+minlen)


    }
}
