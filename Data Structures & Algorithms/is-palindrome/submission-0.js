class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        const cs = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
        let low = 0 
        let high = cs.length -1

        while(low<high){
            if(cs[low]!==cs[high]){
                return false
            }
            low++
            high--
        }

        return true

    }
}
