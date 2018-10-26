var BinarySearchTree = function(value) {
  var binarytree = Object.create(BinaryMethod)
  //binarytree.root=[];
  binarytree.left = null;
  binarytree.right = null;
  binarytree.value = value;
  return binarytree

};

var BinaryMethod = {};

BinaryMethod.insert = function(value) {

  var newnode = nodes(value);
  var current = this;
  if (!current.value) {
    console.log(current, newnode)
    current = newnode;
  } else {
    while (current) {
      if (current.value < newnode.value) {
        if (current.right) {
          current = current.right;

        } else {
          current.right = newnode;
          break;
        }

      } else {
        if (current.value > newnode.value) {
          if (current.left) {
            current = current.left;

          } else {
            current.left = newnode;
            break;
          }

        }


      }


    }
  }
}


BinaryMethod.contains = function(value) {

  var current = this
  var x = true


  while (current.value) {
    if (current.value === value) {
      return true
    }

    if (current.value < value) {
      current = current.right;
      if (current === null) {
        return false
      }


    } else if (current.value > value) {
      current = current.left;
      if (current === null) {
        return false
      }


    }

  }
  return false


}

BinaryMethod.depthFirstLog = function(cb) {

  var x = this;

  if (x.left.value) {
    cb(x.value)
    BinaryMethod.depthFirstLog.bind(cb, x.left)
    BinaryMethod.depthFirstLog.bind(cb, x.right)



  }
  if (x.right.value) {
    cb(x.value)
    BinaryMethod.depthFirstLog.bind(cb, x.left)
    BinaryMethod.depthFirstLog.bind(cb, x.right)

  }



}

function nodes(value) {
  var obj = {}
  obj.value = value;
  obj.left = null;
  obj.right = null;

  return obj
}
