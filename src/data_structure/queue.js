import LinkedList from './linked_list'

export default class Queue {
  constructor() {
    this._elements = new LinkedList()

  }

  isEmpty() {
    return this._elements.isEmpty()
  }

  push(e) {
    this._elements.add(e)
  }

  pop() {
    if (!this.isEmpty()){
      let node = this._elements.head
      this._elements.delete(node)
      return node.value
    }
  }

  peak() {
    if (!this.isEmpty()) {
      return this._elements.head
    }
  }
}
