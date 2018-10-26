class Stack {

  constructor() {
    this.storage = {};
    this.storageSize = 0;
  }


  push(value) {
    this.storage[this.storageSize] = value;
    this.storageSize++;
  }


  pop() {
    if (this.storageSize > 0) {
      var result = this.storage[this.storageSize - 1];
      delete this.storage[this.storageSize - 1];
      this.storageSize--;
      return result;
    }
  }


  size() {
    return this.storageSize;
  }

}
var e = new Stack();
// the constructor will be convert to object and the funnction
//will be save in the prototype of the class (Stack.prototype)
