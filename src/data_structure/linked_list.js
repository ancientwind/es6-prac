/**
* doubly linked list
*/
import Node from './linked_list'

export class LinkedList {
	constructor() {
		this.length = 0
		this.head = null
		this.tail = null
	}
	
	/**
	* add a new node(value) at index position;
	* the existed node will move behind
	*/
	add(value, index) {
		if (index > this.length || index < 0) {
			throw new Error('out of index')
		}

		const node = new Node(value)

		if (index !== undefined && index < this.length) {

			if (this.length === 0) {
				this.head = node
				this.tail = node
			} else {
				let nextNode = this.getNode(index)
				nextNode.prev.next = node
				node.next = nextNode
				node.prev = nextNode.prev
				nextNode.prev = node
			}
			this.length++
		}
	}

	/**
	* delete node at index position
	*/
	delete(index) {
		if (this.validate(index)) {
			this.deleteNode(this.getNode(index))
		}
	}

	deleteNode(node) {
		if ( node === this.head ) {
			this.head = node.next
			node.next.prev = null
		} else if ( node === this.tail) {
			this.tail = node.prev
			node.prev.next = null
		} else {
			node.prev.next = node.next
			node.next.prev = node.prev
		}
		this.length--;
	}

	validate(index) {
		if ( index === undefined || index > this.length || index < 0) {
			return false
		} else {
			return true
		}
	}

	iterate() {
		let node = this.head
		while(node) {
			console.log(node.value)
			node = node.next
		}
	}

	getNode(index) {
		if (index !== undefined && index < this.length && index >= 0) {
			let node = this.head
			for (var i = index ; i > 0; i--) {
				node = node.next
			}
			return node
	}


}