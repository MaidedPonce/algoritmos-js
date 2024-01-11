class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }
  // este metodo retorna el hash exista o no
  hashMethod(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }
  set(key, value) {
    const address = this.hashMethod(key)
    if (!this.data[address]) {
      this.data[address] = []
    }
    this.data[address].push([key, value])
    return this.data
  }
  get(key) {
    const address = this.hashMethod(key)
    console.log(address, this.data[address])
    const currentBucket = this.data[address]
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }
    return undefined
  }
  delete(key) {
    const address = this.hashMethod(key)
    const currentBucket = this.data[address]
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          if (currentBucket.length > 1) {
            const itemDeleted = currentBucket[i]
            for (let o = 0; o < currentBucket.length; o++) {
              // el primer elemento será igual al que le sigue al primero
              currentBucket[o] = currentBucket[o + 1]
            }
            delete currentBucket[currentBucket.length - 1]
            currentBucket.length--
            return itemDeleted
          } else {
            delete this.data[address]
            return currentBucket[i]
          }
        }
      }
    }
    return undefined
  }
  getAllKeys() {
    const box = []
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let o = 0; o < this.data[i].length; o++) {
          box.push(this.data[i][o][0])
        }
      }
    }
    return box
  }
}

const myHashTable = new HashTable(50)

myHashTable.set('keeee', 2013)
myHashTable.set('keeee', 2010)
myHashTable.set('holi', 2010)
console.log(myHashTable.getAllKeys())
//console.log(myHashTable.delete('keeee'))
