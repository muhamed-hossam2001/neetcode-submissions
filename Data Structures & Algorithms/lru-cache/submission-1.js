class Node {
      constructor(key=0 ,val = 0, next = null, prev = null) {
          this.key = key;
          this.val = val;
          this.next = next;
          this.prev = prev;
      }
 }

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity
       this.left = new Node(0,0)
       this.right = new Node(0,0)

       this.left.next = this.right
       this.right.prev = this.left

       this.cache = new Map()

    }
    remove(node){

        node.prev.next = node.next
        node.next.prev = node.prev
       
    }
    insert(node){
        node.prev = this.right.prev
        this.right.prev.next = node
        node.next = this.right
        this.right.prev = node
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
       if(this.cache.has(key)){
        let node = this.cache.get(key)
        this.remove(node)
        this.insert(node)
        return node.val
       }

       return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)){
           this.remove(this.cache.get(key))
        }
        let node = new Node(key,value)
        this.insert(node)
        this.cache.set(key,node)  

        if(this.cache.size > this.cap){
             this.cache.delete(this.left.next.key)
            this.remove(this.left.next)
           
        }
        
    }
}
