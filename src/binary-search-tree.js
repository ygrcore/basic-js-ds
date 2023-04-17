const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  root() {
    return this.root
  }

  add(value) {
    this.root = addNodeValue(this.root, value);

    function addNodeValue(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.value === value) {
        return node;
      }

      if (value < node.value) {
        node.left = addNodeValue(node.left, value);
      } else {
        node.right = addNodeValue(node.right, value);
      }

      return node;
    }
  }

  has(value) {
    return findValueExist(this.root, value);

    function findValueExist(node, value) {
      if (!node) {
        return false;
      }

      if (node.value === value) {
        return true;
      }

      return value < node.value ?
        findValueExist(node.left, value) :
        findValueExist(node.right, value);
    }
  }

  find(value) {
    this.root = searchTree(this.root, value);

    function searchTree(node, value) {
      if (!node) {
        return undefined
      } else if (value < node.value) {
        return this.searchTree(node.left, value)
      } else if (value > node.value) {
        return this.searchTree(node.right, value)
      } else {
        return node;
      }

    }
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
  }

  remove(value) {
    this.root = removeNode(this.root, value);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.value < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.value = minFromRight.value;

        node.right = removeNode(node.right, minFromRight.value);

        return node;
      }
    }
  }

  min() {
    if (!this.root) {
      return;
    }

    let node = this.root;
    while (node.left) {
      node = node.left;
    }

    return node.value;
  }

  max() {
    if (!this.root) {
      return;
    }

    let node = this.root;
    while (node.right) {
      node = node.right;
    }

    return node.value;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

module.exports = {
  BinarySearchTree
};