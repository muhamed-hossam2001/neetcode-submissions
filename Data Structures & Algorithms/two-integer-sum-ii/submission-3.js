class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let low = 0 
        let high = numbers.length -1

        while(low<high){
             if(numbers[high]+numbers[low]>target){
                high--
            }else if(numbers[high]+numbers[low]<target){
                low++
            }else{
                return ([low+1,high+1])
            }
        }



    }
}
