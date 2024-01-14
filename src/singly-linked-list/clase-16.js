// 1 --> 2 --> 3 --> null

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class MySinglyLinkedList {
    constructor(value = 1) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head

        this.lenght = 1
    }
    // nodo nuevo se convertira en la cola
    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        
         this.lenght ++
        return this
    }
    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        
         this.lenght ++
        return this
    }
    insert (index, value) {
        if (index >= this.lenght) {
            this.append(value)
        }
        const newNode = new Node(value)
        const firsPointer = this.getIndex(index -1)
        const holdingPointer = firsPointer.next
        firsPointer.next = newNode
        newNode.next = holdingPointer
    }
    remove(index) {
        const previousPointer = this.getIndex(index - 1);
        const holdingPointer = this.getIndex(index + 1);
   
        previousPointer.next = holdingPointer;
           
        this.lenght--;
   
        return this;
   }
           
    getIndex(index) {
        let counter = 0
        let currentNode = this.head

        while(counter !== index) {
            currentNode = currentNode.next
            counter ++
        }
        return currentNode
    }
}

let myLinkedList = new MySinglyLinkedList(1)
console.log(myLinkedList.append(8))
console.log(myLinkedList.prepend(82))
console.log(myLinkedList.remove(1))

console.log(myLinkedList)
