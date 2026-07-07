class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false
       const s1map = new Map()
       const s2map = new Map()

        for(let i =97 ; i<=122 ; i++){
            s1map.set(String.fromCharCode(i),0)
            s2map.set(String.fromCharCode(i),0)
        }

        for(let i = 0 ; i<s1.length ; i++){
            s1map.set(s1[i],s1map.get(s1[i])+1)
            s2map.set(s2[i],s2map.get(s2[i])+1)
        }

        let matches = 0 

        for(let i =97; i<=122 ; i++){
            if(s1map.get(String.fromCharCode(i))==s2map.get(String.fromCharCode(i)))
            matches++
        }

        let l =0 

        for(let r=s1.length ; r<s2.length ; r++){
            if(matches==26) return true
            s2map.set(s2[r],s2map.get(s2[r])+1)

            if(s2map.get(s2[r])==s1map.get(s2[r])){
                matches++
            }else if (s2map.get(s2[r])==s1map.get(s2[r])+1){
                matches--
            }

           s2map.set(s2[l],s2map.get(s2[l])-1)
           if(s2map.get(s2[l])==s1map.get(s2[l])){
                matches++
            }else if (s1map.get(s2[l])-1==s2map.get(s2[l])){
                matches--
            }
            l++
        }

        return matches==26

    }
}
