var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var storageSize = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[storageSize] = value;
    storageSize++;
  };

  someInstance.pop = function() {
    if (storageSize > 0) {
      var result = storage[storageSize - 1]
      delete storage[storageSize - 1];
      storageSize--;
      return result;
    }

  };

  someInstance.size = function() {
    return storageSize;

  };

  return someInstance;
};
