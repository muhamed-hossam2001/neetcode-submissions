class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const closing = {
            ')': '(',
            '}':'{' ,
            ']': '['
        }

        for ( let char of s){
            if(char =='(' || char =='[' || char=='{'){
                stack.push(char)
            }else {
                const opening = stack.pop()
                if (closing[char] !== opening) return false
            }
        }

        return stack.length == 0
    }
}
