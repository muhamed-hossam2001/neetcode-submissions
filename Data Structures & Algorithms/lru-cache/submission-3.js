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
       node.prev.next=node.next
       node.next.prev = node.prev
    }
    insert(node){
       node.next= this.right
       node.prev = this.right.prev
       this.right.prev = node
       node.prev.next = node
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
       if(this.cache.has(key)){
        this.remove(this.cache.get(key))
        this.insert(this.cache.get(key))
        return this.cache.get(key).val
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

        this.cache.set(key,new Node(key,value))
        this.insert(this.cache.get(key))

        if(this.cache.size>this.cap){
            this.cache.delete(this.left.next.key)
            this.remove(this.left.next)
        }
    }
}
