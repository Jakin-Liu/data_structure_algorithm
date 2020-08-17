class Node {
  constructor (element) {
    this.element = element
    this.next = undefined
  }
}

function defaultEquals (a, b) {
  return a === b
}

class LinkedList {

  constructor (equalsFn = defaultEquals) {
    this.count = 0
    this.head = undefined
    this.equalsFn = equalsFn
  }

  push (element) {
    let current
    const node = new Node(element)
    if (this.head == null) {
      this.head = node
    } else {
      current = this.head
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count ++
  }

  insert (element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      if (index === 0) {
        let current = this.head
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        let current = previous.next
        node.next = current
        previous.next = node
      }
    }
  }

  getElementAt (index) {
    if (index > 0 && index <= this.count) {
      let current = this.head
      for (let i = 0; i < index && current != null; i++) {
        current = current.next
      }
      return current
    }
    return undefined
  }

  remove (element) {
    const index = this.indexOf(element)
    return this.removeAt(element)
  }

  indexOf (element) {
    let current = this.head
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }

  removeAt (index) {
    if (index < 0 || index >= this.count) return undefined
    let current = this.head
    if (index === 0) {
      this.head = current.next
    } else {
      const previous = this.getElementAt(index - 1)
      current = previous.next
      previous.next = current.next
    }
    this.count --
    return current.element
  }

  isEmpty () {
    return this.count === 0
  }

  size () {
    return this.count
  }

  getHead () {
    return this.head
  }
}