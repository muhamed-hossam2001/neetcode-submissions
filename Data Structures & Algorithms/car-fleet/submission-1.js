class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
      const time = []
       const cars = position.map((pos,idx)=>[pos,speed[idx]]).sort((a,b)=>b[0]-a[0])

        for(const [pos,spd] of cars){
            const t = (target-pos)/spd

            if(time.length==0 || t> time[time.length-1]){
                time.push(t)
            }
        }
      
      return time.length
    }
}
