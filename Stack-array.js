/**
 * 栈是一种遵从后进先出原则的有序集合。
 * 新添加或者删除的元素都保存在栈的同一端、叫做栈顶，另一端叫做栈底。
 * 常见的场景如书本叠加、餐碟碟子摆放
 * 
 * 创建基于Javascript 数组的栈数据结构
 */

class Stack {
  constructor () {
    this.items = []
  }

  // 添加元素到栈顶
  push (element) {
    this.items.push(element)
  }

  // 移除栈顶的元素
  pop () {
    return this.items.pop()
  }

  // 返回栈顶的元素 不会删除栈顶元素
  peek () {
    return this.items[this.items.length - 1]
  }

  // 栈结构是否有元素
  isEmpty () {
    return this.items.length === 0
  }

  // 清空元素
  clear () {
    this.items = []
  }

  // 返回栈结构的元素个数
  size () {
    return this.items.length
  }
}

const stack = new Stack()

console.log(stack.isEmpty())  // true

console.log(stack.peek())  // undefined

stack.push(3)
stack.push(5)
stack.push(9)

console.log(stack.peek())  // 9

stack.push(10)

console.log(stack.size())  // 4

console.log(stack.isEmpty())  // false

stack.push(90)

console.log(stack.items)  // [ 3, 5, 9, 10, 90 ]

stack.pop()
stack.pop()

console.log(stack.items) // [ 3, 5, 9 ]

console.log(stack.size()) // 3
