class Node {
    constructor(value) {
        this.left = null
        this.right = null
        this.value = value
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
        } else {
            let currentNode = this.root
            while (true) {
                if (value < currentNode.value) {
                    // convierte el lado izquierdo en el root izquierdo
                    if (!currentNode.left) {
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                }
            }
        }
    }
    // si yo le paso un numero, tiene que regresar el nodo en que existe
    search(number) {
        if (this.root.value === number) {
            return this.root
        } else {
            let currentNode = this.root
            while (true) {
                if (number < currentNode.value) {
                    currentNode = currentNode.left
                    if (currentNode.value === number) {
                        return currentNode
                    }
                } else {
                    currentNode = currentNode.right
                    if (currentNode.value === number) {
                        return currentNode
                    }
                }
            }
        }

    }
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(4)
tree.insert(20)
tree.insert(2)
tree.insert(8)
tree.insert(17)
tree.insert(170)
console.log(tree.search(20))
