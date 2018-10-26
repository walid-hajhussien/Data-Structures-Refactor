var Queue = function() {
  this.storage = {};
  this.storageSize = 0;

};



Queue.prototype.enqueue = function(value) {
  this.storage[this.storageSize] = value;
  this.storageSize++;

}

Queue.prototype.dequeue = function() {
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

Queue.prototype.size = function() {
  return this.storageSize;
}
