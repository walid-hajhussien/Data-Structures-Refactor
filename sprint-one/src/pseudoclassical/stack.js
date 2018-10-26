var Stack = function() {

  this.storage = {};
  this.storageSize = 0;

};


Stack.prototype.push = function(value) {
  this.storage[this.storageSize] = value;
  this.storageSize++;

}

Stack.prototype.pop = function() {
  if (this.storageSize > 0) {
    var result = this.storage[this.storageSize - 1]
    delete this.storage[this.storageSize - 1];
    this.storageSize--;
    return result;
  }

}

Stack.prototype.size = function() {
  return this.storageSize;

}


var obj1 = new Stack();
console.log(obj1.size()); //0
