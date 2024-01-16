class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top
    }
    push(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.top = newNode
            this.bottom = newNode
        } else {
            const holdingPointer = this.top
            this.top = newNode
            this.top.next = holdingPointer
        }
        this.length++
        return this;
    }
    pop() {
        if (this.length === 0) return
        const holdingPointer = this.top.next
        this.top = holdingPointer
        this.length --
        return this
    }
}

const myStack = new Stack()
myStack.push(8)
myStack.push(2)
myStack.push(6)
console.log(myStack.push(29))
console.log(myStack.pop())