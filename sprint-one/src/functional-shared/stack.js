var Stack = function() {
  var obj = {};
  obj.storage = {};
  obj.storageSize = 0;
  obj.pop = stackMethods.pop;
  obj.push = stackMethods.push;
  obj.size = stackMethods.size;

  return obj

};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.storageSize] = value;
  this.storageSize++

}

stackMethods.pop = function() {
  if (this.storageSize > 0) {
    var result = this.storage[this.storageSize - 1];
    delete this.storage[this.storageSize - 1]
    this.storageSize--;
    return result

  }

}

stackMethods.size = function() {
  return this.storageSize;

}
