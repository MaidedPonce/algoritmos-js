class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queues {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first
    }
    enqueue(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this;
    }
    dequeue() {
        if (this.length === 0) return
        const holdingPointer = this.first.next
        this.first = holdingPointer
        this.length --
        return this
    }
}

const myStack = new Queues()
myStack.enqueue(8)
myStack.enqueue(2)
myStack.enqueue(6)
// myStack.enqueue(30)
// console.log(myStack.enqueue(29))
console.log(myStack.dequeue())