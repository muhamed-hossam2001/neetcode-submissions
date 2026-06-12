class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded =""

        for(const str of strs){
            encoded+=str
            encoded+=';'
        }

        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        let decoded = []
        let word = ''
        
        for(const char of str){
           
            if(char==';'){
                decoded.push(word)
                word=''
                continue
            }
            word+=char
        }

        return decoded
    }
}
