class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
      if(!this.keyStore.has(key)){
        this.keyStore.set(key,[])
      }
      this.keyStore.get(key).push([value,timestamp])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const list = this.keyStore.get(key) || []
        let res=''
        let l = 0
        let r = list.length-1

        while(l<=r){
            const mid  = Math.floor((l+r)/2)
            if(list[mid][1]<=timestamp){
                res=list[mid][0]
                l=mid+1
            }else{
                r=mid-1
            }
        }
        return res
    }
}
