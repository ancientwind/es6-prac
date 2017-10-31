import LinkedList from './linked_list'

export class Stack {
  constructor() {
    this._elements = new LinkedList()

    Object.defineProperty(this, 'length', {
      get: () => this._elements.length
    })
  }

  isEmpty() {
    this._elements.isEmpty()
  }

  push(e) {
    // add to the end
    this._elements.add(e)
  }

  pop() {
    if (!this.isEmpty()) {
      let node = this._elements.tail
      this._elements.delete(node)
      return node.value
    }
  }

  peak() {
    if (!this.isEmpty()) {
      return this._elements.tail.value
    }
  }

}
