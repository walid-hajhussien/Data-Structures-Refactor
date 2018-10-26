var Queue = function() {
  var obj = {}

  obj.storage = {};
  obj.storageSize = 0;
  obj.enqueue = queueMethods.enqueue;
  obj.dequeue = queueMethods.dequeue;
  obj.size = queueMethods.size;

  return obj;

};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.storageSize] = value;
  this.storageSize++;

}

queueMethods.dequeue = function() {
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

queueMethods.size = function() {
  return this.storageSize;
}
