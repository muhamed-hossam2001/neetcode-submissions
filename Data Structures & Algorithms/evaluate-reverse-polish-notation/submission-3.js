class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []

        for(let token of tokens){
            if(token == '+'){
                stack.push(stack.pop()+stack.pop())
            }else if(token == '-'){
                let b = stack.pop() 
                let a = stack.pop()
                stack.push(a-b)
            }else if(token == '*'){
                stack.push(stack.pop()*stack.pop())
            }else if(token == '/'){
                let b = stack.pop() 
                let a = stack.pop()
                stack.push(Math.trunc(a/b))
            }else{
                stack.push(Number(token))
            }
        }
        return stack.pop()
    }
}
