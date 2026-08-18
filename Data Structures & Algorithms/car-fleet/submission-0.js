class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
       const cars = position.map((pos,idx)=>[pos,speed[idx]]).sort((a,b)=>b[0]-a[0])
        const time = []

        for(const [pos,speed] of cars){
            const t = (target-pos)/speed
           if(time.length==0 || t > time[time.length-1]){
            time.push(t)
           }

            }
         return time.length   
    }
}
