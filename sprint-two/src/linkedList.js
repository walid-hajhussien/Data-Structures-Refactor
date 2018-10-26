var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // the head.next and tail have the same instance
      //that mean when the tail.next change the head.next
      //will be change
      this.tail.next = newNode;
      this.tail = newNode
    }

  };

  list.removeHead = function() {
    if (this.head) {
      var result = this.head.value;
      this.head = this.head.next;
      return result;
    }
  };

  list.contains = function(target) {
    var check = this.head
    while (check) {
      if (check.value === target) {
        return true
      } else {
        check = check.next;
      }


    }

    return false

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
