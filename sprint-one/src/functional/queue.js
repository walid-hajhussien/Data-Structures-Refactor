var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var storageSize = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[storageSize] = value;
    storageSize++;
  };

  someInstance.dequeue = function() {
    if (storageSize > 0) {
      var result = storage[0];
      delete storage[0];
      storageSize--;
      for (var k in storage) {
        var reset = storage[k];
        delete storage[k];
        storage[k - 1] = reset;
      }
      return result;
    }
  };

  someInstance.size = function() {
    return storageSize;
  };

  return someInstance;
};
