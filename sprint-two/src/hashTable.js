var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index)

  //check if the bucket exist if not created
  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket)
  }
  // go throw the bucket and update the value
  var found = false;
  for (var i = 0; i < bucket.length; i++) {
    var taple = bucket[i]
    if (taple[0] === k) {
      taple[1] = v;
      found = true;
      break;
    }
  }

  // if not found created
  if (!found) {
    bucket.push([k, v]);
  }



};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);


  var bucket = this._storage.get(index)

  //check if the bucket exist if not return null
  if (!bucket) {

    return null;
  }

  // go throw the bucket and find the key

  for (var i = 0; i < bucket.length; i++) {
    var taple = bucket[i]
    if (taple[0] === k) {
      return taple[1]

    }
  }

  return undefined;

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index)

  //check if the bucket exist if not return null
  if (!bucket) {
    return null

  }
  // go throw the bucket and update the value

  for (var i = 0; i < bucket.length; i++) {
    var taple = bucket[i]
    if (taple[0] === k) {
      bucket.splice(i, 1);
      return taple[1];

    }
  }

  return null;


};



/*
 * Complexity: What is the time complexity of the above functions?
 */
