class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        const n = s.length
        let l =0
        let res = 0
        const charSet = new Set()

        for(let r = 0 ; r <n ; r++){

            while(charSet.has(s[r])){
                charSet.delete(s[l])
                l++
            }

            charSet.add(s[r])
            res = Math.max(res,charSet.size)
        }


        return res

    }
}
