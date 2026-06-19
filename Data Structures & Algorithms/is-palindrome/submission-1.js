class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        const cs = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
        return cs===cs.split('').reverse().join('')

    }
}
