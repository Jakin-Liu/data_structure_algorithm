/**
 * 队列是一种遵从先进先出原则的有序集合。
 * 新添加或者删除的元素都保存在栈的同一端、叫做栈顶，另一端叫做栈底。
 * 常见的场景如书本叠加、餐碟碟子摆放
 * 
 * 创建基于Javascript 数组的栈数据结构
 */
class Queue {
  constructor () {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  enqueue (element) {
    this.items[this.count] = element
    this.count ++
  }

  dequeue () {
    if (this.isEmpty()) return undefined
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount ++
    return result
  }

  peek () {
    if (this.isEmpty()) return undefined
    return this.items[this.lowestCount]
  }

  isEmpty () {
    return this.count - this.lowestCount === 0
  }

  size () {
    return this.count - this.lowestCount
  }

  clear () {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }
}

function hotPotato (elementsList, num) {
  const queue = new Queue()
  const elimitatedList = []

  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i])
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    elimitatedList.push(queue.dequeue())
  }
  return {
    elimitated: elimitatedList,
    winner: queue.dequeue()
  }
}

const names = ['John', 'Jack', 'Camila', 'Ingird', 'Carl']
const result = hotPotato(names, 7)
result.elimitated.forEach(name => {
  console.log(`${name}在击鼓游戏中被淘汰`)
})

console.log(`胜利者：${result.winner}`)
