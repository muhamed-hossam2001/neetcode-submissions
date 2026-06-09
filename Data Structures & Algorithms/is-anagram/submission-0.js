class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!=t.length){
            return false
        }
       const hashmap = new Map()
       for(let i =0 ; i<s.length ; i++){
        hashmap.set(s[i],hashmap.has(s[i])?hashmap.get(s[i])+1:1)
       }
       for(let i=0 ; i<t.length ; i++){
            if((!hashmap.has(t[i]))||hashmap.get(t[i])==0){
                return false
            }
             hashmap.set(t[i],hashmap.get(t[i])-1)
     }
        return Array.from(hashmap.values()).every(item=> item==0); 
    }
}