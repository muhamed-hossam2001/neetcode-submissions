class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       const myMap = {}

       for(const str of strs){
        const key = str.split('').sort().join('')
        if(myMap[key]){
            myMap[key].push(str)
        }else{
            myMap[key] = [str]
        }
       }
       return Object.values(myMap)
    }
}
