// 1 --> 2 --> 3 --> null

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
        this.prev = null
    }
}

class MyDoublyLinkedList {
    constructor(value = 1) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head

        this.lenght = 1
    }
    // nodo nuevo se convertira en la cola
    append(value) {
        const newNode = new Node(value)
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        
         this.lenght ++
        return this
    }
    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.head.prev = null
         this.lenght ++
        return this
    }
    insert (index, value) {
        if (index >= this.lenght) {
            this.append(value)
        }
        const newNode = new Node(value)
        // obtengo el valor de mi pointer de atras
        const firsPointer = this.getIndex(index -1)
        // guardo el valor nex (el siguiente valor del pointer)
        const holdingPointer = firsPointer.next
        firsPointer.next = newNode
        newNode.next = holdingPointer
        newNode.prev = firsPointer
        holdingPointer.prev = newNode
        this.lenght ++
        return this
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
        console.log('current Node: ', currentNode)
        return currentNode
    }
}

let myLinkedList = new MyDoublyLinkedList(1)
myLinkedList.append(8)
myLinkedList.append(86)
myLinkedList.append(6)
myLinkedList.append(4)

console.log(myLinkedList.insert(2, 19))

