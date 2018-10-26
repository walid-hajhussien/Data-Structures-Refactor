class Queue {

  constructor() {
    this.storage = {};
    this.storageSize = 0;
  }



  enqueue(value) {
    this.storage[this.storageSize] = value;
    this.storageSize++;

  }

  dequeue() {
    if (this.storageSize > 0) {
      var result = this.storage[0];
      delete this.storage[0];
      this.storageSize--;
      for (var k in this.storage) {
        var reset = this.storage[k];
        delete this.storage[k];
        this.storage[k - 1] = reset;
      }
      return result;

    }

  }

  size() {
    return this.storageSize;
  }


}
