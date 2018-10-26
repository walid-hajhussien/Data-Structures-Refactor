// Instantiate a new graph
var Graph = function() {
  this.nodes = []
  this.edges = []
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var obj = {}
  obj.value = node

  this.nodes.push(obj)
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      return true
    }
  }
  return false
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      var v = this.nodes[i].value;
      this.nodes.splice(i, 1)

      for (var r = 0; r < this.edges.length; r++) {
        if (this.edges[r].Target === v || this.edges[r].source === v) {
          this.removeEdge(this.edges[r].Target, this.edges[r].source)
        }

      }
    }
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  for (var i = 0; i < this.edges.length; i++) {
    if ((this.edges[i].source === fromNode && this.edges[i].Target === toNode) || (this.edges[i].source === toNode && this.edges[i].Target === fromNode)) {
      return true
    }
  }
  return false
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var objEdge = {}
  objEdge.source = fromNode;
  objEdge.Target = toNode;
  this.edges.push(objEdge)
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  for (var i = 0; i < this.edges.length; i++) {
    if ((this.edges[i].source === fromNode && this.edges[i].Target === toNode) || (this.edges[i].source === toNode && this.edges[i].Target === fromNode)) {


      this.edges.splice(i, 1)


    }

  }


};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i].value)

  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
