/**
 * 创建基于Javascript 对象的栈数据结构
 * 每个方法的复杂度都是O(1)
 */

 class Stack {
   constructor () {
     this.items = {}
     this.count = 0
   }

   push (element) {
     this.items[this.count] = element
     this.count ++
   }

   pop () {
     if (this.isEmpty()) return undefined
     this.count --
     const result = this.items[this.count]
     delete this.items[this.count]
     return result
   }

   peek () {
    if (this.isEmpty()) return undefined
     return this.items[this.count - 1]
   }

   isEmpty () {
     return this.count === 0
   }

   clear () {
     this.items = {}
     this.count = 0
   }

   size () {
     return this.count
   }
 }

 const stack = new Stack()

 stack.push(1)

 stack.push(8)

 console.log(stack.items)

stack.pop()

 console.log(stack.items)
 
