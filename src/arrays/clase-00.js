class MyArray {
  constructor() {
    this.lenght = 0
    this.data = {}
  }

  get(index) {
    return this.data[index]
  }
  push(item) {
    this.data[this.lenght] = item
    this.lenght++
    console.log(this.data)
    return this.data
  }
  pop() {
    const lastItem = this.data[this.lenght - 1]
    delete this.data[this.lenght - 1]
    this.lenght--
    return lastItem
  }
  delete(index) {
    const item = this.data[index]
    this.shiftIndex(item)
    return item
  }

  shiftIndex(index) {
    for (let i = index; i < this.lenght - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    // decrementa la longitud del array
    delete this.data[this.lenght - 1]
    this.lenght--
    console.log(this.data)
  }
  shift() {
    if (this.lenght === undefined) return undefined
    const itemDeleted = this.data[0]
    for (let i = 0; i < this.lenght; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.lenght - 1]
    this.lenght++
    return itemDeleted
  }
  unshift(item) {
    if (!item) return this.data
    for (let i = this.lenght; i >= 0; i--) {
      this.data[i] = this.data[i - 1]
    }
    this.data[0] = item
    this.lenght++
    return this.data
  }
}

const myArray = new MyArray()

myArray.push('a')
myArray.push('e')
myArray.push('i')
console.log(myArray.shift())
//console.log(myArray.unshift("Hola"));
//console.log(myArray.unshift("PlatziNauta"));
