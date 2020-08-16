class Deque {
  constructor () {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  addFront (element) {
    if (this.isEmpty()) {
      this.addBack(element)
    } else if (this.lowestCount > 0) { // 前面有位置
      this.lowestCount --
      this.items[this.lowestCount] = element
    } else {  // 前面无位置
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.count++
      this.items[0] = element
      this.lowestCount = 0
    }
  }

  addBack (element) {
    this.items[this.count] = element
    this.count ++
  }

  removeFront () {
    if (this.isEmpty()) return undefined
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount ++
    return result
  }

  removeBack () {
    if (this.isEmpty()) return undefined
    this.count --
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  peekBack () {
    return this.items[this.count - 1]
  }

  peekFront () {
    return this.items[this.lowestCount]
  }

  isEmpty () {
    return this.count - this.lowestCount === 0
  }

  clear () {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  size () {
    return this.count - this.lowestCount
  }
}

const deque = new Deque()

console.log(deque.isEmpty())  // true

deque.addBack('John')

deque.addBack('Jack')

console.log(deque.items)

deque.addBack('Camila')

console.log(deque.items)

deque.removeBack()

console.log(deque.items)

// 回文
function palindromeChecker (aString) {
  if (aString === undefined || aString === null || (aString !== null && aString === 0)) {
    return false
  }
  const deque = new Deque()

  const lowerString = aString.toLocaleLowerCase().split(' ').join('')

  let isEqual = true

  let firstChar, lastChar

  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i))
  }

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront()
    lastChar = deque.removeBack()
    if (firstChar !== lastChar) {
      isEqual = false
    }
  }
  return isEqual
}
