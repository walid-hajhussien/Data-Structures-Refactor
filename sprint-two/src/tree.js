var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;


  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var obj = {};
  obj.value = value;
  obj.children = [];
  _.extend(obj, treeMethods)
  this.children.push(obj);

};

treeMethods.contains = function(target) {

  var final = false;
  var main = this;
  if (main.value === target) {
    return true
  } else if (main) {
    for (var i = 0; i < main.children.length; i++) {
      final = main.children[i].contains(target);
      if (final === true) {
        return true
      }

    }
  }

  return final;
}





/*
 * Complexity: What is the time complexity of the above functions?
 */
